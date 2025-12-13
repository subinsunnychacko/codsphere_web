"use client";

interface ViewMoreButtonProps {
  onClick?: () => void;
}

export default function ViewMoreButton({ onClick }: ViewMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-full bg-black px-6 py-3 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
    >
      <span className="text-base font-medium">View More</span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 12L10 8L6 4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
