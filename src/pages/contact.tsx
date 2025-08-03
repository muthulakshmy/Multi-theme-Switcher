import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import { useTheme } from '../context/themeContext'; // Assuming you still want theme integration
// import contactUsBanner from '../assets/contact-us-banner.jpg'; // Path to your background image
import contactUsBanner from '../assets/Contact2.png';
const ContactUs: React.FC = () => {
  const { theme } = useTheme(); // Use your theme context

  return (
    // <div className={`contact-us-page ${theme} w-full`}>
    <div className={`${theme === "theme2" ? "bg-[#1e1e1e] text-white" : "bg-white text-gray-900"} w-full`}>

      {/* Hero Banner Section */}
      <div
        className="w-full bg-cover bg-center md:h-80 flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactUsBanner})` }}
      >
        {/* Optional: Overlay for better text readability */}
        <div className=" inset-0 bg-black opacity-40"></div>

        <h1 className="z-10 text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
          CONNECT WITH US
        </h1>
        <p className=" z-10 text-lg md:text-xl text-center">
          <Link to="/" className="hover:underline">HOME</Link> / CONNECT WITH US
        </p>
      </div>

      {/* Main Content Area for Contact Form/Details (Add more here later) */}
      <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg mb-4">
         We’re here to help, every thread of the way.
        </p>

        {/* Example Contact Form - You can expand this */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 Main Street,</p>
            <p>Anytown, AN 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+91 12345 67890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@multistore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;