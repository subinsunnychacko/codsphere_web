'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden w-full max-w-[1440px] mx-auto" style={{minHeight: '800px'}}>
      {/* According to Figma - Info Card positioned at top left */}
      <div className="absolute" style={{left: '90px', top: '40px', width: '380px'}}>
        <div className="bg-[#F1F2F6] rounded-[20px] md:rounded-[32px] p-3 md:p-4">
          <div className="flex gap-3">
            {/* Thumbnail */}
            <div className="relative w-[120px] md:w-[151px] h-[123px] md:h-[154px] bg-white rounded-[15px] md:rounded-[21px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/home/ai-hand.jpg"
                alt="AI robotic hand"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 151px"
                priority
              />
            </div>
            
            {/* Text and buttons */}
            <div className="flex flex-col justify-between py-2">
              <p className="text-[10px] md:text-[12px] leading-[13px] md:leading-[15px] text-black font-sequel">
                AI-powered ERP & CRM for smarter business. Automate tasks, predict trends, and boost productivity. Work faster, grow smarter.
              </p>
              
              {/* Explore more button with chevrons */}
              <div className="flex items-center bg-white rounded-[15px] md:rounded-[21px] h-[35px] md:h-[40px] overflow-hidden">
                <button className="bg-black text-white h-full px-3 md:px-4 text-[10px] md:text-[12px] font-sequel hover:bg-gray-900 transition-colors">
                  Explore more
                </button>
                <div className="flex items-center px-2 md:px-3 gap-0">
                  <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                  <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                  <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Container - Positioned to the right as shown in Figma */}
      <div className="absolute" style={{right: '90px', top: '60px', width: '550px', height: '400px'}}>
        <div className="relative w-full h-full">
          {/* Aspect ratio container */}
          <div className="relative w-full h-full">
            {/* CodSphere Logo Icon */}
            <div className="absolute -top-6 right-6 w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center z-20">
              <Image
                src="/logo-icon-white.svg"
                alt="CodSphere"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>

            {/* Video Container with exact thumbnail shape */}
            <div className="absolute inset-0">
              <svg 
                viewBox="0 0 809 599" 
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <clipPath id="heroVideoShape">
                    <path d="
                      M 120,10
                      Q 60,10 60,70
                      L 60,200
                      Q 60,240 30,260
                      Q 10,280 10,320
                      L 10,460
                      Q 10,500 40,520
                      Q 70,540 100,540
                      Q 130,540 140,560
                      Q 150,580 180,590
                      Q 210,599 250,599
                      L 700,599
                      Q 760,599 790,560
                      Q 809,530 809,470
                      L 809,120
                      Q 809,60 770,35
                      Q 730,10 670,10
                      L 120,10
                      Z
                    " />
                  </clipPath>
                </defs>
                
                <foreignObject 
                  width="809" 
                  height="599" 
                  clipPath="url(#heroVideoShape)"
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/images/home/video-poster.jpg"
                    onClick={togglePlay}
                    playsInline
                    muted
                    loop
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                  </video>
                </foreignObject>
                
                <path 
                  d="
                    M 120,10
                    Q 60,10 60,70
                    L 60,200
                    Q 60,240 30,260
                    Q 10,280 10,320
                    L 10,460
                    Q 10,500 40,520
                    Q 70,540 100,540
                    Q 130,540 140,560
                    Q 150,580 180,590
                    Q 210,599 250,599
                    L 700,599
                    Q 760,599 790,560
                    Q 809,530 809,470
                    L 809,120
                    Q 809,60 770,35
                    Q 730,10 670,10
                    L 120,10
                    Z
                  "
                  fill="none" 
                  stroke="black" 
                  strokeWidth="1"
                />
              </svg>
              
              {/* Play button (centered) */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <Play className="w-10 h-10 ml-2" fill="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pills positioned according to Figma */}
      <div className="absolute" style={{left: '90px', top: '260px'}}>
        <div className="flex gap-3 mb-3">
          <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Automate
          </span>
          <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Optimize
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <span className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Scale
          </span>
          <span className="px-7 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Accelerate
          </span>
          <span className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Integrate
          </span>
        </div>
      </div>

      {/* Subtitle positioned according to Figma */}
      <div className="absolute" style={{left: '90px', top: '380px', width: '597px'}}>
        <p className="text-[25px] leading-[36px] text-[#525252] font-sequel font-light">
          At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
          invoicing tools, and full-funnel digital strategies so your business runs 
          smarter, not harder.
        </p>
      </div>
      
      {/* Main Headline - positioned exactly as specified in Figma CSS */}
      <div className="absolute" style={{left: 'calc(50% - 602px/2 - 328px)', top: '602px', width: '602px', height: '177px'}}>
        <h1 className="font-sequel text-[50px] leading-[59px] font-normal text-black" style={{fontWeight: 415}}>
          AI ERP, CRM & Automation<br />
          Experts Driving Smarter<br />
          Business Efficiency
        </h1>
      </div>
    </section>
  );
}