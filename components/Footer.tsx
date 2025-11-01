
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center">
      <div className="flex justify-center items-center space-x-6 md:hidden mb-4">
        <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors duration-300">
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors duration-300">
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
      <p className="font-mono text-xs text-slate">
        Designed & Built by {PERSONAL_INFO.name}
      </p>
    </footer>
  );
};

export default Footer;
