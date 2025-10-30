import React from 'react';
import { content } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { locale } = useLanguage();
  const { contact, personalInfo } = content[locale];

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="font-mono text-cyan mb-2">{contact.preTitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">{contact.title}</h2>
      <p className="text-slate mb-10">
        {contact.paragraph}
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="font-mono inline-block text-lg border border-cyan text-cyan px-8 py-4 rounded hover:bg-cyan/10 transition-colors duration-300"
      >
        {contact.button}
      </a>
    </section>
  );
};

export default Contact;
