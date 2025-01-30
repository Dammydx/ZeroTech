import React from 'react';
import { Server, Shield, Cloud, Monitor, Database } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Server className="h-12 w-12 text-blue-500" />,
      title: "Enterprise Infrastructure",
      description: "Complete IT infrastructure solutions for large-scale businesses, including server setup, maintenance, and optimization.",
      features: [
        "High-performance server configurations",
        "Scalable network architecture",
        "24/7 monitoring and support",
        "Disaster recovery planning"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Security Systems",
      description: "Comprehensive security solutions to protect your business assets and data.",
      features: [
        "CCTV installation and monitoring",
        "Access control systems",
        "Intrusion detection",
        "Security audit and consulting"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-500" />,
      title: "Cloud Solutions",
      description: "Modern cloud infrastructure and services for business efficiency and scalability.",
      features: [
        "Cloud migration services",
        "Hybrid cloud solutions",
        "Cloud security",
        "Backup and recovery"
      ]
    },
    {
      icon: <Monitor className="h-12 w-12 text-blue-500" />,
      title: "Workplace Modernization",
      description: "Transform your workplace with modern IT solutions and equipment.",
      features: [
        "Office IT setup",
        "Hardware procurement",
        "Software deployment",
        "Employee training"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-blue-500" />,
      title: "Data Management",
      description: "Comprehensive data solutions for business intelligence and security.",
      features: [
        "Database management",
        "Data backup solutions",
        "Data recovery services",
        "Data security protocols"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Our Solutions</h1>
            <p className="text-xl text-gray-300">Comprehensive IT solutions tailored for your business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;