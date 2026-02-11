
import React from 'react';

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
  relatedAwards?: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, subtitle, company, period, description, skills, relatedAwards }) => {
  return (
    <article className="relative bg-white border border-gray-100 rounded-xl p-5 shadow-sm break-inside-avoid group mb-6">
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-[#C7A969] rounded-r-xl"></div>
      
      <div className="pr-3">
        <h3 className="text-[#22042C] font-black text-[18.6px] mb-1 leading-snug">
          {title}
        </h3>
        <div className="font-poppins text-[#7a6b8e] text-[13.3px] mb-2">{subtitle}</div>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
          <div className="text-[#004630] font-bold text-[14.6px] bg-green-50 px-2 py-0.5 rounded border border-green-100">
            {company}
          </div>
          <div className="text-gray-400 text-[12px] italic">{period}</div>
        </div>
        
        <div className="space-y-2 mb-4">
          {description.map((para, index) => (
            <p key={index} className="text-gray-700 text-[14.6px] leading-relaxed text-justify">
              {para}
            </p>
          ))}
        </div>

        {skills && skills.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-50">
            <h4 className="text-[#22042C] font-bold text-[13.3px] mb-1.5">المهارات المكتسبة:</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="text-[12px] font-bold bg-[#F0F4F8] text-[#22042C] px-2 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {relatedAwards && relatedAwards.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-50">
            <h4 className="text-[#C7A969] font-bold text-[13.3px] mb-1.5">الإنجازات:</h4>
            <div className="space-y-1">
              {relatedAwards.map((award, i) => (
                <div key={i} className="flex items-start gap-2 text-[13.3px] text-gray-700 font-medium">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C7A969] shrink-0"></div>
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceItem;
