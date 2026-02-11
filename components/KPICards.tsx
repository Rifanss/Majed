
import React from 'react';

const KPICards: React.FC = () => {
  const kpis = [
    { value: "+10 سنوات", label: "خبرة مصرفية" },
    { value: "7,500,000 ريال", label: "أعلى مبلغ تحصيل خلال عام" },
    { value: "المركز الأول", label: "عاميين متتاليين" },
    { value: "امتثال كامل", label: "تعليمات البنك المركزي السعودي" },
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 avoid-break no-print-break">
      {kpis.map((kpi, idx) => (
        <div 
          key={idx} 
          className="bg-white border border-gray-100 rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-sm border-b-2 border-b-[#C7A969] min-h-[80px]"
        >
          <span className="text-[#22042C] font-black text-[14px] sm:text-[15px] md:text-[16px] leading-tight mb-1 whitespace-nowrap">
            {kpi.value}
          </span>
          <span className="text-gray-500 font-bold text-[9px] sm:text-[10px] md:text-[11px] leading-tight">
            {kpi.label}
          </span>
        </div>
      ))}
    </section>
  );
};

export default KPICards;
