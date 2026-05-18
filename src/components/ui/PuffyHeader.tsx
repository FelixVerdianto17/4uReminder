import React from 'react';

export function PuffyHeader() {
  return (
    <div 
      className="relative mx-auto inline-flex items-center justify-center py-4 px-8 overflow-visible"
    >
      {/* Sparkles Decoration - Top Left */}
      <svg 
        className="absolute -top-4 -left-4 w-12 h-12" 
        viewBox="0 0 32 32" 
        style={{ filter: 'drop-shadow(3px 5px 30px rgba(0,0,0,0.22))' }}
      >
        <path d="M16 2L18.5 11.5L28 14L18.5 16.5L16 26L13.5 16.5L4 14L13.5 11.5L16 2Z" fill="#0066cc" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M7 5L7.8 8.2L11 9L7.8 9.8L7 13L6.2 9.8L3 9L6.2 8.2L7 5Z" fill="#0071e3" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>

      {/* Main Puffy Text */}
      <div className="relative inline-block hover:scale-105 transition-transform duration-300">
        {/* Foreground (Solid Ink Color) */}
        <span 
          className="relative z-10 font-sans font-semibold text-[56px] md:text-[80px] text-[#1d1d1f] tracking-[-0.28px] select-none leading-[1.07]"
        >
          4u reminder
        </span>
        
        {/* Background (Thick White Outline & Apple Product Shadow) */}
        <span 
          aria-hidden="true"
          className="absolute left-0 top-0 z-0 font-sans font-semibold text-[56px] md:text-[80px] text-white tracking-[-0.28px] select-none leading-[1.07]"
          style={{ 
            WebkitTextStroke: '20px white',
            filter: 'drop-shadow(3px 5px 30px rgba(0, 0, 0, 0.22))'
          }}
        >
          4u reminder
        </span>
      </div>

      {/* Decorative Heart - Bottom Right */}
      <svg 
        className="absolute -bottom-4 -right-4 w-12 h-12 hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24" 
        style={{ filter: 'drop-shadow(3px 5px 30px rgba(0,0,0,0.22))' }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
              fill="#0066cc" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
