import React from 'react';
import { content } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate flex items-center mb-10 w-full">
        <span className="text-xl md:text-2xl text-cyan font-mono mr-4">0{number}.</span>
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
    </h2>
);


const About: React.FC = () => {
  const { locale } = useLanguage();
  const { about, personalInfo, skills } = content[locale];

  return (
    <section id="about" className="py-24">
      <SectionTitle number="1" title={about.title} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-lg text-slate space-y-4">
            <p>{personalInfo.bio}</p>
            <p>{about.techIntro}</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {skills.map(skill => (
                    <li key={skill} className="flex items-center before:content-['▹'] before:text-cyan before:mr-2">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
        <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 group">
                <div className="absolute inset-0 bg-cyan rounded-md transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                    src={`https://picsum.photos/seed/profile/400/400`}
                    alt={personalInfo.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-md filter grayscale hover:grayscale-0 transition-all duration-300 -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
