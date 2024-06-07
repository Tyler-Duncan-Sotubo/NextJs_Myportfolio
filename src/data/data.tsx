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
} from "react-icons/si";

export const Lang = [
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "PHP", icon: <FaPhp /> },
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
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "OpenAPI", icon: <SiOpenapiinitiative /> },
  { name: "Github", icon: <FaGithub /> },
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
    company: "tooXclusive",
    role: "Full Stack Engineer",
    date: "2023 - present",
    desc: `Worked with a team of developers to build a music lyrics platform using the M.E.R.N Stack. An e-commerce website for selling sports items using the P.E.R.N Stack. And other projects using the M.E.R.N Stack.`,
    objectives: [
      "Orchestrated the adoption of a uniform coding style framework that led to a 20% reduction in post-release defects and a 30% increase in developer collaboration and code readability.",
      "Conducted load testing and fine-tuned codebase to improve application responsiveness; achieved a 45% reduction in latency and facilitated seamless user experience during peak traffic periods.",
      "Developed and executed a robust data validation system that prevented 90% of invalid inputs from reaching the back end, enhancing data integrity",
    ],
  },
  {
    company: "tooXclusive",
    role: "React Developer",
    date: "2021 - 2023",
    desc: `Worked with a team of developers to redesign the wordpress theme of the company's website powered by PHP and MySQL. Worked in a team to Build 3 Apps using the React Native framework.`,
    objectives: [
      "Constructed a cohesive design system that unified visual elements and improved user experience flow, leading to a 50% reduction in bounce rates and a 15% increase in average session duration",
      "Spearheaded a comprehensive application overhaul project resulting in a 50% decrease in server response time, ensuring seamless user experience and supporting a 20% growth in user base",
      "	Championed an initiative to ensure product accessibility and inclusively standards were met; conducted company-wide training sessions and audits, resulting in a 40% increase in customer satisfaction ratings",
    ],
  },
  {
    company: "tooXclusive",
    role: "Music Blogger",
    date: "2018 - 2021",
    desc: `Advanced new posts using promotional emails, advertisements and social media, 
    successfully alerting and attracting over 5k new readers monthly through whiteHat SEO and Link Building.`,
    objectives: [
      "Researched ideas for posts that received high volumes of engagement from target audiences.",
      "Grew audiences and site engagement by 200% within 2 years through unique and trending content.",
      "Enhanced SEO strategy by using keywords relevant to target audiences and building links through other site partners.",
      "Managed the blog's editorial calendar with superb attention to detail, consistently meeting deadlines.",
    ],
  },
];

export const projectData: IProjects[] = [
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
