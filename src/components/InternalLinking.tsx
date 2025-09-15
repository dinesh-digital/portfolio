import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Internal linking component for contextual links within content
export const InternalLink: React.FC<{
  href: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}> = ({ href, children, title, className = "" }) => {
  return (
    <a
      href={href}
      title={title}
      className={`text-primary-600 hover:text-primary-700 underline decoration-primary-200 hover:decoration-primary-400 transition-all ${className}`}
    >
      {children}
    </a>
  );
};

// Related content component for cross-linking
export const RelatedContent: React.FC<{
  title: string;
  links: Array<{ href: string; title: string; description?: string }>;
}> = ({ title, links }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-500">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ExternalLink className="w-5 h-5 mr-2 text-primary-600" />
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              title={link.title}
              className="group flex items-start hover:bg-white p-3 rounded-lg transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-primary-500 mt-1 mr-3 group-hover:translate-x-1 transition-transform" />
              <div>
                <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {link.title}
                </div>
                {link.description && (
                  <div className="text-sm text-gray-600 mt-1">
                    {link.description}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contextual CTA component for service promotion within content
export const ContextualCTA: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  href: string;
}> = ({ title, description, buttonText, href }) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200 my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={href}
        title={title}
        className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default { InternalLink, RelatedContent, ContextualCTA };