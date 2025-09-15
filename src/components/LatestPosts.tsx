import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

interface LatestPostsProps {
  onPostClick?: (postSlug: string) => void;
}

const LatestPosts: React.FC<LatestPostsProps> = ({ onPostClick }) => {
  const latestPosts = blogPosts.slice(0, 3);

  const handlePostClick = (slug: string) => {
    if (onPostClick) {
      onPostClick(slug);
    } else {
      // Scroll to blog section or navigate
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Latest Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Recent Blog Posts
            <span className="gradient-text block">SEO Tips & Strategies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest SEO trends, digital marketing insights, and proven strategies 
            to help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-50 rounded-xl overflow-hidden card-hover cursor-pointer group"
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${post.category.color} text-white text-sm font-medium rounded-full`}>
                    {post.category.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => handlePostClick('')}
            className="btn-primary"
          >
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;