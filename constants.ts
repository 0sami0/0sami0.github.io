
import { Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Alex Bryant",
  title: "Senior Frontend Engineer",
  bio: "I'm a frontend engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Innovate Inc. With over 8 years of experience in the field, I have a deep passion for modern web technologies and a keen eye for design. I thrive on turning complex problems into beautiful, intuitive, and performant user interfaces.",
  email: "alex.bryant.dev@email.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  }
};

export const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "Figma", "Firebase", "AWS"
];

export const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    description: "A comprehensive web application for managing enterprise-level data analytics. Features a dynamic dashboard, real-time data visualization, and a robust user authentication system.",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/alpha/600/400",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance. Integrated with Stripe for payments and built with a headless CMS for easy content management.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "GraphQL", "Vercel"],
    imageUrl: "https://picsum.photos/seed/beta/600/400",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A collaborative real-time document editor inspired by Google Docs, built with WebSockets for seamless multi-user interaction and a clean, minimalist UI.",
    tags: ["React", "Firebase", "WebSockets", "TipTap"],
    imageUrl: "https://picsum.photos/seed/gamma/600/400",
    liveUrl: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Innovate Inc.",
    period: "2020 - Present",
    description: [
      "Led the development of a new design system, improving component reusability and development speed by 30%.",
      "Architected and built the frontend for a flagship product, serving over 1 million users.",
      "Mentored junior engineers, conducting code reviews and promoting best practices in React and TypeScript.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    period: "2017 - 2020",
    description: [
      "Developed and maintained user-facing features for a large-scale SaaS application using React and Redux.",
      "Collaborated with UI/UX designers to translate wireframes into high-quality, responsive code.",
      "Improved application performance by 20% through code splitting and lazy loading techniques.",
    ],
  },
  {
    role: "Web Developer",
    company: "Creative Agency",
    period: "2015 - 2017",
    description: [
      "Built custom WordPress themes and plugins for a diverse range of clients.",
      "Worked closely with clients to gather requirements and deliver projects on time and within budget.",
      "Gained foundational experience in HTML, CSS, JavaScript, and PHP.",
    ],
  },
];
