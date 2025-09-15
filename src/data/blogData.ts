import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'SEO',
    slug: 'seo',
    description: 'Search Engine Optimization tips and strategies',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Digital marketing insights and best practices',
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'AI Tools',
    slug: 'ai-tools',
    description: 'AI-powered tools for digital marketing',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'Real-world success stories and results',
    color: 'bg-orange-500'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential SEO Tips for Small Businesses in 2024',
    slug: 'seo-tips-for-small-business-2024',
    excerpt: 'Discover the most effective SEO strategies that small businesses can implement to improve their search rankings and drive more organic traffic.',
    content: `
      <p>Search Engine Optimization (SEO) is crucial for small businesses looking to compete in today's digital landscape. Here are 10 essential tips that can help your business rank higher in search results.</p>
      
      <h2>1. Focus on Local SEO</h2>
      <p>Local SEO is vital for small businesses. Optimize your Google My Business profile, gather positive reviews, and ensure your NAP (Name, Address, Phone) information is consistent across all platforms.</p>
      <p>For comprehensive local SEO strategies, consider our <a href="/#services" title="Professional Local SEO Services">local SEO services</a> that have helped businesses achieve top 3 rankings in their area.</p>
      
      <h2>2. Conduct Thorough Keyword Research</h2>
      <p>Use tools like Google Keyword Planner, SEMrush, or Ahrefs to identify relevant keywords with good search volume and manageable competition.</p>
      <p>Need help with keyword research? Our <a href="/services/keyword-research" title="Expert Keyword Research Services">keyword research service</a> includes competitor analysis and search intent mapping.</p>
      
      <h2>3. Create High-Quality, Relevant Content</h2>
      <p>Content is king in SEO. Create valuable, informative content that addresses your audience's pain points and questions.</p>
      <p>Learn more about content optimization in our <a href="/blog/ai-tools-revolutionizing-digital-marketing" title="AI Tools for Content Creation">AI tools guide</a>.</p>
      
      <h2>4. Optimize Your Website's Technical SEO</h2>
      <p>Ensure your website loads quickly, is mobile-friendly, and has a clean URL structure. Technical SEO forms the foundation of your search visibility.</p>
      <p>Get a comprehensive <a href="/services/technical-seo" title="Professional Technical SEO Services">technical SEO audit</a> to identify and fix critical issues.</p>
      
      <h2>5. Build Quality Backlinks</h2>
      <p>Focus on earning backlinks from reputable websites in your industry. Quality trumps quantity when it comes to link building.</p>
      <p>Our <a href="/services/link-building" title="Ethical Link Building Services">link building services</a> focus on earning high-quality, relevant backlinks that improve your domain authority.</p>
      
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%); padding: 24px; border-radius: 12px; margin: 32px 0; color: white;">
        <h3 style="color: white; margin-bottom: 12px;">Ready to Implement These SEO Strategies?</h3>
        <p style="margin-bottom: 16px; opacity: 0.9;">Get a free SEO consultation and discover how we can help your business dominate search results.</p>
        <a href="/#contact" title="Get Free SEO Consultation" style="display: inline-block; background: white; color: #3b82f6; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Get Free SEO Audit</a>
      </div>
    `,
    featuredImage: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-15',
    author: {
      name: 'Dinesh Kumar',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'SEO Specialist with 5+ years of experience helping businesses improve their online visibility.'
    },
    category: blogCategories[0],
    tags: ['SEO', 'Small Business', 'Local SEO', 'Keyword Research', 'Backlinks'],
    metaTitle: '10 Essential SEO Tips for Small Businesses in 2024 | Dinesh Digital SEO',
    metaDescription: 'Discover proven SEO strategies for small businesses. Learn how to improve search rankings, drive organic traffic, and compete with larger competitors.',
    readTime: 8,
    isPublished: true
  },
  {
    id: '2',
    title: 'How AI Tools Are Revolutionizing Digital Marketing',
    slug: 'ai-tools-revolutionizing-digital-marketing',
    excerpt: 'Explore how artificial intelligence is transforming digital marketing strategies and discover the best AI tools for content creation, analytics, and automation.',
    content: `
      <p>Artificial Intelligence is reshaping the digital marketing landscape, offering unprecedented opportunities for businesses to optimize their strategies and improve ROI.</p>
      
      <h2>The Rise of AI in Marketing</h2>
      <p>AI tools are becoming increasingly sophisticated, helping marketers automate tasks, personalize experiences, and make data-driven decisions.</p>
      <p>At <a href="/#about" title="About Dinesh Digital SEO">Dinesh Digital SEO</a>, we integrate AI tools into our SEO strategies to deliver better results for our clients.</p>
      
      <h2>Top AI Tools for Content Creation</h2>
      <ul>
        <li>ChatGPT for copywriting and content ideation</li>
        <li>Jasper AI for marketing copy</li>
        <li>Canva AI for visual content</li>
        <li>Grammarly for content optimization</li>
      </ul>
      <p>These tools complement our <a href="/services/content-optimization" title="Professional Content Optimization Services">content optimization services</a> to create compelling, SEO-friendly content.</p>
      
      <h2>AI-Powered Analytics and Insights</h2>
      <p>Tools like Google Analytics Intelligence and Adobe Analytics AI provide deeper insights into customer behavior and campaign performance.</p>
      <p>Learn how we use analytics in our <a href="/#case-studies" title="View SEO Case Studies and Results">case studies</a> to track and improve SEO performance.</p>
      
      <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border-left: 4px solid #3b82f6; margin: 32px 0;">
        <h3 style="color: #1e40af; margin-bottom: 12px;">Want to Leverage AI for Your SEO?</h3>
        <p style="margin-bottom: 16px; color: #475569;">Discover how AI-powered SEO strategies can transform your digital marketing results.</p>
        <a href="/#contact" title="Get AI-Powered SEO Consultation" style="color: #3b82f6; text-decoration: none; font-weight: 600;">Contact us for a consultation →</a>
      </div>
    `,
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-10',
    author: {
      name: 'Dinesh Kumar',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'SEO Specialist with 5+ years of experience helping businesses improve their online visibility.'
    },
    category: blogCategories[2],
    tags: ['AI Tools', 'Digital Marketing', 'Automation', 'Content Creation', 'Analytics'],
    metaTitle: 'How AI Tools Are Revolutionizing Digital Marketing | Dinesh Digital SEO',
    metaDescription: 'Discover how AI is transforming digital marketing. Learn about the best AI tools for content creation, analytics, and marketing automation.',
    readTime: 6,
    isPublished: true
  },
  {
    id: '3',
    title: 'Case Study: 300% Traffic Increase for E-commerce Store',
    slug: 'ecommerce-seo-case-study-300-percent-traffic-increase',
    excerpt: 'Learn how we helped an e-commerce fashion store achieve a 300% increase in organic traffic through comprehensive SEO strategy and implementation.',
    content: `
      <p>This case study demonstrates how strategic SEO implementation can dramatically improve organic traffic and revenue for e-commerce businesses.</p>
      
      <h2>The Challenge</h2>
      <p>Our client, a fashion e-commerce store, was struggling with poor organic visibility and declining sales. Their website had technical issues and lacked proper SEO optimization.</p>
      <p>Similar to many businesses we help through our <a href="/services/seo-audit" title="Comprehensive SEO Audit Services">SEO audit services</a>, they needed a complete SEO overhaul.</p>
      
      <h2>Our Strategy</h2>
      <h3>1. Technical SEO Audit</h3>
      <p>We conducted a comprehensive technical audit to identify and fix crawling and indexing issues.</p>
      <p>Our <a href="/services/technical-seo" title="Technical SEO Services">technical SEO process</a> includes site speed optimization, mobile responsiveness, and Core Web Vitals improvement.</p>
      
      <h3>2. Keyword Research and Content Strategy</h3>
      <p>We identified high-value keywords and created a content strategy targeting both product and informational queries.</p>
      <p>This approach is detailed in our guide on <a href="/blog/seo-tips-for-small-business-2024" title="Essential SEO Tips for Small Businesses">essential SEO tips for small businesses</a>.</p>
      
      <h3>3. On-Page Optimization</h3>
      <p>We optimized product pages, category pages, and created SEO-friendly blog content.</p>
      
      <h2>Results</h2>
      <ul>
        <li>300% increase in organic traffic</li>
        <li>45% improvement in conversion rate</li>
        <li>200% increase in revenue</li>
        <li>500+ keywords ranking in top 10</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 24px; border-radius: 12px; margin: 32px 0; color: white;">
        <h3 style="color: white; margin-bottom: 12px;">Want Similar Results for Your Business?</h3>
        <p style="margin-bottom: 16px; opacity: 0.9;">See how our proven SEO strategies can transform your online presence and drive measurable growth.</p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="/#contact" title="Get Free SEO Consultation" style="display: inline-block; background: white; color: #059669; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Get Free Consultation</a>
          <a href="/#projects" title="View More SEO Case Studies" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">View More Case Studies</a>
        </div>
      </div>
    `,
    featuredImage: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishDate: '2024-01-05',
    author: {
      name: 'Dinesh Kumar',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'SEO Specialist with 5+ years of experience helping businesses improve their online visibility.'
    },
    category: blogCategories[3],
    tags: ['Case Study', 'E-commerce SEO', 'Traffic Growth', 'Conversion Optimization'],
    metaTitle: 'E-commerce SEO Case Study: 300% Traffic Increase | Dinesh Digital SEO',
    metaDescription: 'See how we helped an e-commerce store achieve 300% traffic growth through strategic SEO. Real results and proven strategies.',
    readTime: 10,
    isPublished: true
  }
];