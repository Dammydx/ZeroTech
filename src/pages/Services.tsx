import React from 'react';
import { Shield, Monitor, Server, Laptop, Cloud, PenTool as Tool, Database, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-blue-500" />,
      title: "IT Support & Maintenance",
      description: "Comprehensive troubleshooting, repair, and maintenance of computer systems, servers, and networks. We offer both on-site and remote IT assistance."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Cybersecurity & Data Protection",
      description: "Advanced security solutions including antivirus installation, risk assessments, and data backup strategies to keep your business safe."
    },
    {
      icon: <Server className="h-12 w-12 text-blue-500" />,
      title: "Networking & Security Solutions",
      description: "Professional installation and configuration of CCTV, servers, and network infrastructure for secure business environments."
    },
    {
      icon: <Database className="h-12 w-12 text-blue-500" />,
      title: "Software Solutions",
      description: "Expert software installation, system optimization, and technical support for all your application needs."
    },
    {
      icon: <Laptop className="h-12 w-12 text-blue-500" />,
      title: "IT Infrastructure & Office Setup",
      description: "Complete office IT setup services for startups and established businesses, including workstation configuration."
    },
    {
      icon: <Tool className="h-12 w-12 text-blue-500" />,
      title: "Computer Sales & Repairs",
      description: "Quality sales and repair services for laptops, desktops, and IT accessories with expert consultation."
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-500" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup and management for modern businesses."
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-500" />,
      title: "Delivery & Logistics",
      description: "Convenient pickup and return service for computer repairs (delivery cost covered by customer)."
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive IT solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;