import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Fashion Store',
      category: 'E-commerce SEO',
      description: 'Increased organic traffic by 250% and improved conversion rates for a fashion retailer through comprehensive SEO strategy.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Traffic Increase', value: '+250%' },
        { icon: <Users className="w-4 h-4" />, label: 'Conversion Rate', value: '+45%' },
        { icon: <Clock className="w-4 h-4" />, label: 'Project Duration', value: '6 months' }
      ],
      tags: ['Technical SEO', 'Content Strategy', 'Local SEO']
    },
    {
      title: 'Healthcare Clinic Website',
      category: 'Local SEO',
      description: 'Dominated local search results for a healthcare clinic, resulting in 300% increase in appointment bookings.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Local Rankings', value: 'Top 3' },
        { icon: <Users className="w-4 h-4" />, label: 'Bookings', value: '+300%' },
        { icon: <Clock className="w-4 h-4" />, label: 'Project Duration', value: '4 months' }
      ],
      tags: ['Local SEO', 'Google My Business', 'Review Management']
    },
    {
      title: 'SaaS Platform',
      category: 'Technical SEO',
      description: 'Optimized technical infrastructure and content strategy for a B2B SaaS platform, achieving first-page rankings.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Keyword Rankings', value: '85% Top 10' },
        { icon: <Users className="w-4 h-4" />, label: 'Lead Generation', value: '+180%' },
        { icon: <Clock className="w-4 h-4" />, label: 'Project Duration', value: '8 months' }
      ],
      tags: ['Technical SEO', 'Content Marketing', 'Link Building']
    },
    {
      title: 'Restaurant Chain',
      category: 'Multi-location SEO',
      description: 'Implemented multi-location SEO strategy for a restaurant chain with 15+ locations across Tamil Nadu.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Locations Ranking', value: '15/15' },
        { icon: <Users className="w-4 h-4" />, label: 'Foot Traffic', value: '+120%' },
        { icon: <Clock className="w-4 h-4" />, label: 'Project Duration', value: '10 months' }
      ],
      tags: ['Multi-location SEO', 'Local Citations', 'Content Strategy']
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Successful SEO Projects
            <span className="gradient-text block">That Drive Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent SEO projects and the measurable results achieved 
            for businesses across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="flex justify-center mb-1 text-primary-600">
                        {result.icon}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{result.value}</div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Read more about this project:</p>
                  <a 
                    href="/blog/ecommerce-seo-case-study-300-percent-traffic-increase" 
                    title="Detailed case study: How we achieved 300% traffic increase"
                    className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    → Detailed case study in our blog
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Start Your SEO Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;