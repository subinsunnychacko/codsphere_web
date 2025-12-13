// components/blog/BlogSidebar.tsx
"use client";

import { useState, useRef } from "react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
};

export function BlogSidebar() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if privacy policy is agreed
    if (!agreedToPrivacy) {
      setFormStatus({
        type: "error",
        message: "Please agree to personal data processing",
      });
      return;
    }

    // Set loading state
    setFormStatus({ type: "loading" });

    try {
      // Create FormData to handle file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("purpose", formData.purpose);
      submitData.append("message", formData.message);

      // Add file if selected
      if (selectedFile) {
        submitData.append("attachment", selectedFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          purpose: "",
          message: "",
        });
        setSelectedFile(null);
        setAgreedToPrivacy(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: "idle" });
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: unknown) {
      setFormStatus({
        type: "error",
        message: (error as Error)?.message || "Failed to send. Please email info@codsphere.ca",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: "idle" });
      }, 5000);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormStatus({
          type: "error",
          message: "File size must be less than 5MB",
        });
        e.target.value = "";
        return;
      }

      // Check file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];

      if (!allowedTypes.includes(file.type)) {
        setFormStatus({
          type: "error",
          message: "Please upload an image, PDF, Word, or Excel file",
        });
        e.target.value = "";
        return;
      }

      setSelectedFile(file);
      // Clear any error messages
      if (formStatus.type === "error") {
        setFormStatus({ type: "idle" });
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear any error messages when user starts typing
    if (formStatus.type === "error") {
      setFormStatus({ type: "idle" });
    }
  };

  return (
    <div className="w-full bg-black rounded-[19px] overflow-hidden p-4 md:p-5 lg:p-[20px] relative">
      {/* Optional background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-[40px]">
          <h3 className="text-white font-sequel text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] mb-1 lg:mb-[5px]">
            Need Help?
          </h3>
          <p className="text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405]">
            Ask us and get the solution
          </p>
        </div>

        {/* Status Messages */}
        {formStatus.type !== "idle" && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm font-sequel ${
              formStatus.type === "success"
                ? "bg-green-900/50 text-green-200 border border-green-700"
                : formStatus.type === "error"
                  ? "bg-red-900/50 text-red-200 border border-red-700"
                  : formStatus.type === "loading"
                    ? "bg-blue-900/50 text-blue-200 border border-blue-700"
                    : ""
            }`}
          >
            {formStatus.type === "loading" ? "Sending your message..." : formStatus.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 lg:space-y-[24px]">
          {/* Name Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-normal">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full h-[42px] md:h-[44px] lg:h-[46px] px-3 md:px-4 bg-white rounded-[13px] font-sequel text-[14px] md:text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formStatus.type === "loading"}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-normal">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full h-[42px] md:h-[44px] lg:h-[46px] px-3 md:px-4 bg-white rounded-[13px] font-sequel text-[14px] md:text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formStatus.type === "loading"}
            />
          </div>

          {/* Purpose Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-normal">
              Purpose
            </label>
            <div className="relative">
              <select
                name="purpose"
                className="w-full h-[42px] md:h-[44px] lg:h-[46px] px-3 md:px-4 pr-10 bg-white rounded-[13px] font-sequel text-[14px] md:text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{ color: formData.purpose ? "#000000" : "#9A9A9A" }}
                value={formData.purpose}
                onChange={handleChange}
                required
                disabled={formStatus.type === "loading"}
              >
                <option value="">Select..</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Business">Business</option>
                <option value="CRM Development">CRM Development</option>
                <option value="ERP Implementation">ERP Implementation</option>
              </select>
              <svg
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#9A9A9A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-normal">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full h-[80px] md:h-[85px] lg:h-[90px] px-3 md:px-4 py-2 md:py-3 bg-white rounded-[13px] font-sequel text-[14px] md:text-[14px] lg:text-[15px] leading-[17px] lg:leading-[18px] text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={formStatus.type === "loading"}
            />
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
            className="hidden"
          />

          {/* Attach File or Show Selected File */}
          {selectedFile ? (
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-300 font-sequel text-[13px] md:text-[14px] truncate flex-1">
                {selectedFile.name}
              </span>
              <button
                type="button"
                onClick={removeFile}
                className="text-red-400 hover:text-red-300"
                disabled={formStatus.type === "loading"}
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div
              onClick={triggerFileInput}
              className="flex items-center gap-2 lg:gap-[10px] cursor-pointer hover:opacity-80"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21.44 11.05L12.25 20.24C11.12 21.37 9.58 22 8 22C6.42 22 4.88 21.37 3.75 20.24C2.62 19.11 2 17.57 2 16C2 14.43 2.62 12.89 3.75 11.76L12.94 2.57C13.75 1.76 14.83 1.3 15.96 1.3C17.09 1.3 18.17 1.76 18.98 2.57C19.79 3.38 20.25 4.46 20.25 5.59C20.25 6.72 19.79 7.8 18.98 8.61L9.79 17.8C9.38 18.21 8.83 18.44 8.26 18.44C7.69 18.44 7.14 18.21 6.73 17.8C6.32 17.39 6.09 16.84 6.09 16.27C6.09 15.7 6.32 15.15 6.73 14.74L15.27 6.2"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-45 12 12)"
                />
              </svg>
              <span className="text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-normal">
                Attach file
              </span>
            </div>
          )}

          {/* Agreement Text with Checkbox */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToPrivacy}
              onChange={(e) => setAgreedToPrivacy(e.target.checked)}
              className="w-4 h-4 mt-1 rounded border-gray-500 bg-white/10"
              disabled={formStatus.type === "loading"}
            />
            <span className="text-gray-300 font-sequel text-[14px] md:text-[16px] lg:text-[20px] leading-[18px] md:leading-[20px] lg:leading-[24px] font-light">
              I agree to personal data processing*
            </span>
          </label>

          {/* Submit Button - Get a solution */}
          <button
            type="submit"
            disabled={formStatus.type === "loading"}
            className={`w-full h-[56px] md:h-[68px] lg:h-[83px] rounded-full mt-4 md:mt-6 lg:mt-8 flex items-center justify-center relative transition-all group ${
              formStatus.type === "loading"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <div className="absolute left-3 md:left-4 lg:left-[16px] w-[38px] h-[38px] md:w-[46px] md:h-[46px] lg:w-[51px] lg:h-[51px] bg-black rounded-full flex items-center justify-center">
              {formStatus.type === "loading" ? (
                <svg
                  className="animate-spin h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[19px] md:w-[24px] md:h-[23px] lg:w-[29px] lg:h-[28px]"
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M7 14H22M22 14L15 7M22 14L15 21"
                    stroke="#608BF3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span className="text-black font-sequel text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[41px] font-[415]">
              {formStatus.type === "loading" ? "Sending..." : "Get a solution"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
