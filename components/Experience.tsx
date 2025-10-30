import React, { useState } from 'react';
import { content } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate flex items-center mb-10 w-full">
        <span className="text-xl md:text-2xl text-cyan font-mono mr-4">0{number}.</span>
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
    </h2>
);

const Experience: React.FC = () => {
  const { locale } = useLanguage();
  const { experience } = content[locale];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto">
      <SectionTitle number="2" title={experience.title} />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experience.experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`font-mono text-sm w-full text-left p-3 whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-300 ${
                activeTab === index
                  ? 'bg-lightest-navy text-cyan border-cyan'
                  : 'border-light-navy text-slate hover:bg-lightest-navy/50 hover:text-cyan'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-grow">
          {experience.experiences.map((exp, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <h3 className="text-xl font-bold text-lightest-slate">
                {exp.role} <span className="text-cyan">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm text-slate mb-4 mt-1">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan mr-3 mt-1">▹</span>
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
