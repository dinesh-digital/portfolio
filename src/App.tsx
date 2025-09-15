import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import LatestPosts from './components/LatestPosts';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  const handleBlogNavigation = () => {
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeNavigation = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-white">
        <Header onBlogClick={handleBlogNavigation} onHomeClick={handleHomeNavigation} />
        <main>
          <Blog />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onBlogClick={handleBlogNavigation} onHomeClick={handleHomeNavigation} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CaseStudies />
        <Certifications />
        <LatestPosts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;