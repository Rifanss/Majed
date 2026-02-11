
import React from 'react';

interface SkillCardProps {
  title: string;
  items?: string[];
  isList?: boolean;
}

const getIcon = (title: string) => {
  const mapping: Record<string, string> = {
    "الامتثال وKYC": "🛡️",
    "الإجراءات المصرفية القضائية": "⚖️",
    "تحصيل ومعالجة الديون": "💰",
    "تشغيل العمليات": "⚙️",
    "التقارير والتحليلات": "📊",
    "الأنظمة والمنصات": "💻",
    "Compliance & KYC": "🛡️",
    "Judicial Banking Procedures": "⚖️",
    "Debt Collection & Processing": "💰",
    "Operations Management": "⚙️",
    "Reporting & Analytics": "📊",
    "Systems & Platforms": "💻"
  };
  return mapping[title] || "✨";
};

const SkillCard: React.FC<SkillCardProps> = ({ title, items, isList = true }) => {
  const icon = getIcon(title);

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-2 shadow-xs flex flex-col gap-1 border-r-[3px] border-r-[#22042C] h-full break-inside-avoid">
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[13px]">{icon}</span>
        <h3 className="font-bold text-[#22042C] text-[13.3px] leading-tight">
          {title}
        </h3>
      </div>
      
      {isList && items && (
        <ul className="space-y-0.5 pl-0 pr-0">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-1">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-[#C7A969] shrink-0"></div>
              <span className="text-[12px] leading-tight text-gray-700 font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillCard;
