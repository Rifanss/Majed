
import React from 'react';

interface LicenseCardProps {
  title: string;
  issuer: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ title, issuer }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-2 shadow-xs flex flex-col justify-center h-full border-r-[3px] border-r-[#C7A969] break-inside-avoid min-h-[48px]">
      <h4 className="text-[#22042C] font-black text-[12.6px] leading-tight mb-0.5 line-clamp-2">
        {title}
      </h4>
      <p className="text-[#967d3e] text-[10px] font-bold uppercase tracking-tighter truncate opacity-80">
        {issuer}
      </p>
    </div>
  );
};

export default LicenseCard;
