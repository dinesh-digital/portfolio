import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const handleClick = () => {
    onClick(post);
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer" onClick={handleClick}>
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
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm text-gray-700 font-medium">{post.author.name}</span>
          </div>
          
          <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;