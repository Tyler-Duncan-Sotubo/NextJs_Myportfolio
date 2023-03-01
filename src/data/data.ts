import croydon from "/assets/img/projects/croydon1.png";
import plug from "/assets/img/projects/plug.png";
import app from "/assets/img/projects/MusicApp.png";
import { StaticImageData } from "next/image";
import css from "/assets/img/skills/css3.svg";
import express from "/assets/img/skills/express.svg";
import html from "/assets/img/skills/html5.svg";
import javascript from "/assets/img/skills/javascript.svg";
import typescript from "/assets/img/skills/typescript.svg";
import mongo from "/assets/img/skills/mongodb.svg";
import next from "/assets/img/skills/nextjs.svg";
import react from "/assets/img/skills/react.svg";
import redux from "/assets/img/skills/redux.svg";
import tailwind from "/assets/img/skills/tailwind.svg";
import nodejs from "/assets/img/skills/nodejs.svg";
import jest from "/assets/img/skills/jest.svg";

interface IProjects {
  name: string;
  img: string;
  desc: string;
  source: string;
  web: string;
  tech: any;
}

interface ISkills {
  name: string;
  img: string;
}

export const projectData: IProjects[] = [
  {
    name: "Croydon Ecommerce",
    img: "/assets/img/projects/croydon1.png",
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
    img: "/assets/img/projects/plug.png",
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
    img: "/assets/img/projects/MusicApp.png",
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
