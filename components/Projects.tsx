
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate flex items-center mb-10 w-full">
        <span className="text-xl md:text-2xl text-cyan font-mono mr-4">0{number}.</span>
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
    </h2>
);

const ProjectCard: React.FC<{ project: Project; isFeatured: boolean; index: number }> = ({ project, isFeatured, index }) => {
    const isOdd = index % 2 !== 0;

    if (isFeatured) {
        return (
            <div className="grid grid-cols-12 gap-4 items-center mb-16">
                <div className={`relative col-span-12 md:col-span-7 ${isOdd ? 'md:order-last' : ''}`}>
                    <a href={project.liveUrl || project.sourceUrl || '#'} target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="absolute inset-0 bg-cyan/40 rounded-md z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                        <img src={project.imageUrl} alt={project.title} className="rounded-md w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"/>
                    </a>
                </div>
                <div className={`col-span-12 md:col-span-5 z-20 ${isOdd ? 'text-left md:text-right' : 'text-left'}`}>
                    <p className="text-cyan font-mono text-sm">Featured Project</p>
                    <h3 className="text-2xl font-bold text-lightest-slate mb-4 hover:text-cyan transition-colors">
                        <a href={project.liveUrl || project.sourceUrl || '#'} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    </h3>
                    <div className="bg-light-navy p-6 rounded-md shadow-lg mb-4">
                        <p className="text-slate">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-light-slate mb-4 ${isOdd ? 'justify-end' : 'justify-start'}`}>
                        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className={`flex items-center gap-4 ${isOdd ? 'justify-end' : 'justify-start'}`}>
                        {project.sourceUrl && (
                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors">
                                <GitHubIcon className="w-6 h-6" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-cyan transition-colors">
                                <ExternalLinkIcon className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    
    // Non-featured project card style could be added here for more projects
    return null;
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle number="3" title="Things I've Built" />
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} isFeatured={true} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
