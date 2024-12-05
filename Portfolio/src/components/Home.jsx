import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white flex flex-col items-center">
     
      <div className="min-h-screen flex flex-col items-center justify-center mt-20 p-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 animate-fadeIn">Hi, I'm MAHENDRAN</h1>
        <p className="text-2xl font-light mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          A MERN Stack Developer crafting dynamic and scalable web applications.
        </p>
        <Link to="/projects" className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-full font-semibold shadow-lg transform transition hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Explore My Work
        </Link>
      </div>
    </div>
  );
};

export default Home;
