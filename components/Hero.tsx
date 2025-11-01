
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start">
      <div className="max-w-3xl">
        <p className="text-cyan font-mono mb-4 text-base md:text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4">
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
          I build things for the web.
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-slate max-w-xl mb-12">
            I'm a {PERSONAL_INFO.title.toLowerCase()} specializing in crafting performant, accessible, and beautiful web applications. I love bringing ideas to life with code.
        </p>
        <div className="flex items-center space-x-6">
            <button onClick={scrollToContact} className="font-mono text-lg border border-cyan text-cyan px-8 py-4 rounded hover:bg-cyan/10 transition-colors duration-300">
                Get In Touch
            </button>
            <div className="flex items-center space-x-4">
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors duration-300">
                    <GitHubIcon className="w-7 h-7" />
                </a>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors duration-300">
                    <LinkedInIcon className="w-7 h-7" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
