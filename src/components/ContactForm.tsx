'use client'

import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="text-[#D3D3D3] font-['Damion'] text-[35px] italic mb-2">
            We are here to help you
          </p>
          <h2 className="text-black font-['Sequel_Sans'] text-[40px] font-normal leading-[48px] mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[#525252] font-['Sequel_Sans'] text-[16px] leading-[21px] max-w-[620px] mx-auto">
            Whether you have a question, a bold idea, or a detailed brief — we&apos;re ready to help.
            From CRM consultations to ERP implementation, we respond fast and get straight to solutions.
          </p>
        </div>

        {/* Vancouver Location Info */}
        <div className="mb-8">
          <h3 className="text-black font-['Sequel_Sans'] text-[32px] font-normal mb-0">Vancouver</h3>
          <p className="text-black font-['Sequel_Sans'] text-[18px] font-normal mb-0">Mon—Fri</p>
          <p className="text-[#9A9A9A] font-['Sequel_Sans'] text-[18px] font-light">09:00—21:00</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name, Email, Purpose - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[71px]">
            {/* Name field */}
            <div className="flex-1 lg:max-w-[260px]">
              <label htmlFor="name" className="block text-[15px] font-['Sequel_Sans'] text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 font-['Sequel_Sans'] text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10"
                required
              />
            </div>

            {/* Email field */}
            <div className="flex-1 lg:max-w-[310px]">
              <label htmlFor="email" className="block text-[15px] font-['Sequel_Sans'] text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 font-['Sequel_Sans'] text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10"
                required
              />
            </div>

            {/* Purpose dropdown */}
            <div className="flex-1 md:col-span-2 lg:col-span-1 lg:max-w-[528px]">
              <label htmlFor="purpose" className="block text-[15px] font-['Sequel_Sans'] text-black mb-2">
                Purpose
              </label>
              <div className="relative">
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 pr-10 font-['Sequel_Sans'] text-[15px] appearance-none focus:outline-none focus:ring-1 focus:ring-black/10 cursor-pointer text-gray-600"
                  required
                >
                  <option value="" className="text-gray-400">Select...</option>
                  <option value="crm">CRM Development</option>
                  <option value="erp">ERP Implementation</option>
                  <option value="automation">Business Automation</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message field - full width */}
          <div>
            <label htmlFor="message" className="block text-[15px] font-['Sequel_Sans'] text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              className="w-full bg-[#F3F3F3] rounded-[13px] px-4 py-3 font-['Sequel_Sans'] text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 resize-none"
              required
            />
          </div>

          {/* Attach file and Submit button */}
          <div className="flex flex-col items-start gap-3 pt-2">
            <button
              type="button"
              className="flex items-center gap-2 text-black/60 font-['Sequel_Sans'] text-[14px] hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>Attach file</span>
            </button>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2.5 rounded-[25px] font-['Sequel_Sans'] text-[15px] font-normal hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Get a solution
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>

        {/* Privacy note */}
        <p className="text-left text-[13px] text-gray-500 mt-3 font-['Sequel_Sans']">
          I agree to personal data processing
        </p>
      </div>
    </section>
  );
};