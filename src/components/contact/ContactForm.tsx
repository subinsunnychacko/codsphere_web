"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
};

export const ContactForm = () => {
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
          message:
            result.message ||
            "Thank you for your message! We'll get back to you within 24-48 hours.",
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
        message:
          (error as Error)?.message ||
          "Failed to send message. Please try again or contact us directly at info@codsphere.ca",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: "idle" });
      }, 5000);
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

  return (
    <section className="">
      <div className="container-wrapper py-more">
        {/* Section heading */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">
            We are here to help you
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Let's Build Something Together
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Whether you have a question, a bold idea, or a detailed brief — we're ready to help.
            From CRM consultations to ERP implementation, we respond fast and get straight to
            solutions.
          </p>
        </div>

        {/* Status Messages */}
        {formStatus.type !== "idle" && (
          <div
            className={`mb-6 p-4 rounded-lg text-center mx-auto ${
              formStatus.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : formStatus.type === "error"
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : formStatus.type === "loading"
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : ""
            }`}
          >
            {formStatus.type === "loading" ? "Sending your message..." : formStatus.message}
          </div>
        )}

        {/* Form container */}
        <div className=" mx-auto">
          {/* Vancouver Location Info - Above form */}
          <div className="my-6 md:my-8">
            <p className="text-black    text-[24px] md:text-[28px] lg:text-[32px] font-normal mb-1">
              Vancouver
            </p>
            <p className="text-black    text-[16px] md:text-[17px] lg:text-[18px] font-normal mb-0">
              Mon—Fri
            </p>
            <p className="text-[#9A9A9A]    text-[16px] md:text-[17px] lg:text-[18px] font-light">
              09:00—21:00
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {/* Name, Email, Purpose - responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-[20px] text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4    text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                  disabled={formStatus.type === "loading"}
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-[20px] text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4    text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                  disabled={formStatus.type === "loading"}
                />
              </div>

              {/* Purpose dropdown */}
              <div>
                <label htmlFor="purpose" className="block text-[20px] text-black mb-2">
                  Purpose
                </label>
                <div className="relative">
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 pr-10    text-[14px] md:text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer text-gray-600 transition-all"
                    required
                    disabled={formStatus.type === "loading"}
                  >
                    <option value="" className="text-gray-400">
                      Select...
                    </option>
                    <option value="CRM Development">CRM Development</option>
                    <option value="ERP Implementation">ERP Implementation</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-[20px] text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 py-3    text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none transition-all"
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

            {/* Bottom section */}
            <div className="flex flex-row gap-6 justify-between items-end">
              <div className="flex flex-col gap-3">
                {/* Attach file or show selected file */}
                {selectedFile ? (
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    <span className="text-[14px] text-gray-700 max-w-[200px] truncate">
                      {selectedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="ml-2 text-red-500 hover:text-red-700"
                      disabled={formStatus.type === "loading"}
                    >
                      <svg
                        className="w-4 h-4"
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
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="flex items-center gap-2 text-black hover:text-black/60 text-[20px] hover:opacity-70 transition-colors"
                    disabled={formStatus.type === "loading"}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    <span>Attach file</span>
                  </button>
                )}

                {/* Privacy checkbox */}
                <label className="flex items-center gap-2 text-[20px] text-black cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    required
                    className="w-4 h-4 rounded border-gray-300"
                    disabled={formStatus.type === "loading"}
                  />
                  <span>I agree to personal data processing</span>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={formStatus.type === "loading"}
                className="w-fit rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px] cursor-pointer disabled:from-gray-500 disabled:to-[#010B66] disabled:cursor-not-allowed"
              >
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-full px-4 py-3 bg-black",
                    formStatus.type === "loading" ? "bg-gray-400" : "bg-black  hover:bg-gray-700",
                  )}
                >
                  {formStatus.type === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Get a solution
                      <div className="bg-white text-black rounded-full p-0.5">
                        <ArrowRight />
                      </div>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
