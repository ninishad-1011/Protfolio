import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#0F172A] py-20 px-5">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#1E2A47] p-8 rounded-2xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
