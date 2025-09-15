import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2023',
      description: 'Advanced certification in Google Analytics 4, demonstrating expertise in data analysis and reporting.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['GA4 Implementation', 'Conversion Tracking', 'Custom Reports', 'Data Analysis']
    },
    {
      title: 'Google Search Console Expert',
      issuer: 'Google',
      date: '2023',
      description: 'Comprehensive understanding of Search Console tools for monitoring and optimizing website performance.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Performance Monitoring', 'Index Coverage', 'Core Web Vitals', 'Search Appearance']
    },
    {
      title: 'Technical SEO Specialist',
      issuer: 'SEMrush Academy',
      date: '2022',
      description: 'Advanced technical SEO certification covering site architecture, crawling, and indexing optimization.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Site Audits', 'Schema Markup', 'Page Speed', 'Mobile Optimization']
    },
    {
      title: 'Content Marketing Certified',
      issuer: 'HubSpot Academy',
      date: '2022',
      description: 'Expertise in creating and optimizing content strategies that drive organic traffic and engagement.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Content Strategy', 'Keyword Research', 'Content Optimization', 'Performance Tracking']
    },
    {
      title: 'Local SEO Mastery',
      issuer: 'Moz Academy',
      date: '2021',
      description: 'Specialized certification in local search optimization and Google My Business management.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Local Citations', 'GMB Optimization', 'Review Management', 'Local Content']
    },
    {
      title: 'Advanced Link Building',
      issuer: 'Ahrefs Academy',
      date: '2021',
      description: 'Comprehensive training in ethical link building strategies and outreach techniques.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      skills: ['Link Prospecting', 'Outreach Campaigns', 'Content Promotion', 'Relationship Building']
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Certifications & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Certified SEO Professional
            <span className="gradient-text block">Continuous Learning & Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest SEO trends and best practices through continuous education 
            and industry-recognized certifications from leading platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-primary-600 font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work with a Certified Expert?</h3>
            <p className="text-gray-600 mb-6">
              Get the advantage of working with a certified SEO professional who stays current 
              with industry best practices and proven methodologies.
            </p>
            <a href="#contact" className="btn-primary">
              Start Your SEO Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;