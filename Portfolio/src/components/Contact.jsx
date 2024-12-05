import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData); // Ensure the URL matches your backend port
      alert('Message sent!');
    } catch (error) {
      console.error('There was an error sending your message.', error);
      alert('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center py-12 px-4 mt-10">
      <form
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-3xl animate-slideIn"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-lg font-bold transform transition hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
