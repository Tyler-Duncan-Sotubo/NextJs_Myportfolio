import { NavData, IProjects } from "@/lib/interface";
import {
  FaPhp,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGitSquare,
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
} from "react-icons/si";

export const core = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
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
    company: "IT Career Switch, UK",
    role: "Full Stack Engineer (Traineeship Program)",
    date: "2023 - 2024",
    desc: `During my time at IT Career Switch, I learnt the fundamentals of web development, building full-stack applications, 
    and deploying them to the cloud. I strengthened my skills in development and problem-solving by working on real-world projects.`,
    objectives: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Optimize application for maximum speed and scalability",
      "You can check out my projects down below",
    ],
  },
  {
    company: "tooXclusive",
    role: "Frontend Developer",
    date: "2022 - 2023",
    desc: `Worked with a team of developers to redesign the wordpress theme of the company's website powered by PHP and MySQL.`,
    objectives: [
      "Crafted a solid design system to enforce consistency across the application.",
      "Introduced and enforced a consistent coding style across the application.",
      "Optimize application for maximum speed and scalability",
      "Assure that all user input is validated before submitting to back-end",
    ],
  },
  {
    company: "tooXclusive",
    role: "Music Blogger",
    date: "2019 - 2022",
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
    name: "Lyrics Plug",
    img: "/assets/img/projects/plug.png",
    desc: `This is a lyrics website, built using the M.E.R.N Stack, 
    Data is fetched from the backend API built using Express Js and MongoDB. 
    Client and Admin side are built using Next Js and Redux Tool Kit for state management.
    Admin can upload, edit and delete songs from the admin dashboard.
    Songs are uploaded to Cloudinary and stored in a MongoDB database.`,
    source: "https://github.com/Tyler-Wiz/Lyrics-App",
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
    name: "Sportzy",
    img: "/assets/img/projects/sportzy.png",
    desc: `Full Stack Ecommerce website built using the P.E.R.N Stack,
    the client side was built using Next Js and Redux Tool Kit for state management.
    Data is fetched from the backend API built using Express Js and PostgreSQL, Product images are stored in an Amazon S3 Bucket.`,
    source: "https://github.com/Tyler-Wiz/Full-Stack-Ecommerce",
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
    name: "Gazetteer App",
    img: "/assets/img/projects/gazet.png",
    desc: `
  This application is envisaged as a “mobile first“ website that will operate equally well
  on desktop computers. It will provide profiling for all countries
  through the presentation of demographic, climatic, geographical and other data.`,
    source: "https://github.com/Tyler-Wiz/tylerDuncan/tree/main/project1",
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
];
