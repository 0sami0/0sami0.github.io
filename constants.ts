import { Project, Experience } from './types';

interface ContentData {
  navLinks: { name: string; id: string }[];
  header: { resume: string };
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    email: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
  skills: string[];
  hero: {
    greeting: string;
    headline: string;
    subheadline: string;
    intro: string;
    button: string;
  };
  about: {
    title: string;
    techIntro: string;
  };
  experience: {
    title: string;
    experiences: Experience[];
  };
  projects: {
    title: string;
    featured: string;
    projects: Project[];
  };
  contact: {
    preTitle: string;
    title: string;
    paragraph: string;
    button: string;
  };
  footer: {
    credit: string;
  };
}

const enData: ContentData = {
  navLinks: [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ],
  header: { resume: 'Resume' },
  personalInfo: {
    name: "Alex Bryant",
    title: "Senior Frontend Engineer",
    bio: "I'm a frontend engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Innovate Inc. With over 8 years of experience in the field, I have a deep passion for modern web technologies and a keen eye for design. I thrive on turning complex problems into beautiful, intuitive, and performant user interfaces.",
    email: "alex.bryant.dev@email.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },
  skills: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "Figma", "Firebase", "AWS"],
  hero: {
    greeting: "Hi, my name is",
    headline: "Alex Bryant.",
    subheadline: "I build things for the web.",
    intro: "I'm a senior frontend engineer specializing in crafting performant, accessible, and beautiful web applications. I love bringing ideas to life with code.",
    button: "Get In Touch",
  },
  about: {
    title: "About Me",
    techIntro: "Here are a few technologies I've been working with recently:",
  },
  experience: {
    title: "Where I've Worked",
    experiences: [
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
    ],
  },
  projects: {
    title: "Things I've Built",
    featured: "Featured Project",
    projects: [
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
    ],
  },
  contact: {
    preTitle: "04. What's Next?",
    title: "Get In Touch",
    paragraph: "I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!",
    button: "Say Hello",
  },
  footer: {
    credit: "Designed & Built by Alex Bryant",
  },
};

const frData: ContentData = {
  navLinks: [
    { name: 'À propos', id: 'about' },
    { name: 'Expérience', id: 'experience' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ],
  header: { resume: 'CV' },
  personalInfo: {
    name: "Alex Bryant",
    title: "Ingénieur Frontend Senior",
    bio: "Je suis un ingénieur frontend spécialisé dans la création d'expériences numériques exceptionnelles. Actuellement, je me concentre sur la création de produits accessibles et centrés sur l'humain chez Innovate Inc. Avec plus de 8 ans d'expérience, j'ai une passion pour les technologies web modernes et un œil pour le design. J'aime transformer des problèmes complexes en interfaces utilisateur belles, intuitives et performantes.",
    email: "alex.bryant.dev@email.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },
  skills: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "Figma", "Firebase", "AWS"],
  hero: {
    greeting: "Bonjour, je m'appelle",
    headline: "Alex Bryant.",
    subheadline: "Je construis des choses pour le web.",
    intro: "Je suis un ingénieur frontend senior spécialisé dans la création d'applications web performantes, accessibles et esthétiques. J'adore donner vie aux idées avec du code.",
    button: "Contactez-moi",
  },
  about: {
    title: "À propos de moi",
    techIntro: "Voici quelques technologies avec lesquelles j'ai travaillé récemment :",
  },
  experience: {
    title: "Où j'ai travaillé",
    experiences: [
      {
        role: "Ingénieur Frontend Senior",
        company: "Innovate Inc.",
        period: "2020 - Aujourd'hui",
        description: [
          "Dirigé le développement d'un nouveau système de design, améliorant la réutilisation des composants et la vitesse de développement de 30%.",
          "Conçu et construit le frontend d'un produit phare, utilisé par plus d'un million d'utilisateurs.",
          "Encadré les ingénieurs juniors, effectué des revues de code et promu les meilleures pratiques en React et TypeScript.",
        ],
      },
      {
        role: "Développeur Frontend",
        company: "Tech Solutions",
        period: "2017 - 2020",
        description: [
          "Développé et maintenu des fonctionnalités pour une application SaaS à grande échelle en utilisant React et Redux.",
          "Collaboré avec les designers UI/UX pour traduire les maquettes en code responsive de haute qualité.",
          "Amélioré les performances de l'application de 20% grâce aux techniques de code splitting et de chargement différé.",
        ],
      },
      {
        role: "Développeur Web",
        company: "Creative Agency",
        period: "2015 - 2017",
        description: [
          "Créé des thèmes et plugins WordPress personnalisés pour une clientèle variée.",
          "Travaillé en étroite collaboration avec les clients pour recueillir les besoins et livrer les projets à temps et dans le respect du budget.",
          "Acquis une expérience fondamentale en HTML, CSS, JavaScript et PHP.",
        ],
      },
    ],
  },
  projects: {
    title: "Mes réalisations",
    featured: "Projet en vedette",
    projects: [
      {
        title: "Projet Alpha",
        description: "Une application web complète pour la gestion de l'analyse de données d'entreprise. Comprend un tableau de bord dynamique, une visualisation de données en temps réel et un système d'authentification robuste.",
        tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
        imageUrl: "https://picsum.photos/seed/alpha/600/400",
        liveUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Projet Beta",
        description: "Une plateforme e-commerce axée sur l'expérience utilisateur et la performance. Intégrée avec Stripe pour les paiements et construite avec un CMS headless pour une gestion de contenu facile.",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "GraphQL", "Vercel"],
        imageUrl: "https://picsum.photos/seed/beta/600/400",
        liveUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Projet Gamma",
        description: "Un éditeur de documents collaboratif en temps réel inspiré de Google Docs, construit avec WebSockets pour une interaction multi-utilisateurs fluide et une interface utilisateur épurée.",
        tags: ["React", "Firebase", "WebSockets", "TipTap"],
        imageUrl: "https://picsum.photos/seed/gamma/600/400",
        liveUrl: "#",
      },
    ],
  },
  contact: {
    preTitle: "04. Et après ?",
    title: "Contactez-moi",
    paragraph: "Je suis actuellement ouvert à de nouvelles opportunités et ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
    button: "Dites bonjour",
  },
  footer: {
    credit: "Conçu et réalisé par Alex Bryant",
  },
};

export const content = {
  en: enData,
  fr: frData,
};
