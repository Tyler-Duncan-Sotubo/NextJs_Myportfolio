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
import javascript from "@/assets/img/javascript-colored.svg";
import react from "@/assets/img/react-colored.svg";
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
    <section className="text-primary h-4/5 mt-16">
      <div className="flex flex-col items-center relative justify-center h-4/5">
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
              className="list-none text-accent md:text-4xl text-2xl cursor-pointer"
              key={index}>
              {item.icon}
            </motion.li>
          ))}
        </motion.div>
        <div className="mt-12 w-3/4">
          <h2 className=" text-2xl md:text-5xl text-center font-medium leading-20 capitalize">
            CS graduate and Adept Front-End developer, Focusing On Mobile-First
            Development
          </h2>
          <div className="flex justify-center items-center mt-4 gap-5">
            <motion.div
              animate={{ rotate: ["-360deg", "0deg"] }}
              transition={{
                rotate: {
                  duration: 3.8,
                  repeat: Infinity,
                },
              }}
              className="relative md:w-4 md:h-4 w-8 h-8">
              <Image src={react} alt="" fill />
            </motion.div>
            <p className="text-sm md:text-xl text-center">
              I love working with
              <span className=" text-accent font-medium ml-1">React JS</span>,
              <span className=" text-accent font-medium ml-1">Next JS</span> for
              Better SEO and
              <span className=" text-accent font-medium ml-1">
                Tailwind
              </span>{" "}
              for CSS
            </p>
            <motion.div
              animate={{ scale: 2 }}
              transition={{ scale: arrowTransition }}
              className="relative md:w-2 md:h-2 w-3 h-3">
              <Image src={javascript} alt="" fill />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: ["10px", "-10px", "10px"] }}
        transition={{ y: arrowTransition }}
        className="mt-16 flex justify-center">
        <FaArrowDown className="text-accent text-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
