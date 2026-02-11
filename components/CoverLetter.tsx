
import React from 'react';
import { SIGNATURE_IMAGE_URL } from '../constants.ts';

interface CoverLetterProps {
  content: string;
  name: string;
}

const CoverLetter: React.FC<CoverLetterProps> = ({ content, name }) => {
  const paragraphs = content.split('\n\n');

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/gs);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-extrabold text-[#22042C]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-between py-6">
      <div className="space-y-5">
        {paragraphs.map((p, idx) => {
          if (idx === 0) {
            return (
              <h2 key={idx} className="text-[19px] font-bold text-[#22042C] mb-5 italic">
                {renderFormattedText(p)}
              </h2>
            );
          }
          
          if (idx === paragraphs.length - 1) return null;

          return (
            <p key={idx} className="text-gray-700 text-[15px] leading-relaxed text-justify">
              {renderFormattedText(p)}
            </p>
          );
        })}
      </div>

      <div className="mt-10">
        <p className="text-[#22042C] font-bold mb-3 text-[15.5px]">
          {renderFormattedText(paragraphs[paragraphs.length - 1])}
        </p>
        
        <div className="flex flex-col items-start">
           <div className="relative w-72 h-32 -mt-6 mb-3 flex items-center justify-start overflow-hidden">
             <img 
                src={SIGNATURE_IMAGE_URL} 
                alt="Signature" 
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
                style={{ filter: 'contrast(1.2) saturate(1.2)' }}
             />
           </div>
           
           <div className="flex flex-col -mt-10">
             <span className="font-black text-[#22042C] text-[18px]">{name}</span>
             <div className="flex items-center gap-2.5">
               <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold border border-blue-100">✓</div>
               <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">E-Signature Verified</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
