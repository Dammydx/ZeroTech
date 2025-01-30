import React from 'react';
import { Shield, Monitor, Server, Laptop } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Zero Technologies Limited
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Seamless IT Solutions for a Smarter Tomorrow
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Monitor className="h-12 w-12 text-blue-500" />}
              title="IT Support"
              description="24/7 technical support and maintenance for all your IT needs"
            />
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-blue-500" />}
              title="Cybersecurity"
              description="Advanced security solutions to protect your digital assets"
            />
            <ServiceCard
              icon={<Server className="h-12 w-12 text-blue-500" />}
              title="Networking"
              description="Professional network setup and maintenance services"
            />
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-blue-500" />}
              title="Hardware Solutions"
              description="Quality computer hardware sales and repairs"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Office Setup"
              description="Complete IT infrastructure setup for modern workplaces"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Security Systems"
              description="Advanced CCTV and security solutions"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Cloud Solutions"
              description="Scalable cloud infrastructure for businesses"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ProjectCard = ({ image, title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default Home;