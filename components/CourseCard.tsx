
import React from 'react';

interface CourseCardProps {
  title: string;
  issuer: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, issuer }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-1.5 shadow-xs flex flex-col justify-center min-h-[42px] border-r-[2px] border-r-[#C7A969] break-inside-avoid">
      <h4 className="text-[#22042C] font-bold text-[11.5px] leading-snug line-clamp-2" title={title}>
        {title}
      </h4>
      <p className="text-[#967d3e] text-[9px] font-bold uppercase tracking-tighter opacity-70">
        {issuer}
      </p>
    </div>
  );
};

export default CourseCard;
