import React from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  { icon: <FaGithub /> },
  { icon: <FaLinkedin /> },
  { icon: <FaCodepen /> },
  { icon: <FaTwitter /> },
];

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 items-center justify-between px-20 mb-20 mt-40">
      <div className="flex gap-5 items-center">
        {icons.map((item, index) => (
          <motion.li
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="list-none text-skin-accent md:text-xl text-xl cursor-pointer"
            key={index}>
            {item.icon}
          </motion.li>
        ))}
      </div>
      <p className="text-sm text-skin-primary text-center">
        © designed & built by Tyler Duncan Sotubo
      </p>
    </footer>
  );
};
