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
import Image from "next/image";
import Link from "next/link";

const icons = [
  { icon: <FaGithub />, path: "https://github.com/Tyler-Wiz" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tyler-duncan-sotubo-b2372724a/",
  },
  { icon: <FaCodepen />, path: "https://codepen.io/tyler-wiz" },
  { icon: <FaTwitter />, path: "/" },
];

export const Hero = () => {
  return (
    <section className="text-skin-primary py-12 bg-skin-background 2xl font-Inter xl:pb-32">
      <div className="relative mt-16 w-[90%] mx-auto lg:w-[80%] flex flex-col gap-4">
        <div className="mt-12 max-w-3xl flex flex-col gap-7">
          <p className="text-skin-accent tracking-widest">Hi, my name is</p>
          <h1 className="text-2xl md:text-6xl leading-20 capitalize text-skin-dark tracking-wide font-bold">
            Tyler Duncan Sotubo
          </h1>
          <h2 className="text-2xl md:text-5xl leading-20 capitalize text-skin-secondary tracking-wide font-semiBold">
            Full Stack Engineer
          </h2>
          <p className="text-lg tracking-wider">
            I&apos;m a full stack engineer based in London specializing in
            building exceptional digital experiences. Currently, I&apos;m
            focused on building accessible, human-centered products at
            <span className="text-skin-accent mx-2">
              <a href="">tooXclusive</a>
            </span>
          </p>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-10">
            {icons.map((item, index) => (
              <Link href={item.path} key={index} target="_blank">
                <motion.li
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="list-none text-skin-secondary md:text-4xl text-2xl cursor-pointer hover:text-skin-dark">
                  {item.icon}
                </motion.li>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
