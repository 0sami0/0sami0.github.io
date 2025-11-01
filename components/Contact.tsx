
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="font-mono text-cyan mb-2">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h2>
      <p className="text-slate mb-10">
        I'm currently open to new opportunities and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="font-mono inline-block text-lg border border-cyan text-cyan px-8 py-4 rounded hover:bg-cyan/10 transition-colors duration-300"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
