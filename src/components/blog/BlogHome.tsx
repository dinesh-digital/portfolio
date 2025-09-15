import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { BlogPost, BlogCategory } from '../../types/blog';
import { blogPosts, blogCategories } from '../../data/blogData';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import Breadcrumb from './Breadcrumb';

interface BlogHomeProps {
  onPostClick: (post: BlogPost) => void;
}

const BlogHome: React.FC<BlogHomeProps> = ({ onPostClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' }
  ];

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || post.category.slug === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag && post.isPublished;
    });
  }, [searchTerm, selectedCategory, selectedTag]);

  const handleCategoryClick = (category: BlogCategory) => {
    setSelectedCategory(category.slug === selectedCategory ? '' : category.slug);
  };

  React.useEffect(() => {
    // Update meta tags for blog home
    document.title = 'Blog - SEO Tips & Digital Marketing Insights | Dinesh Digital SEO';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert SEO tips, digital marketing strategies, and case studies. Stay updated with the latest trends in search engine optimization and online marketing.');
    }
    
    // Add canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/blog`);
    
    return () => {
      document.title = 'Dinesh Digital SEO - Expert SEO Services';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SEO & Digital Marketing
            <span className="gradient-text block">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert insights, proven strategies, and the latest trends in SEO and digital marketing 
            to help your business grow online.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {blogCategories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {(selectedCategory || selectedTag || searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-primary-500 hover:text-primary-700"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Category: {blogCategories.find(c => c.slug === selectedCategory)?.name}
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="ml-2 text-primary-500 hover:text-primary-700"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  Tag: {selectedTag}
                  <button
                    onClick={() => setSelectedTag('')}
                    className="ml-2 text-primary-500 hover:text-primary-700"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} onClick={onPostClick} />
                  ))}
                </div>
                
                {filteredPosts.length > 6 && (
                  <div className="text-center mt-12">
                    <button className="btn-primary">
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedTag('');
                  }}
                  className="btn-secondary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
          
          <aside className="lg:col-span-1">
            <BlogSidebar 
              onPostClick={onPostClick}
              onCategoryClick={handleCategoryClick}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;