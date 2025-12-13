// components/blog/BlogTableOfContents.tsx
'use client';

import { useState } from 'react';

interface TableOfContentsProps {
  sections: string[];
}

export function BlogTableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    // Could add scroll-to-section functionality here
  };

  return (
    <div 
      className="bg-[#F8F9FA] rounded-[11px] p-4 md:p-5 lg:p-[22px_15px] w-full"
      style={{
        boxShadow: '-4px 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Header - Following ServicesFAQ header pattern */}
      <h3 className="mb-6 md:mb-8 lg:mb-[30px] text-center lg:text-center text-[20px] md:text-[22px] lg:text-[25px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-[415] font-sequel text-black">
        Table of Contents
      </h3>
      
      {/* Items - Following ServicesFAQ spacing pattern */}
      <div className="space-y-3 lg:space-y-[12px]">
        {sections.map((section, index) => {
          const isActive = activeSection === index;
          
          return (
            <div 
              key={index}
              onClick={() => handleSectionClick(index)}
              className={`
                relative cursor-pointer transition-all duration-300
                rounded-[12px] 
                p-4 lg:p-[16px_20px_16px_16px] 
                min-h-[48px] lg:min-h-[56px] 
                flex items-center border border-[#E6E9F4] overflow-hidden
                hover:bg-[#EFF2FF] hover:shadow-sm
                ${isActive ? 'bg-[#EFF2FF]' : 'bg-white'}
              `}
            >
              {/* Left accent bar */}
              <div 
                className={`
                  absolute left-0 top-0 bottom-0 
                  w-[3px] lg:w-[4px] 
                  rounded-l-[12px]
                  transition-all duration-300
                  ${isActive ? 'bg-[#608BF3]' : 'bg-[#8BA5FF]'}
                `}
              />
              
              {/* Text - Following ServicesFAQ text pattern */}
              <p className={`
                text-[12px] md:text-[13px] lg:text-[14px] 
                leading-[16px] md:leading-[17px] lg:leading-[18px] 
                ${isActive ? 'font-[500]' : 'font-[400]'} 
                font-sequel text-black m-0 
                pl-3 lg:pl-[12px]
                transition-all duration-300
              `}>
                {section}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}