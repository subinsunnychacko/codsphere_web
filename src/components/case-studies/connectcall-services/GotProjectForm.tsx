"use client"

import { useState } from "react"
import { Paperclip } from "lucide-react"

export default function GotProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
    agreeToProcessing: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[741px] w-full max-w-[400px] md:max-w-[380px] lg:max-w-[405px] mx-auto lg:mx-0 overflow-visible rounded-[13px] bg-black">
      {/* Optional background image with overlay */}
      <div 
        className="absolute inset-0 rounded-[12px]"
        style={{
          backgroundImage: 'url(/images/case-studies/form-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Form container - responsive padding */}
      <div className="relative w-full px-4 md:px-5 lg:px-[20px] pb-6 md:pb-8 lg:pb-[30px] pt-5 md:pt-6 lg:pt-[25px]">
        {/* Header - responsive typography */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] leading-[40px] md:leading-[52px] lg:leading-[65px] text-white font-sequel font-[415]">
            Got Project?
          </h2>
          <p className="mt-2 lg:mt-[5px] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-sequel font-[405]">
            Ask us and get the solution
          </p>
        </div>

        {/* Form fields container - responsive spacing */}
        <form onSubmit={handleSubmit} className="mt-6 md:mt-8 lg:mt-[35px]">
          {/* Name field */}
          <div className="mb-4 lg:mb-[18px]">
            <label className="mb-2 lg:mb-[7px] block text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-sequel font-[400]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="h-[42px] lg:h-[46px] w-full rounded-[13px] bg-white px-4 text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black placeholder-[#9A9A9A] outline-none font-sequel font-[400]"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email field */}
          <div className="mb-4 lg:mb-[18px]">
            <label className="mb-2 lg:mb-[7px] block text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-sequel font-[400]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[42px] lg:h-[45px] w-full rounded-[13px] bg-white px-4 text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black placeholder-[#9A9A9A] outline-none font-sequel font-[400]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Purpose field */}
          <div className="mb-4 lg:mb-[18px]">
            <label className="mb-2 lg:mb-[7px] block text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-sequel font-[400]">
              Purpose
            </label>
            <div className="relative">
              <select
                className="h-[42px] lg:h-[46px] w-full appearance-none rounded-[13px] bg-white px-4 pr-10 text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-[#9A9A9A] outline-none font-sequel font-[400]"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option value="">Select..</option>
                <option value="website">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="automation">Automation Solutions</option>
                <option value="other">Other</option>
              </select>
              <svg 
                className="pointer-events-none absolute right-4 top-1/2 h-[10px] md:h-[12px] w-[20px] md:w-[24px] -translate-y-1/2 rotate-180"
                viewBox="0 0 24 12" 
                fill="none"
              >
                <path d="M6 9L12 3L18 9" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Message field */}
          <div className="mb-4 lg:mb-[18px]">
            <label className="mb-2 lg:mb-[7px] block text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-sequel font-[400]">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="h-[80px] lg:h-[90px] w-full resize-none rounded-[13px] bg-white px-4 py-3 text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black placeholder-[#9A9A9A] outline-none font-sequel font-[400]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* Attach file */}
          <button
            type="button"
            className="mb-4 lg:mb-[16px] flex items-center gap-2 text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white transition-opacity hover:opacity-80 font-sequel font-[400]"
          >
            <Paperclip className="h-5 w-5 md:h-6 md:w-6 -rotate-90" />
            Attach file
          </button>

          {/* Agreement checkbox */}
          <label className="mb-4 lg:mb-[18px] flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 md:h-5 md:w-5 rounded border border-gray-600 bg-transparent"
              checked={formData.agreeToProcessing}
              onChange={(e) => setFormData({ ...formData, agreeToProcessing: e.target.checked })}
            />
            <span className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-[#C0C0C0] font-sequel font-[400]">
              I agree to personal data processing*
            </span>
          </label>

          {/* Submit button - responsive */}
          <button
            type="submit"
            className="mt-4 md:mt-5 lg:mt-[20px] flex h-[70px] md:h-[76px] lg:h-[83px] w-full items-center justify-between rounded-[35px] md:rounded-[38px] lg:rounded-[41.5px] bg-white px-3 lg:px-[12px] transition-all hover:shadow-lg"
          >
            {/* Arrow icon circle */}
            <div className="flex h-[44px] md:h-[48px] lg:h-[51px] w-[44px] md:w-[48px] lg:w-[51px] flex-shrink-0 items-center justify-center rounded-full bg-black">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="#608BF3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Button text - responsive */}
            <span className="flex-1 px-2 md:px-3 lg:px-4 text-center text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[30px] md:leading-[36px] lg:leading-[41px] text-black font-sequel">
              Get a solution
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}