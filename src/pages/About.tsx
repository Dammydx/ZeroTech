import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">About Zero Technologies</h1>
            <p className="text-xl text-gray-300">Leading the way in IT solutions and innovation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Zero Technologies Limited is a premier IT solutions provider dedicated to delivering seamless technology services for businesses, schools, and individuals. With years of experience and expertise, we've established ourselves as a trusted partner in the IT industry.
              </p>
              <p className="text-gray-300 mb-6">
                Our commitment to excellence and innovation drives us to provide cutting-edge solutions that help our clients stay ahead in the rapidly evolving technological landscape.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {[
                  "Years of experience in IT maintenance and cybersecurity",
                  "Customer-centric approach with personalized solutions",
                  "24/7 technical support and maintenance",
                  "Cutting-edge technology and innovation",
                  "Comprehensive IT solutions under one roof"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
                <p className="text-gray-300">
                  To provide seamless IT solutions that empower businesses and individuals by enhancing productivity, security, and efficiency through innovative technology services.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-300">
                  To be a leader in technology-driven solutions, transforming businesses and personal computing experiences through cutting-edge IT innovations and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;