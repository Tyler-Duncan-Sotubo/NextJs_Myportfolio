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
} from "react-icons/si";

export const Languages = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "PHP", icon: <FaPhp /> },
];

export const frameworks = [
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Express Js", icon: <SiExpress /> },
  { name: "Node Js", icon: <FaNodeJs /> },
];

export const databases = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

export const tools = [
  { name: "Git", icon: <FaGitSquare /> },
  { name: "Amazon S3", icon: <SiAmazonaws /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "OpenAPI", icon: <SiOpenapiinitiative /> },
  { name: "jQuery", icon: <SiJquery /> },
];

export const navData: NavData[] = [
  { name: "about", path: "about" },
  { name: "projects", path: "projects" },
  { name: "blog", path: "blog" },
  { name: "contact", path: "contact" },
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
