
import React, { useState, useEffect } from 'react';
import SectionHeader from './components/SectionHeader.tsx';
import ExperienceItem from './components/ExperienceItem.tsx';
import SkillCard from './components/SkillCard.tsx';
import LicenseCard from './components/LicenseCard.tsx';
import CourseCard from './components/CourseCard.tsx';
import CoverLetter from './components/CoverLetter.tsx';
import Header from './components/Header.tsx';
import AwardCard from './components/AwardCard.tsx';
import KPICards from './components/KPICards.tsx';
import { cvData, PROFILE_IMAGE_URL } from './constants.ts';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const data = cvData[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      
      {/* Navigation Bar */}
      <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm no-print sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src={PROFILE_IMAGE_URL} 
              className="w-8 h-8 rounded-full object-cover border border-[#C7A969]/30" 
              alt="Profile" 
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-[#22042C] font-black text-[11px] leading-tight truncate max-w-[150px]">{data.name}</span>
              <span className="text-[#C7A969] text-[9px] font-bold uppercase tracking-widest truncate max-w-[150px]">{data.jobTitle}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="bg-[#22042C] text-white px-3 md:px-4 py-1.5 rounded-lg font-bold text-[10px] md:text-[11px] shadow-lg hover:bg-[#3B0E49] transition-all transform hover:scale-105 flex items-center gap-2">
              <span>🖨️</span> <span className="hidden xs:inline">تحميل PDF</span>
            </button>
            <a href={data.contact.wordUrl} download className="bg-[#2B579A] text-white px-3 md:px-4 py-1.5 rounded-lg font-bold text-[10px] md:text-[11px] shadow-lg hover:bg-[#1E3E6D] transition-all transform hover:scale-105 flex items-center gap-2">
              <span>📝</span> <span className="hidden xs:inline">Word</span>
            </a>
            <button onClick={toggleLang} className="bg-white text-[#22042C] px-3 py-1.5 rounded-full font-bold text-[10px] md:text-[11px] shadow-sm border border-gray-200 flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
              <span>🌐</span> <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main A4 Container */}
      <main className={`cv-container ${lang === 'en' ? 'font-poppins' : ''}`}>
        
        {/* Header Section */}
        <Header data={data} />

        {/* KPI Cards Section */}
        <KPICards />

        {/* Summary & Objective */}
        <section className="mb-8 mt-4">
          <SectionHeader label={data.labels.summary} />
          <div className="text-[14px] md:text-[14.6px] leading-relaxed text-justify whitespace-pre-line text-gray-800 bg-gray-50/20 p-4 rounded-xl">
            {data.summary}
          </div>
        </section>

        <section className="mb-8">
          <SectionHeader label={data.labels.careerObjective} />
          <div className="text-[14px] md:text-[14.6px] leading-relaxed text-justify whitespace-pre-line text-gray-800 bg-[#C7A969]/5 p-4 rounded-xl border border-[#C7A969]/10">
            {data.careerObjective}
          </div>
        </section>

        {/* Cover Letter Section */}
        <section className="mb-8">
          <SectionHeader label={data.labels.coverLetter} />
          <div className="p-4 sm:p-6 rounded-2xl border border-dashed border-gray-200">
            <CoverLetter content={data.coverLetter} name={data.name} />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <SectionHeader label={data.labels.experience} />
          <div className="space-y-4">
            {data.experience.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <SectionHeader label={data.labels.education} />
          <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 border-r-4 border-r-[#22042C] shadow-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#22042C] text-white rounded-lg flex items-center justify-center text-xl sm:text-2xl shrink-0">🎓</div>
            <div>
              <h4 className="font-bold text-[#22042C] text-[16px] sm:text-[18.6px] leading-tight">{data.education}</h4>
            </div>
          </div>
        </section>

        {/* Professional Specialized Skills - 3 per row */}
        <section className="mb-8">
          <SectionHeader label={data.labels.specializedSkills} />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
            {data.specializedSkills.map((skill, idx) => (
              <SkillCard key={idx} title={skill.title} items={skill.items} isList={true} />
            ))}
          </div>
        </section>

        {/* Certificates & Licenses */}
        <section className="mb-8">
          <SectionHeader label={data.labels.certificates} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data.certificates.map((cert, idx) => (
              <LicenseCard key={idx} {...cert} />
            ))}
          </div>
        </section>

        {/* Training Courses - 3 per row */}
        <section className="mb-8">
          <SectionHeader label={data.labels.courses} />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
            {data.courses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>
        </section>

        {/* Awards & Languages */}
        <section className="space-y-8 mb-8">
          <div>
            <SectionHeader label={data.labels.awards} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.awards.map((award, idx) => (
                <AwardCard key={idx} {...award} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader label={data.labels.languages} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.languages.map((l, i) => (
                <div key={i} className="flex justify-between items-center px-4 sm:px-6 py-4 bg-[#22042C] text-white rounded-xl shadow-md border-r-4 border-r-[#C7A969] break-inside-avoid">
                   <span className="font-black text-[16px] sm:text-[18.6px] tracking-wide">{l.name}</span>
                   <span className="text-[#C7A969] font-bold uppercase text-[10px] sm:text-[12px]">
                     {l.level}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="mt-auto pt-8 border-t border-gray-50 text-center no-print">
           <p className="text-gray-400 text-[10px] sm:text-[12px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} {data.name} — Confidential Report (A4 Format)</p>
        </footer>

      </main>

    </div>
  );
};

export default App;