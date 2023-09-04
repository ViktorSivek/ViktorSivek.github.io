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
    carrent,
    jobit,
    tripguide,
    python,
    sql,
    tableau
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
      title: "Aplikovaná informatika - Bc.",
      company_name: "VŠE",
      icon: vse,
      iconBg: "#383E56",
      date: "2020 - 2023",
      points: [
        "Integrace informačních technologií a podnikových procesů, analýza procesů a informačních systémů.",
        "Řízení projektů a týmů, návrh, realizace a rozvoj softwarových systémů a produktů.",
        "Správa databází, programovací jazyk Java, webové aplikace a technologie, web 2.0.",
        "Bakalářská práce - Datová analýza českého realitního trhu (scrapování, analýza, vizualizace, machine learning).",
      ],
    },
    {
      title: "Cybersecurity platform developer",
      company_name: "PricewaterhouseCoopers",
      icon: pwc,
      iconBg: "#E6DEDD",
      date: "2023 - current",
      points: [
        "Vývoj webové aplikace od základů, od konceptu a návrhu až po nasazení.",
        "Integrování dvou řešení v oblasti kybernetické bezpečnosti, Microsoft Sentinel a Tanium.",
        "Frontend byl navržen s použitím HTML, CSS a JavaScriptu, a to s pomocí frameworků Bootstrap a Tailwind CSS.",
        "Backend byl implementován v Pythonu s využitím frameworku Django, což umožňuje robustní a škálovatelný výkon aplikace.",
        "Autentizace uživatelů pomocí Microsoft Authentication Library, nasazení pomocí Dockeru.",
      ],
    },
    {
      title: "Data a analytika pro business - Mgr.",
      company_name: "VŠE",
      icon: vse,
      iconBg: "#383E56",
      date: "2023 - current",
      points: [
        "Datová analýza a business analýza, analýza nestrukturovaných dat.",
        "Management v oblasti dat a analytiky, reportingová řešení a jejich architektura, informační etika a ochrana osobních údajů.",
        "Dobývání znalostí z databází, umělá inteligence.",
        "Partnerské firmy - KPMG, Škoda Auto, ČSOB.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
];
  
export { technologies, experiences, projects };