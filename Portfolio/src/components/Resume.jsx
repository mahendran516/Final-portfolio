import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Resume = () => {
  const [buttonText, setButtonText] = useState("Download My Resume");

  const handleDownload = () => {
    setButtonText("Downloading...");
    setTimeout(() => {
      setButtonText("Download My Resume");
    }, 3000); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-3xl w-full animate-slideIn text-center">
        <p className="text-2xl text-center mb-6">
          Download my resume to see my full education, experience, and skill set.
        </p>
        <Link
          to="https://drive.google.com/file/d/1w7Sy4g49nPuixqc3ZAucz2y8VDdNcgKV/view?usp=sharing"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 px-6 rounded-full font-bold shadow-lg transform transition hover:scale-105 text-center"
          onClick={handleDownload}
          download
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Resume;
