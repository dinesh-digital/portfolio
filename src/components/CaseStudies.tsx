import React from 'react';
import { ArrowRight, TrendingUp, Target, Clock } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'Local Restaurant Chain SEO Success',
      industry: 'Food & Beverage',
      challenge: 'A restaurant chain with 15 locations was struggling with local visibility and online presence.',
      solution: 'Implemented comprehensive local SEO strategy with location-specific optimization and review management.',
      results: [
        { metric: 'Local Rankings', value: 'Top 3 for all locations', change: '+100%' },
        { metric: 'Online Orders', value: '2,500+ monthly', change: '+180%' },
        { metric: 'Foot Traffic', value: '40% increase', change: '+40%' },
        { metric: 'Revenue Growth', value: '₹15L+ monthly', change: '+120%' }
      ],
      timeline: '8 months',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'E-commerce Fashion Store Transformation',
      industry: 'E-commerce',
      challenge: 'Fashion e-commerce site with poor organic visibility and declining sales.',
      solution: 'Complete SEO overhaul including technical optimization, content strategy, and link building.',
      results: [
        { metric: 'Organic Traffic', value: '50K+ monthly visitors', change: '+250%' },
        { metric: 'Conversion Rate', value: '3.2%', change: '+45%' },
        { metric: 'Revenue', value: '₹25L+ monthly', change: '+200%' },
        { metric: 'Keyword Rankings', value: '500+ top 10', change: '+300%' }
      ],
      timeline: '6 months',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
            <span className="gradient-text block">Proven SEO Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into detailed case studies showcasing how strategic SEO implementation 
            transformed businesses and delivered exceptional ROI.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mr-4">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{study.timeline}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <button className="mt-8 flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <div className="bg-white p-8 lg:p-12">
                  <div className="mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Results</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                        <div className="text-sm text-gray-600 mb-2">{result.metric}</div>
                        <div className="text-xs text-green-600 font-medium">{result.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get Similar Results for Your Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;