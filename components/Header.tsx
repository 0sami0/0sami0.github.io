
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-mono text-cyan font-bold transition-transform hover:scale-105" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AB
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lightest-slate hover:text-cyan transition-colors duration-300 font-mono">
              <span className="text-cyan">0{index + 1}.</span> {link.name}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono border border-cyan text-cyan px-4 py-2 rounded hover:bg-cyan/10 transition-colors duration-300">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cyan focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-light-navy`}>
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link, index) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lightest-slate hover:text-cyan transition-colors duration-300 font-mono text-lg">
              <span className="text-cyan">0{index + 1}.</span> {link.name}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono border border-cyan text-cyan px-6 py-3 rounded hover:bg-cyan/10 transition-colors duration-300 text-lg">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
