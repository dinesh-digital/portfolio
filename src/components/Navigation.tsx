import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

// Sidebar navigation component for internal linking
export const SidebarNavigation: React.FC = () => {
  const navigationSections = [
    {
      title: 'SEO Services',
      links: [
        { href: '/services/seo-audit', title: 'SEO Audit', description: 'Comprehensive website analysis' },
        { href: '/services/keyword-research', title: 'Keyword Research', description: 'Strategic keyword planning' },
        { href: '/services/technical-seo', title: 'Technical SEO', description: 'Site optimization & performance' },
        { href: '/services/local-seo', title: 'Local SEO', description: 'Local search optimization' },
        { href: '/services/content-optimization', title: 'Content Strategy', description: 'Content planning & optimization' },
        { href: '/services/link-building', title: 'Link Building', description: 'Quality backlink acquisition' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/blog', title: 'SEO Blog', description: 'Latest tips & strategies' },
        { href: '/#case-studies', title: 'Case Studies', description: 'Success stories & results' },
        { href: '/#certifications', title: 'Certifications', description: 'Professional credentials' },
        { href: '/#contact', title: 'Free Consultation', description: 'Get expert advice' }
      ]
    },
    {
      title: 'Popular Articles',
      links: [
        { href: '/blog/seo-tips-for-small-business-2024', title: 'SEO Tips for Small Business', description: '10 essential strategies' },
        { href: '/blog/ai-tools-revolutionizing-digital-marketing', title: 'AI in Digital Marketing', description: 'Revolutionary tools & techniques' },
        { href: '/blog/ecommerce-seo-case-study-300-percent-traffic-increase', title: 'E-commerce SEO Success', description: '300% traffic increase case study' }
      ]
    }
  ];

  return (
    <nav className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Site Navigation</h3>
      
      {navigationSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 last:mb-0">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            {section.title}
          </h4>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={link.href}
                  title={link.description}
                  className="group flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 mr-2 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                      {link.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {link.description}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

// Breadcrumb component for hierarchical navigation
export const EnhancedBreadcrumb: React.FC<{
  items: Array<{ label: string; href: string; title?: string }>;
}> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            
            <meta itemProp="position" content={String(index + 1)} />
            
            {index === items.length - 1 ? (
              <span 
                className="text-gray-900 font-medium truncate max-w-xs" 
                title={item.title || item.label}
                itemProp="name"
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                title={item.title || `Navigate to ${item.label}`}
                className="hover:text-primary-600 transition-colors"
                itemProp="item"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.href.startsWith('#')) {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                <span itemProp="name">{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default { SidebarNavigation, EnhancedBreadcrumb };