import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-blue-500 mr-4" />
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a href="https://wa.me/2348172452411" className="text-gray-300 hover:text-blue-500">
                      +234 817 245 2411
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-500 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+2348146314677" className="text-gray-300 hover:text-blue-500">
                      +234 814 631 4677
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-500 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:daramolaire@gmail.com" className="text-gray-300 hover:text-blue-500">
                      daramolaire@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-500">Facebook</a>
                  <a href="#" className="text-gray-300 hover:text-blue-500">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-blue-500">Instagram</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;