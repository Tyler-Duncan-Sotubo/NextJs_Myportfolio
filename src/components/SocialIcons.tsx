import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = [
  { icon: <FaGithub />, path: "https://github.com/Tyler-Duncan-Sotubo/" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tyler-duncan-sotubo-b2372724a/",
  },
  { icon: <FaCodepen />, path: "https://codepen.io/tyler-wiz" },
  { icon: <FaTwitter />, path: "/" },
];

interface Props {
  size: string;
}
export default function SocialIcons({ size }: Props) {
  return (
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
            className={`list-none text-skin-secondary ${size} cursor-pointer hover:text-skin-dark`}>
            {item.icon}
          </motion.li>
        </Link>
      ))}
    </motion.div>
  );
}
