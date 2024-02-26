import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    vse,
    pwc,
    python,
    sql,
    tableau,
    ai_doprava,
    bezrealitky,
    store,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Applied Informatics - BSc.",
      company_name: "University of Economics, Prague (VŠE)",
      icon: vse,
      iconBg: "#383E56",
      date: "2020 - 2023",
      points: [
        "Analysis and integration of information technologies and business processes.",
        "Project and team management, design, implementation, and development of software systems and products.",
        "Database management, Java programming language, web applications and technologies, web 2.0.",
        "Bachelor's thesis - Data analysis of the Czech real estate market (scraping, analysis, visualization, machine learning).",
      ],
    },
    {
      title: "Cybersecurity Platform Developer",
      company_name: "PricewaterhouseCoopers",
      icon: pwc,
      iconBg: "#E6DEDD",
      date: "2023 - current",
      points: [
        "Development of a web application from scratch, from concept and design to deployment.",
        "Integration of two cybersecurity solutions, Microsoft Sentinel and Tanium.",
        "Frontend designed using HTML, CSS, and JavaScript, with the help of frameworks Bootstrap and Tailwind CSS.",
        "Backend implemented in Python using the Django framework, enabling robust and scalable application performance.",
        "User authentication with Microsoft Authentication Library, deployment using Docker.",
      ],
    },
    {
      title: "Data and Analytics for Business - MSc.",
      company_name: "University of Economics, Prague (VŠE)",
      icon: vse,
      iconBg: "#383E56",
      date: "2023 - current",
      points: [
        "Data analysis and business analysis, analysis of structured, semi-structured and unstructured data.",
        "Data and analytics management, reporting solutions and their architecture, information ethics, and personal data protection.",
        "Knowledge discovery from databases, artificial intelligence.",
        "Partner companies - KPMG, Škoda Auto, ČSOB.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI Doprava ",
      description:
        "AI Doprava is Next.js project, to provide real-time information from the Czech police api with implemented chatbot. AI Doprava aims to make road information interactive.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ai_doprava,
      source_code_link: "https://github.com/ViktorSivek/ai_chat_demo",
      demo_link: "https://ai-chat-demo-delta.vercel.app/",
      user: "demouser",
      password: "demopassword",
    },
    {
      name: "Bezrealitky Analysis",
      description:
        "Bezrealitky Analysis is my bachelor's thesis focusing on a machine learning analysis of real estate data. The data is scraped from the online platform Bezrealitky.cz.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: bezrealitky,
      source_code_link: "https://github.com/ViktorSivek/Bezrealitky_analysis_app",
      demo_link: "https://colab.research.google.com/drive/1O2qQCN4eIV-nNOV7UG9vyc8XvXUYcrFh?usp=sharing",
      user: "-",
      password: "-",
    },
    {
      name: "Ecommerce Store",
      description:
        "E-commerce store is a modern web application designed for online shopping and efficient management through an admin dashboard.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "shadcn/ui",
          color: "pink-text-gradient",
        },
      ],
      image: store,
      source_code_link: "https://github.com/ViktorSivek/ecommerce_project_store",
      demo_link: "https://ecommerce-project-store-zeta.vercel.app/",
      user: "demouser",
      password: "demopassword",
    },
];
  
export { technologies, experiences, projects };