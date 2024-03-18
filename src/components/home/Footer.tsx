import React from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
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

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 items-center justify-between py-28 bg-skin-background w-full">
      <div className="w-[90%] mx-auto lg:w-[80%] flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex gap-5 items-center">
          {icons.map((item, index) => (
            <Link href={item.path} key={index} target="_blank">
              <motion.li
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="list-none text-skin-accent md:text-4xl text-4xl cursor-pointer">
                {item.icon}
              </motion.li>
            </Link>
          ))}
        </div>
        <p className="text-lg text-skin-primary text-center md:w-[45%] tracking-wide">
          Designed in <span className="px-1 text-skin-accent">Figma</span> coded
          in
          <span className="px-1 text-skin-accent">Visual Studio Code</span> by
          me. Built with <span></span>Next.js and{" "}
          <span className="px-1 text-skin-accent">Tailwind</span>
          CSS, deployed with
          <span className="px-1 text-skin-accent">Netlify</span>. All text is
          set in the Inter typeface.
        </p>
      </div>
    </footer>
  );
};
