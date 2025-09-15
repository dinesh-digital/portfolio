interface LinkCheckResult {
  url: string;
  status: 'working' | 'broken' | 'redirect';
  statusCode?: number;
  redirectUrl?: string;
  error?: string;
}

interface LinkCheckReport {
  timestamp: string;
  totalLinks: number;
  workingLinks: number;
  brokenLinks: number;
  redirects: number;
  results: LinkCheckResult[];
}

export class LinkChecker {
  private static instance: LinkChecker;
  private checkHistory: LinkCheckReport[] = [];

  static getInstance(): LinkChecker {
    if (!LinkChecker.instance) {
      LinkChecker.instance = new LinkChecker();
    }
    return LinkChecker.instance;
  }

  async checkLink(url: string): Promise<LinkCheckResult> {
    try {
      // For internal links, check if they exist in our routing
      if (url.startsWith('/') || url.includes(window.location.hostname)) {
        return this.checkInternalLink(url);
      }

      // For external links, we'll simulate a check since we can't make cross-origin requests
      // In a real implementation, this would be done server-side
      return {
        url,
        status: 'working',
        statusCode: 200
      };
    } catch (error) {
      return {
        url,
        status: 'broken',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private checkInternalLink(url: string): LinkCheckResult {
    const internalRoutes = [
      '/',
      '/blog',
      '/#home',
      '/#about',
      '/#services',
      '/#projects',
      '/#case-studies',
      '/#certifications',
      '/#contact'
    ];

    // Extract the path from the URL
    const path = url.includes('#') ? url : url.split('?')[0];
    
    if (internalRoutes.includes(path) || path.startsWith('/blog/')) {
      return {
        url,
        status: 'working',
        statusCode: 200
      };
    }

    return {
      url,
      status: 'broken',
      statusCode: 404,
      error: 'Page not found'
    };
  }

  async checkAllLinks(): Promise<LinkCheckReport> {
    const links = this.extractAllLinks();
    const results: LinkCheckResult[] = [];

    for (const link of links) {
      const result = await this.checkLink(link);
      results.push(result);
    }

    const report: LinkCheckReport = {
      timestamp: new Date().toISOString(),
      totalLinks: results.length,
      workingLinks: results.filter(r => r.status === 'working').length,
      brokenLinks: results.filter(r => r.status === 'broken').length,
      redirects: results.filter(r => r.status === 'redirect').length,
      results
    };

    this.checkHistory.push(report);
    this.saveReportToStorage(report);

    return report;
  }

  private extractAllLinks(): string[] {
    const links: string[] = [];
    const elements = document.querySelectorAll('a[href]');
    
    elements.forEach(element => {
      const href = element.getAttribute('href');
      if (href && !links.includes(href)) {
        links.push(href);
      }
    });

    return links;
  }

  private saveReportToStorage(report: LinkCheckReport): void {
    try {
      const reports = this.getStoredReports();
      reports.push(report);
      
      // Keep only the last 10 reports
      const recentReports = reports.slice(-10);
      localStorage.setItem('linkCheckReports', JSON.stringify(recentReports));
    } catch (error) {
      console.error('Failed to save link check report:', error);
    }
  }

  getStoredReports(): LinkCheckReport[] {
    try {
      const stored = localStorage.getItem('linkCheckReports');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load link check reports:', error);
      return [];
    }
  }

  getLatestReport(): LinkCheckReport | null {
    const reports = this.getStoredReports();
    return reports.length > 0 ? reports[reports.length - 1] : null;
  }

  setupAutomaticChecking(): void {
    // Check links weekly (7 days = 7 * 24 * 60 * 60 * 1000 ms)
    const weeklyInterval = 7 * 24 * 60 * 60 * 1000;
    
    setInterval(() => {
      this.checkAllLinks().then(report => {
        console.log('Weekly link check completed:', report);
        
        // If there are broken links, you could show a notification
        if (report.brokenLinks > 0) {
          console.warn(`Found ${report.brokenLinks} broken links`);
        }
      });
    }, weeklyInterval);
  }

  redirectBrokenLink(originalUrl: string): void {
    // In a real implementation, this would set up a 301 redirect
    // For now, we'll just redirect to homepage
    if (window.location.pathname === originalUrl) {
      window.location.replace('/');
    }
  }
}

// Initialize link checker
export const linkChecker = LinkChecker.getInstance();

// Set up automatic checking when the module loads
if (typeof window !== 'undefined') {
  linkChecker.setupAutomaticChecking();
}