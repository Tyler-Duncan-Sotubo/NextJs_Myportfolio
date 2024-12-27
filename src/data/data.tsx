import { NavData, IProjects } from "@/lib/interface";
import { FaGithub, FaHome, FaBook } from "react-icons/fa";
// data.js

// Programming Languages
export const Lang = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Python" },
];

// Libraries & Frameworks
export const Frameworks = [
  { name: "React" },
  { name: "React Native" },
  { name: "Redux" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "jQuery" },
];

// Others
export const Others = [
  { name: "Docker" },
  { name: "AWS" },
  { name: "GitHub" },
  { name: "Kubernetes" },
  { name: "Jenkins" },
];

export const database = [
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Redis" },
];

// Skills Data
export const skills = [
  { name: "Web and Software Development" },
  { name: "Shell Scripting and Automation" },
  { name: "Public key infrastructure and cryptography" },
  { name: "Financial Services" },
  { name: "Strong grasp of Blockchain ecosystem" },
  {
    name: "Advanced critical thinker with strong problem solving capablilites",
  },
  { name: "Windows and Linux system administration" },
  { name: "Data analysis and Databases" },
  { name: "Asynchronous Programming" },
  { name: "Microservices" },
  { name: "RESTful HTTP web services" },
  { name: "Solution architecture" },
];

export const navData: NavData[] = [
  { name: "Home", path: "/", icon: <FaHome size={25} /> },
  { name: "experience", path: "/resume", icon: <FaBook size={25} /> },
  {
    name: "Github",
    path: "https://github.com/Tyler-Duncan-Sotubo",
    icon: <FaGithub size={25} />,
  },
];

export const AboutData = [
  { name: "Home", path: "" },
  { name: "experience", path: "/resume" },
  { name: "Github", path: "https://github.com/Tyler-Duncan-Sotubo" },
];

export const experience = [
  {
    company: "TechNova Solutions",
    role: "Software Engineer",
    date: "July 2024 – Present",
    desc: "As a Software Engineer at TechNova Solutions, I focused on designing and implementing high-performance, scalable backend systems using Node.js and microservices architecture. My responsibilities included developing RESTful APIs, optimizing service performance, and ensuring seamless integration between components in a distributed environment.",
    objectives: [],
    accomplishments: [],
  },

  {
    company: "Mediareach OMD",
    role: "Lead Software Engineer",
    date: "Sept 2023 - June 2024",
    desc: "",
    objectives: [
      "Spearheaded the design, development, and deployment of multiple full-stack web applications using modern technologies, focusing on scalability, user experience, and operational efficiency.",
      "Designed and developed four full-stack web applications using Node.js, Next.js, and the P.E.R.N. stack, delivering seamless front-end interfaces and robust back-end functionalities.",
      "Engineered scalable backends with Node.js, integrating PostgreSQL for secure and efficient data storage and management.",
    ],
    accomplishments: [
      "Successfully delivered four full-stack web applications, contributing to increased client satisfaction and operational efficiency.",
      "Collaborated with cross-functional teams to deliver projects on time and within budget while ensuring code quality and maintainability.",
      "Demonstrated strong technical expertise, consistently meeting client expectations with scalable, reliable, and maintainable software solutions.",
    ],
  },
  {
    company: "Alat Wema Bank",
    role: "Backend Engineer",
    date: "June 2022 – August 2023",
    desc: "",
    objectives: [
      "Develop and maintain scalable backend services and APIs using Node.js and TypeScript to support Alat Wema Bank's digital banking solutions.",
      "Implement robust security measures, including OAuth 2.0 and JWT authentication, to safeguard sensitive customer data and ensure compliance with banking regulations.",
      "Optimize database performance and ensure data integrity by managing PostgreSQL databases and designing efficient data models.",
    ],
    accomplishments: [
      "Developed and deployed a full-stack AI-powered financial advisory platform, enhancing customer engagement and providing personalized investment insights.",
      "Led the creation of a real-time transaction monitoring system, significantly reducing fraudulent activities and enhancing the bank's security posture.",
      "Implemented CI/CD pipelines that accelerated deployment cycles by 50%, ensuring timely delivery of new features and updates.",
    ],
  },
  {
    company: "tooXclusive Ltd",
    role: "Fullstack Software Developer",
    date: "Mar-2019 - May-2022",
    desc: ``,
    objectives: [
      "Developed a customized Web Applications, focusing on a user-friendly interface and a robust Node.js backend. Implemented advanced features like real-time notifications and secure user authentication with MongoDB.",
      "Built and deployed Next.js web apps optimized for responsiveness and user experience, ensuring seamless interactions and enhanced security. Integrated MongoDB for backend support, delivering a reliable and interactive platform.",
      "We used the Nest.js framework within a Node.js environment, deploying the application to Google Kubernetes Engine (GKE). This setup provided scalable and reliable infrastructure through Kubernetes' powerful orchestration tools",
    ],
    accomplishments: [
      "Developed a full-stack music distribution website with a user-friendly interface and real-time notifications, enhancing the user experience and engagement.",
      "Led the development of web apps and backend microservices for 50+ local businesses, providing a white-label solution with advanced features like event registration and e-commerce.",
      "Developed an innovative customer relationship management software used by the federal government to manage customer loans and complaints which led to 40% reduction in loan defaults.",
    ],
  },
  {
    company: "",
    role: "Freelance Software Developer",
    date: "Jan 2018 - Feb 2019",
    desc: ``,
    objectives: [
      "Implemented an open-source ERP system for clients",
      "Developed and maintained websites for clients, ensuring optimal performance and user experience",
      "leveraging strong understanding of WordPress core to manipulate admin and theme components to deliver quality commercial websites.",
    ],
    accomplishments: [
      "Cleverly managed multiple client domains with an implemented reverse proxy server, ensuring secure and efficient data transfer.",
    ],
  },
];

