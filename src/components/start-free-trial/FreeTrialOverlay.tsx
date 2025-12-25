"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  terms: boolean;
}

export default function FreeTrialOverlay({ open, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      reset();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, reset]);

  if (!open) return null;

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.fullName, email: data.email, phone: data.phone }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Free trial request submitted! Check your email.");
        reset();
        onClose();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] max-w-full
            rounded-[28px] bg-white/90 backdrop-blur-xl
            border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            p-8 relative flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        <h1 className="text-[28px] font-bold text-center text-gray-900">
          Activate Your 14-Day Free Trial
        </h1>

        <p className="text-center text-sm text-gray-500 mt-1 mb-7">
          No charge today. Billing starts only after your trial ends.
        </p>
        <div className="overflow-y-auto pr-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* User Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">User Information</h3>

              <div className="space-y-3">
                <Input
                  label="Full Name"
                  error={errors.fullName?.message}
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />

                <Input
                  label="Email"
                  type="email"
                  error={errors.email?.message}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />

                <Input
                  label="Phone Number"
                  error={errors.phone?.message}
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must agree to continue",
                })}
                className="mt-1"
              />
              <span>
                I agree to the <a className="text-blue-600">Terms</a>,{" "}
                <a className="text-blue-600">Privacy Policy</a>, and{" "}
                <a className="text-blue-600">Subscription Agreement</a>.
              </span>
            </label>

            {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}

            {/* Submit */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <button
                disabled={loading}
                type="submit"
                className="h-[52px] w-full max-w-[360px] rounded-full bg-gradient-to-r from-[#34e0ff] to-[#1e3a8a] text-white font-semibold shadow-lg hover:brightness-105 transition"
              >
                {loading ? "Sending..." : "Start 14-Day Free Trial"}
              </button>

              <p className="text-xs text-gray-500">
                You can cancel anytime before your trial ends.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Reusable Input ------------------ */

const Input = ({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        {...props}
        className={`h-11 rounded-full border px-4 text-sm focus:outline-none focus:ring-2 ${
          error ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-blue-400"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
