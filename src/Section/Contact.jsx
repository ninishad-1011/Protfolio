import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-r from-[#0F172A] to-[#1E2A47] py-24 px-5">
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#1E2A47] p-10 rounded-3xl shadow-2xl"
      >
        {/* Name */}
        <div className="relative mb-6">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full pl-10 p-4 rounded-xl bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full pl-10 p-4 rounded-xl bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="relative mb-6">
          <FaComment className="absolute top-3 left-3 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your Message"
            className="w-full pl-10 p-4 rounded-xl bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
