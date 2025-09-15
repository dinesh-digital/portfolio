import React from 'react';
import { Search, FileText, Settings, MapPin, Link, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Keyword Research & Strategy',
      description: 'Comprehensive keyword analysis to identify high-value opportunities and create targeted content strategies.',
      features: ['Competitor Analysis', 'Search Intent Mapping', 'Long-tail Keywords', 'Keyword Difficulty Assessment']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Optimization',
      description: 'Strategic content creation and optimization to improve search visibility and user engagement.',
      features: ['On-page SEO', 'Content Audits', 'Meta Optimization', 'Schema Markup']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technical SEO',
      description: 'Advanced technical optimizations to improve site performance, crawlability, and search engine accessibility.',
      features: ['Site Speed Optimization', 'Mobile Optimization', 'Core Web Vitals', 'XML Sitemaps']
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local SEO',
      description: 'Dominate local search results and attract customers in your geographic area.',
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content Strategy']
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: 'Link Building',
      description: 'Ethical link building strategies to improve domain authority and search rankings.',
      features: ['Quality Backlinks', 'Guest Posting', 'Resource Page Links', 'Broken Link Building']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'SEO Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure SEO performance and ROI.',
      features: ['Google Analytics Setup', 'Rank Tracking', 'Traffic Analysis', 'Monthly Reports']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            SEO Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive SEO Solutions
            <span className="gradient-text block">For Your Business Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From technical audits to content strategy, I provide end-to-end SEO services 
            designed to improve your search visibility and drive qualified traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover group">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {service.icon}
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Related Articles:</p>
                  <div className="space-y-1">
                    {service.title.includes('SEO') && (
                      <a href="#blog" className="block text-sm text-primary-600 hover:text-primary-700 transition-colors">
                        → 10 Essential SEO Tips for Small Businesses
                      </a>
                    )}
                    {service.title.includes('Content') && (
                      <a href="#blog" className="block text-sm text-primary-600 hover:text-primary-700 transition-colors">
                        → How AI Tools Are Revolutionizing Content Creation
                      </a>
                    )}
                    {service.title.includes('Local') && (
                      <a href="#blog" className="block text-sm text-primary-600 hover:text-primary-700 transition-colors">
                        → Local SEO Success: Restaurant Chain Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Related Articles:</p>
                <div className="space-y-1">
                  {service.title.includes('Keyword') && (
                    <a 
                      href="/blog/seo-tips-for-small-business-2024" 
                      title="Learn essential SEO tips including keyword research strategies"
                      className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      → 10 Essential SEO Tips for Small Businesses
                    </a>
                  )}
                  {service.title.includes('Content') && (
                    <a 
                      href="/blog/ai-tools-revolutionizing-digital-marketing" 
                      title="Discover AI tools for content creation and optimization"
                      className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      → How AI Tools Are Revolutionizing Content Creation
                    </a>
                  )}
                  {service.title.includes('Local') && (
                    <a 
                      href="/blog/ecommerce-seo-case-study-300-percent-traffic-increase" 
                      title="See how local SEO strategies drive business growth"
                      className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      → Local SEO Success: Restaurant Chain Case Study
                    </a>
                  )}
                  {service.title.includes('Technical') && (
                    <a 
                      href="/blog/seo-tips-for-small-business-2024" 
                      title="Technical SEO best practices and implementation guide"
                      className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      → Technical SEO Best Practices Guide
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get Custom SEO Strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;