export const projectData: IProjects[] = [
  {
    name: "AI Icon Generator",
    madeat: "Upwork",
    img: "/assets/img/projects/icon.png",
    desc: `AI Icon Generator is a web application that allows users to generate icons using AI.The web app was built with Next JS and PostgreSQL for the database. The AI Model uses OpenAI's DALL-E model to generate icons.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/logo-generator",
    web: "https://iconaistudio.com/",
    tech: [
      { name: "Typescript" },
      { name: "Next JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Tailwind CSS" },
      { name: "OpenAI" },
      { name: "NextAuth" },
      { name: "tRPC" },
      { name: "Prisma" },
    ],
  },
  {
    name: "We Plug Music",
    madeat: "tooXclusive",
    img: "/assets/img/projects/weplug.png",
    desc: `Full Stack Music Distribution website built using the Node Js, NestJS framework, NextJs for Frontend and MongoDB for the database. 
    The website allows artists to upload their music and get paid for streams and downloads.
    The Artist Dashboard allows artists to view their earnings and analytics.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://weplugmusic.com/",
    tech: [
      { name: "Typescript" },
      { name: "Nest JS" },
      { name: "Next JS" },
      { name: "Mongo DB" },
      { name: "Amazon S3 Bucket" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Smirnoff Party",
    madeat: "MediareachOMD Nigeria",
    img: "/assets/img/projects/Smirnoff2024.png",
    desc: `Global Client Smirnoff's project for the Smirnoff Party Campaign. The website was built using the T3 Stack.The website focus was to allow users to register for the party with email address and instagram handle.Registered users are stored in a PostgreSQL database and QR code generated for entry and Welcome Email sent with SendGrid`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://weplugmusic.com/",
    tech: [
      { name: "Typescript" },
      { name: "Next JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Tailwind CSS" },
      { name: "OpenAI" },
      { name: "NextAuth" },
      { name: "tRPC" },
      { name: "Prisma" },
    ],
  },

  {
    name: "Gazetteer App",
    madeat: "IT Career Switch",
    img: "/assets/img/projects/gazet.png",
    desc: `Gazetteer, a mobile first web application that allows users to search for a location and get information about the location. 
    It provides information about the location, weather, and nearby places of interest. 
    The app was built using HTML, PHP, jQuery/AJAX, Leaflet, Bootstrap, and APIs.`,
    source:
      "https://github.com/Tyler-Duncan-Sotubo/tylerDuncan/tree/main/project1",
    web: "https://tylersotubo.co.uk/gazetteer/",
    tech: [
      { name: "HTML" },
      { name: "PHP" },
      { name: "jQuery/AJAX" },
      { name: "Leaflet" },
      { name: "Bootstrap" },
      { name: "APIs" },
    ],
  },
  {
    name: "Company Directory",
    madeat: "IT Career Switch",
    img: "/assets/img/projects/company.png",
    desc: `Company Directory, a mobile first web application that allows users access to the database to add, edit, delete data.it allows users to search or filter company information within the database.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Company-Directory",
    web: "https://tylersotubo.co.uk/company/",
    tech: [
      { name: "HTML" },
      { name: "PHP" },
      { name: "jQuery/AJAX" },
      { name: "Bootstrap" },
      { name: "MySQL" },
      { name: "phpMyAdmin" },
    ],
  },
  {
    name: "Sportzy",
    madeat: "tooXclusive",
    img: "/assets/img/projects/sportzy.png",
    desc: `Full Stack Ecommerce website built using the P.E.R.N Stack,
    the client side was built using Next Js and Redux Tool Kit for state management.
    Data is fetched from the backend API built using Express Js and PostgreSQL.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Full-Stack-Ecommerce",
    web: "https://full-stack-ecommerce-sable.vercel.app/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Amazon S3 Bucket" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Lyrics Plug",
    madeat: "tooXclusive",
    img: "/assets/img/projects/plug.png",
    desc: `This is a lyrics website, built using the M.E.R.N Stack, 
    Data is fetched from the backend API built using Express Js and MongoDB. 
    Client and Admin side are built using Next Js and Redux Tool Kit for state management.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Lyrics-App",
    web: "https://absorbing-stone-production.up.railway.app/",
    tech: [
      { name: "Express JS" },
      { name: "Mongo DB" },
      { name: "Cloudinary" },
      { name: "Typescript" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Smirnoff Party",
    madeat: "MediareachOMD Nigeria",
    img: "/assets/img/projects/NoknownAddress.png",
    desc: `Global Client Smirnoff's project for the Smirnoff "NoknownAddress" Party Campaign.  
    The website was built using the P.E.R.N Stack.
    The wesbite focus was to allow users to register for the party with email address and instagram handle.
     The backend API was built using Express Js and PostgreSQL.
     Registered users were stored in a PostgreSQL database and Welcome Email sent with NodeMailer`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Smirnoff-party",
    web: "https://smirnoff-party-frontend-production.up.railway.app/",
    tech: [
      { name: "Typescript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Vanilla CSS" },
    ],
  },

  {
    name: "Artists Profile API",
    madeat: "tooXclusive",
    img: "/assets/img/projects/artistApi.png",
    desc: `This is an Open API built using Express Js and PostgreSQL. The project is till in progress.
    The aim is to build an API that can be used by artists to create their profile and share their work.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Artist-Profile-API",
    web: "/",
    tech: [
      { name: "Javascript" },
      { name: "Express JS" },
      { name: "PostgreSQL" },
      { name: "Swagger" },
    ],
  },
  {
    name: "Portfolio Version 1",
    madeat: "Personal Project",
    img: "/assets/img/projects/version1.png",
    desc: `This is the first version of my portfolio website built using Next Js and Tailwind CSS.`,
    source: "https://github.com/Tyler-Duncan-Sotubo/Portfolio-V1",
    web: "https://v1.tylerduncan.dev/",
    tech: [
      { name: "Javascript" },
      { name: "Next Js" },
      { name: "Tailwind CSS" },
    ],
  },
];
