import React from 'react';
import { ArrowUp, Hand as BrandX, Instagram, Facebook, Globe, Mail } from 'lucide-react';
import Logo from './Logo';

// Create a Thread icon since it's not available in Lucide
const ThreadsIcon: React.FC<{ className?: string, size?: number }> = ({ className, size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2c-2.8 0-5 2.2-5 5v3.5c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-3.3-2.7-6-6-6-1.5 0-2.9.6-4 1.5C11.9 2.6 10.5 2 9 2"></path>
      <path d="M12 19v3"></path>
      <path d="M8 19h8"></path>
    </svg>
  );
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { 
      name: 'X', 
      icon: <BrandX size={18} />, 
      url: 'https://x.com/Dineshdigiseo' 
    },
    { 
      name: 'Threads', 
      icon: <ThreadsIcon size={18} />, 
      url: 'https://www.threads.com/@dineshdigitalseo' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={18} />, 
      url: 'https://www.instagram.com/dineshdigitalseo/' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={18} />, 
      url: 'https://www.facebook.com/profile.php?id=61576230675302' 
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Logo height={42} />
            <p className="mt-6 text-gray-400 leading-relaxed">
              Elevating digital presence through data-driven SEO strategies that deliver measurable results and sustainable growth.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    title={`Navigate to ${link.name} section`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/blog"
                  title="Read our latest SEO and digital marketing insights"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Blog & Insights
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Latest Posts</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/blog/seo-tips-for-small-business-2024" 
                  title="10 Essential SEO Tips for Small Businesses in 2024"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  SEO Tips for Small Business
                </a>
              </li>
              <li>
                <a 
                  href="/blog/ai-tools-revolutionizing-digital-marketing" 
                  title="How AI Tools Are Revolutionizing Digital Marketing"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  AI Tools in Digital Marketing
                </a>
              </li>
              <li>
                <a 
                  href="/blog/ecommerce-seo-case-study-300-percent-traffic-increase" 
                  title="Case Study: 300% Traffic Increase for E-commerce Store"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  E-commerce SEO Case Study
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/seo-audit" title="Professional SEO Audit Services" className="text-gray-400 hover:text-primary-400 transition-colors">SEO Audit</a></li>
              <li><a href="/services/keyword-research" title="Expert Keyword Research Services" className="text-gray-400 hover:text-primary-400 transition-colors">Keyword Research</a></li>
              <li><a href="/services/content-optimization" title="Content Strategy & Optimization" className="text-gray-400 hover:text-primary-400 transition-colors">Content Strategy</a></li>
              <li><a href="/services/technical-seo" title="Technical SEO Services" className="text-gray-400 hover:text-primary-400 transition-colors">Technical SEO</a></li>
              <li><a href="/services/local-seo" title="Local SEO Services" className="text-gray-400 hover:text-primary-400 transition-colors">Local SEO</a></li>
              <li><a href="/services/link-building" title="Professional Link Building Services" className="text-gray-400 hover:text-primary-400 transition-colors">Link Building</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">dineshdigitaldm@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Globe size={18} className="text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
            <a 
              href="#contact"
              className="mt-6 inline-block bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Get Free SEO Audit
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Dinesh Digital SEO. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;