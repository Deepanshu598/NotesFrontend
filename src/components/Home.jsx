import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen text-white transition-all duration-300">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Organize Your Thoughts, Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          A simple and secure Notes App to keep track of your ideas and tasks.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link 
            to="/signup" 
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 shadow-lg"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Notes App?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Secure Notes", desc: "All your notes are encrypted and stored securely." },
            { title: "Organized Categories", desc: "Sort your notes into categories for easy access." },
            { title: "Access Anywhere", desc: "Sync your notes across all your devices." }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-800 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 text-white"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
