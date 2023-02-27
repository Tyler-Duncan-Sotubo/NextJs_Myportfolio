import croydon from "@/assets/img/projects/croydon1.png";
import plug from "@/assets/img/projects/plug.png";
import app from "@/assets/img/projects/MusicApp.png";
import { StaticImageData } from "next/image";
import css from "@/assets/img/skills/css3.svg";
import express from "@/assets/img/skills/express.svg";
import html from "@/assets/img/skills/html5.svg";
import javascript from "@/assets/img/skills/javascript.svg";
import typescript from "@/assets/img/skills/typescript.svg";
import mongo from "@/assets/img/skills/mongodb.svg";
import next from "@/assets/img/skills/nextjs.svg";
import react from "@/assets/img/skills/react.svg";
import redux from "@/assets/img/skills/redux.svg";
import tailwind from "@/assets/img/skills/tailwind.svg";
import nodejs from "@/assets/img/skills/nodejs.svg";
import jest from "@/assets/img/skills/jest.svg";

interface IProjects {
  name: string;
  img: StaticImageData;
  desc: string;
  source: string;
  web: string;
  tech: any;
}

interface ISkills {
  name: string;
  img: StaticImageData;
}

export const projectData: IProjects[] = [
  {
    name: "Croydon Ecommerce",
    img: croydon,
    desc: "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
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
    img: plug,
    desc: "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
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
    img: app,
    desc: "I built this project for a client after attending her yoga class. She wanted a WordPress site with a more custom layout so I used an existing WordPress theme and tweaked it with about 500 lines of additional CSS.",
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
    img: html,
  },
  {
    name: "css",
    img: css,
  },
  {
    name: "javascript",
    img: javascript,
  },
  {
    name: "typescript",
    img: typescript,
  },
  {
    name: "react",
    img: react,
  },
  {
    name: "tailwind",
    img: tailwind,
  },
  {
    name: "express",
    img: express,
  },

  {
    name: "mongo",
    img: mongo,
  },
  {
    name: "next",
    img: next,
  },

  {
    name: "redux",
    img: redux,
  },

  {
    name: "nodejs",
    img: nodejs,
  },
  {
    name: "jest",
    img: jest,
  },
];
