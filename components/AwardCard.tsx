
import React from 'react';

interface AwardCardProps {
  title: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col gap-2 border-t-2 border-t-[#C7A969] break-inside-avoid">
      <div className="flex items-center gap-2">
        <span className="text-xl">🏆</span>
        <h4 className="font-bold text-[#22042C] text-[14.6px] leading-tight">
          {title}
        </h4>
      </div>
      <p className="text-gray-500 text-[13.3px] leading-relaxed text-justify px-1">
        {description}
      </p>
    </div>
  );
};

export default AwardCard;
