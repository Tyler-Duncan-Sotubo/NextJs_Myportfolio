import { NavData, IProjects } from "@/lib/interface";
import {
  FaPhp,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGitSquare,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiAmazonaws,
  SiJquery,
  SiExpress,
  SiSwagger,
  SiOpenapiinitiative,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiAwsamplify,
} from "react-icons/si";

export const Lang = [
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Python", icon: <SiPython /> },
];

export const Frameworks = [
  { name: "React", icon: <FaReact /> },
  { name: "Next Js", icon: <SiNextdotjs /> },
  { name: "Express Js", icon: <SiExpress /> },
  { name: "Node Js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "Redux", icon: <SiRedux /> },
];

export const others = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <FaGitSquare /> },
  { name: "Amazon S3", icon: <SiAmazonaws /> },
  { name: "Amazon Amplify", icon: <SiAwsamplify /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "OpenAPI", icon: <SiOpenapiinitiative /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
];

export const navData: NavData[] = [
  { name: "Home", path: "hero" },
  { name: "about me", path: "about" },
  { name: "Curriculum Vitae", path: "stack" },
  { name: "My projects", path: "projects" },
  { name: "contact", path: "contact" },
];

export const AboutData = [
  { name: "about", path: "about" },
  { name: "experience", path: "stack" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

export const experience = [
  {
    company: "Freelance",
    role: "Full Stack Engineer",
    date: "June 2024 – present",
    desc: ``,
    objectives: [
      "Developed an AI-powered icon generator web app integrating OpenAI to create custom icons using carefully crafted prompts. Delivered a seamless and efficient user experience with optimized workflows.",
      "Built the app using the T3 Stack (Next.js, NextAuth, Prisma, Tailwind CSS, and tRPC) with PostgreSQL as the database. Implemented OAuth for authentication, stored generated images in an S3 bucket, and deployed the app on Amazon Amplify for scalability.",
    ],
  },
  {
    company: "tooXclusive",
    role: "Full Stack Engineer(Node JS & React)",
    date: "June 2022 – May 2024",
    desc: ``,
    objectives: [
      "Developed a customized Music Distribution Web Application, focusing on a user-friendly interface and a robust Node.js backend. Implemented advanced features like real-time notifications and secure user authentication with MongoDB.",
      "Built and deployed Next.js web apps optimized for responsiveness and user experience, ensuring seamless interactions and enhanced security. Integrated MongoDB for backend support, delivering a reliable and interactive platform.",
      "Led the development of web apps and backend microservices for 50+ local businesses. The white-label solution included features such as event registration, e-commerce, news feeds, and sponsor management, enhancing the businesses' digital presence.",
      "We used the Nest.js framework within a Node.js environment, deploying the application to Google Kubernetes Engine (GKE). This setup provided scalable and reliable infrastructure through Kubernetes' powerful orchestration tools",
    ],
  },
  {
    company: "Avida LLC",
    role: "Web Developer (React)",
    date: "Jan 2019 - November 2021",
    desc: ``,
    objectives: [
      "Developed dynamic web applications using React.js, leveraging React hooks for state management, integrating RESTful APIs, and collaborating with senior developers to deliver high-quality solutions.",
      "Designed and implemented user-friendly interfaces, enhancing application performance and responsiveness, and employing modern best practices for component-based architecture and state management.",
      "Contributed to building and customizing WordPress websites, implementing themes and plugins, and supporting troubleshooting, site performance optimization, and mobile responsiveness.",
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
