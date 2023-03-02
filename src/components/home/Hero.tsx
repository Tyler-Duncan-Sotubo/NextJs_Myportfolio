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

export const Hero = () => {
  return (
    <section className="text-skin-primary py-12 bg-skin-background">
      <div className="flex flex-col items-center relative justify-center mt-36 md:32 px-3 md:px-0">
        <motion.div
          animate={{ scale: 3 }}
          transition={{ scale: arrowTransition }}
          className="absolute top-16 right-[30%] w-2 h-2">
          <Image src="/assets/img/circle.png" alt="" fill />
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
              className="list-none text-skin-accent md:text-4xl text-2xl cursor-pointer"
              key={index}>
              {item.icon}
            </motion.li>
          ))}
        </motion.div>
        <div className="mt-12 max-w-screen-lg">
          <h1 className="text-2xl md:text-5xl text-center font-medium leading-20 capitalize">
            CS graduate and Adept Front-End developer, Focusing On Mobile-First
            Development
          </h1>
          <div className="flex justify-center items-center my-4 gap-5 ">
            <motion.div
              animate={{ rotate: ["-360deg", "0deg"] }}
              transition={{
                rotate: {
                  duration: 3.8,
                  repeat: Infinity,
                },
              }}
              className="relative md:w-4 md:h-4 w-8 h-8 hidden md:block ">
              <Image src="/assets/img/react-colored.svg" alt="" fill />
            </motion.div>
            <p className="text-xs md:text-xl text-center">
              I love working with
              <span className=" text-skin-accent font-medium ml-1">
                React JS
              </span>
              ,
              <span className=" text-skin-accent font-medium ml-1">
                Next JS
              </span>{" "}
              for Better SEO and
              <span className=" text-skin-accent font-medium ml-1 mr-1">
                Tailwind
              </span>
              for CSS
            </p>
          </div>
        </div>
      </div>
      <div className="mt-56 px-20 flex item-center justify-center gap-2">
        <motion.div
          animate={{ y: ["10px", "-10px", "10px"] }}
          transition={{ y: arrowTransition }}>
          <FaArrowDown className="text-skin-accent text-3xl cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};
