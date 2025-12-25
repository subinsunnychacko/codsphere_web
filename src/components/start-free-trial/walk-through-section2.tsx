"use client";
import { ArrowDown, PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function WalkThroughSection2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section className="bg-black bg-dots text-white relative">
      <div className="relative z-10 container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            See CodSphere in Action
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Watch how CodSphere helps teams automate tasks, visualize data, and scale operations —
            all in one place.
          </p>
        </div>

        {/* Video section */}
        <div className="mb-12 flex justify-center relative h-124 rounded-xl overflow-hidden">
          <button
            className="absolute left-8 bottom-8 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-black cursor-pointer"
            aria-label="Play video"
            onClick={toggleVideoPlay}
          >
            {!isVideoPlaying ? (
              <PlayIcon size={28} strokeWidth={2} className="font-bold text-black" />
            ) : (
              <PauseIcon size={28} strokeWidth={2} className="font-bold text-black" />
            )}
          </button>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster="/images/home/work-samples/work-sample-5.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            Prefer a quick overview? Download our product brochure for a deep dive into CRM + ERP +
            Analytics.
          </p>
          <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
             <a
              href="/brochures/Welcome-to-Codsphere (1).pdf"
              download
              className="inline-block"
            >
              <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowDown />
                </div>
                Download Brochure
              </div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
