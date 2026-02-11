
import React from 'react';
import { CVData } from '../types.ts';
import { PROFILE_IMAGE_URL } from '../constants.ts';

interface HeaderProps {
  data: CVData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="relative mb-6 md:mb-8 border-b border-gray-100 pb-6 md:pb-8">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full sm:w-1/3 h-full bg-gradient-to-l from-[#C7A969]/5 to-transparent pointer-events-none -z-10 rounded-2xl"></div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start text-right">
        
        {/* Profile Image */}
        <div className="relative shrink-0 z-20 self-center md:self-start">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt={data.name} 
              className="w-full h-full object-cover block" 
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element behind image */}
          <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full bg-[#C7A969]/20 -z-10 rounded-2xl transform rotate-3"></div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col justify-center w-full items-start">
          <div className="mb-2 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#22042C] mb-1 tracking-tight leading-tight">
              {data.name}
            </h1>
            <div className="text-[#C7A969] font-extrabold text-sm sm:text-base md:text-lg lg:text-xl leading-tight mb-2">
              {data.jobTitle}
            </div>
            {data.jobTagline && (
              <p className="text-gray-500 font-bold text-[11px] sm:text-[13px] md:text-[14px] leading-relaxed max-w-2xl">
                {data.jobTagline}
              </p>
            )}
          </div>
          
          {/* Secondary Titles / Tags */}
          <div className="flex flex-wrap gap-2 mb-6 justify-start mt-4">
            {data.secondaryTitles.map((t, i) => (
              <div key={i} className="relative group">
                <span dir="ltr" className="bg-[#22042C] text-white text-[9px] sm:text-[11px] px-2.5 py-1.5 rounded-lg shadow-sm font-bold whitespace-nowrap uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 border border-white/10 hover:bg-[#3B0E49] transition-colors">
                  <span className="text-[#C7A969]">★</span>
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-y-3 text-[14px] sm:text-[14.5px] text-gray-700 items-start">
            {/* Phone Number */}
            <a href={`tel:${data.contact.phone}`} className="flex items-center gap-3 justify-start hover:text-[#C7A969] transition-colors font-bold group w-fit">
              <span className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center shadow-xs shrink-0 text-[14px] group-hover:bg-[#C7A969]/10 group-hover:scale-110 transition-all">📞</span>
              <span dir="ltr" className="tracking-wide">{data.contact.phone}</span>
            </a>
            
            {/* Email Address */}
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 justify-start hover:text-[#C7A969] transition-colors font-medium group w-fit overflow-hidden max-w-[280px] sm:max-w-none">
              <span className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center shadow-xs shrink-0 text-[14px] group-hover:bg-[#C7A969]/10 group-hover:scale-110 transition-all">✉️</span>
              <span className="truncate">{data.contact.email}</span>
            </a>
            
            {/* Location */}
            <div className="flex items-center gap-3 justify-start font-bold group w-fit">
              <span className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center shadow-xs shrink-0 text-[14px] group-hover:bg-[#C7A969]/10 group-hover:scale-110 transition-all">📍</span>
              <span className="tracking-tight">{data.contact.location}</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
