import { NavData, IProjects, ISkills } from "@/lib/interface";

export const navData: NavData[] = [
  { name: "about", path: "about" },
  { name: "projects", path: "projects" },
  { name: "Skills", path: "skills" },
  { name: "contact", path: "contact" },
];

export const projectData: IProjects[] = [
  {
    name: "Croydon Ecommerce",
    img: "/assets/img/projects/croydon1.png",
    desc: "This is a complete and functional ecommerce website, built using the MERN Stack, The goal was to develop a full functional e-commerce website with both client and admin dashboard for easy product upload, update as well as managing users and orders ",
    source: "https://github.com/Tyler-Wiz/nextjs_e-commerce",
    web: "https://github.com/Tyler-Wiz/nextjs_e-commerce",
    tech: [
      { name: "Typescript" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Mongo DB" },
      { name: "Express JS" },
      { name: "React Query" },
      { name: "Tailwind CSS" },
      { name: "S3 Bucket AWS" },
    ],
  },
  {
    name: "Plug Lyrics App",
    img: "/assets/img/projects/plug.png",
    desc: "This is a complete and functional lyrics website, built using the MERN Stack, The goal was to develop a full functional web with both client and admin dashboard for easy lyrics upload, update as well as managing admin users",
    source: "https://github.com/Tyler-Wiz/Lyrics-App",
    web: "https://plug.tooxclusive.com/",
    tech: [
      { name: "Typescript" },
      { name: "Next Js" },
      { name: "Redux Tool Kit" },
      { name: "Mongo DB" },
      { name: "Express JS" },
      { name: "Tailwind CSS" },
      { name: "Cloudinary" },
    ],
  },
  {
    name: "Music App",
    img: "/assets/img/projects/MusicApp.png",
    desc: "Initially built with Expo CLI, then upgraded to the react native CLI, the music app was built with best pratices in mind and the most recent way to work with firebase firestore v9",
    source: "https://github.com/Tyler-Wiz/Music-App-Version-4",
    web: "https://play.google.com/store/apps/details?id=com.tylerappdev.tooXclusive",
    tech: [
      { name: "JavaScript" },
      { name: "React Native" },
      { name: "Firebase" },
    ],
  },
];

export const toolsData: ISkills[] = [
  {
    name: "html",
    img: "/assets/img/skills/html5.svg",
  },
  {
    name: "css",
    img: "/assets/img/skills/css3.svg",
  },
  {
    name: "javascript",
    img: "/assets/img/skills/javascript.svg",
  },
  {
    name: "typescript",
    img: "/assets/img/skills/typescript.svg",
  },
  {
    name: "react",
    img: "/assets/img/skills/react.svg",
  },
  {
    name: "tailwind",
    img: "/assets/img/skills/tailwind.svg",
  },
  {
    name: "express",
    img: "/assets/img/skills/express.svg",
  },

  {
    name: "mongo",
    img: "/assets/img/skills/mongodb.svg",
  },
  {
    name: "next",
    img: "/assets/img/skills/nextjs.svg",
  },

  {
    name: "redux",
    img: "/assets/img/skills/redux.svg",
  },

  {
    name: "nodejs",
    img: "/assets/img/skills/nodejs.svg",
  },
  {
    name: "jest",
    img: "/assets/img/skills/jest.svg",
  },
];
