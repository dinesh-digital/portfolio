import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../types/blog';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium truncate max-w-xs" title={item.label}>
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;