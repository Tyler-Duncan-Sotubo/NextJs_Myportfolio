/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaTwitter,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import circle from "@/assets/img/circle.png";
import Image from "next/image";

const icons = [
  { icon: <FaGithub /> },
  { icon: <FaLinkedin /> },
  { icon: <FaCodepen /> },
  { icon: <FaTwitter /> },
];

const arrowTransition = {
  duration: 2,
  repeatType: "reverse",
  repeat: Infinity,
  ease: "easeInOut",
};

const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-44 text-primary relative">
      <motion.div
        animate={{ scale: 3 }}
        transition={{ scale: arrowTransition }}
        className="absolute top-16 right-[30%] w-2 h-2">
        <Image src={circle} alt="" fill />
      </motion.div>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-10">
        {icons.map((item, index) => (
          <motion.li
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="list-none text-accent text-4xl cursor-pointer"
            key={index}>
            {item.icon}
          </motion.li>
        ))}
      </motion.div>
      <div className="flex flex-col w-3/4 items-center gap-64 z-50">
        <div className="mt-12">
          <h2 className=" text-5xl text-center font-medium leading-20 capitalize">
            CS graduate and Adept Front-End developer, Focusing On Mobile-First
            Development
          </h2>
          <p className="mt-4 text-center">
            I love working with
            <span className=" text-accent font-medium ml-1">React JS</span>,
            <span className=" text-accent font-medium ml-1">Next JS</span> for
            Better SEO and
            <span className=" text-accent font-medium ml-1">Tailwind</span> for
            CSS
          </p>
        </div>
        <motion.div
          animate={{ y: ["10px", "-10px", "10px"] }}
          transition={{ y: arrowTransition }}>
          <FaArrowDown className="text-accent text-3xl" />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: 140 }}
        initial={{ y: 1000 }}
        transition={{ delay: 0.1, duration: 1.3 }}
        className=" bg-heroBackground w-full h-[425px] absolute">
        &nbsp;
      </motion.div>
    </section>
  );
};

export default Hero;
