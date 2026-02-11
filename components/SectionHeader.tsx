
import React from 'react';

interface SectionHeaderProps {
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <div className="flex flex-col gap-1 mb-5 group avoid-break">
      <div className="flex items-center gap-3">
        <h2 className="bg-[#22042C] text-white px-4 sm:px-5 py-2 rounded-tr-xl rounded-bl-xl font-black text-[18px] sm:text-[24px] tracking-wide shadow-md transition-transform group-hover:scale-102">
          {label}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#C7A969] to-transparent opacity-40"></div>
      </div>
      <div className="w-12 sm:w-16 h-1 bg-[#C7A969] rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
