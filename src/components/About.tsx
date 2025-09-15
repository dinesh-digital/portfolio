import React from 'react';
import { CheckCircle, Target, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    '5+ Years of SEO Excellence',
    '300+ Successful Projects',
    'Google Analytics Certified',
    'Technical SEO Specialist',
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Every strategy is designed to deliver measurable improvements in rankings and organic traffic.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Techniques',
      description: 'Stay ahead with the latest SEO trends, algorithm updates, and industry best practices.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Transparent communication and customized strategies tailored to your business goals.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              About Dinesh Digital SEO
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through
              <span className="gradient-text block">Strategic SEO Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hi, I'm Dinesh, a passionate SEO specialist from Chennai, Tamil Nadu. With over 5 years of experience 
              in digital marketing, I help businesses achieve sustainable growth through data-driven SEO strategies 
              that deliver real results.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              My expertise spans technical SEO, content optimization, keyword research, and local SEO. I believe 
              in transparent communication and building long-term partnerships with my clients to ensure their 
              digital success.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
            
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Learn more about my expertise:</strong>
              </p>
              <div className="space-y-1">
                <a 
                  href="/blog/seo-tips-for-small-business-2024"
                  title="Read my comprehensive guide on SEO for small businesses"
                  className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  → My SEO methodology and best practices
                </a>
                <a 
                  href="/blog/ai-tools-revolutionizing-digital-marketing"
                  title="Discover how I use AI tools in digital marketing"
                  className="block text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  → How I leverage AI in digital marketing
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;