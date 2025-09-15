import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '300+', label: 'Websites Optimized' },
    { icon: <Users className="w-6 h-6" />, value: '150+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, value: '95%', label: 'Success Rate' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost Your Website's
              <span className="block gradient-text bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Search Rankings
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert SEO specialist helping businesses dominate search results with data-driven strategies, 
              technical optimization, and proven methodologies that deliver measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary group">
                Get Free SEO Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                title="View our successful SEO case studies and client results"
                className="btn-secondary"
              >
                View Case Studies
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-secondary-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free SEO Analysis</h3>
                <p className="text-gray-300">Get instant insights about your website's SEO performance</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="url"
                    placeholder="Enter your website URL"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Analyze My Website
                </button>
              </form>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                No spam, just actionable SEO insights delivered to your inbox.
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs text-gray-300 mb-2">Learn more:</p>
                <a 
                  href="/blog/seo-tips-for-small-business-2024"
                  title="Read our comprehensive SEO guide for small businesses"
                  className="text-xs text-secondary-300 hover:text-white transition-colors"
                >
                  → Essential SEO tips for business growth
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;