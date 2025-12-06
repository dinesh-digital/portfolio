import React, { useState } from 'react';
import { BlogPost } from '../types/blog';
// import { blogPosts } from '../data/blogData';
import BlogHome from './blog/BlogHome';
import BlogPostComponent from './blog/BlogPost';

const Blog: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setCurrentView('home');
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'post' && selectedPost) {
    return (
      <BlogPostComponent 
        post={selectedPost} 
        onBack={handleBackToBlog}
      />
    );
  }

  return <BlogHome onPostClick={handlePostClick} />;
};

export default Blog;