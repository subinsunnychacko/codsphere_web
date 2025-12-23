import { ReactNode } from "react";

export default function Testimonial({ children }: { children: ReactNode }) {
  return (
    <div className="bg-linear-to-t from-[#3032C7] to-[#6165EF] text-white text-xl sm:text-2xl text-center italic font-semibold px-14 py-4 mt-12">
      {children}
    </div>
  );
}
