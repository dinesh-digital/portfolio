import React from 'react';
import { Calendar, ArrowRight, Mail, Phone } from 'lucide-react';
import { BlogPost, BlogCategory } from '../../types/blog';
import { blogPosts, blogCategories } from '../../data/blogData';

interface BlogSidebarProps {
  currentPost?: BlogPost;
  onPostClick?: (post: BlogPost) => void;
  onCategoryClick?: (category: BlogCategory) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ 
  currentPost, 
  onPostClick, 
  onCategoryClick 
}) => {
  const latestPosts = blogPosts
    .filter(post => post.id !== currentPost?.id)
    .slice(0, 3);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-6 rounded-xl text-white sticky top-8">
        <h3 className="text-xl font-bold mb-3">Need SEO Help?</h3>
        <p className="text-sm opacity-90 mb-4">
          Get a free consultation and boost your website's rankings today!
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-2" />
            <a 
              href="mailto:dineshdigitaldm@gmail.com"
              title="Send email to Dinesh Digital SEO"
              className="hover:underline"
            >
              dineshdigitaldm@gmail.com
            </a>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="w-4 h-4 mr-2" />
            <a 
              href="tel:+916369346610"
              title="Call Dinesh Digital SEO"
              className="hover:underline"
            >
              +91 6369346610
            </a>
          </div>
        </div>
        <button
          onClick={handleContactClick}
          title="Contact Dinesh Digital SEO for free consultation"
          className="w-full bg-white text-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Contact Me Now
        </button>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-xs opacity-75 mb-2">Quick Links:</p>
          <div className="space-y-1">
            <a 
              href="/#services"
              title="View all SEO services offered"
              className="block text-xs opacity-90 hover:opacity-100 transition-opacity"
            >
              → All SEO Services
            </a>
            <a 
              href="/#case-studies"
              title="Read detailed case studies and success stories"
              className="block text-xs opacity-90 hover:opacity-100 transition-opacity"
            >
              → Success Stories
            </a>
            <a 
              href="/#certifications"
              title="View professional certifications and credentials"
              className="block text-xs opacity-90 hover:opacity-100 transition-opacity"
            >
              → Certifications
            </a>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick?.(category)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center">
                <div className={`w-3 h-3 ${category.color} rounded-full mr-3`}></div>
                <span className="text-gray-700">{category.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Posts</h3>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="cursor-pointer group"
              onClick={() => onPostClick?.(post)}
            >
              <div className="flex gap-3">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['SEO', 'Digital Marketing', 'Local SEO', 'Content Marketing', 'Backlinks', 'Google Ranking', 'Meta Ads', 'AI Tools'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;