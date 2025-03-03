import React, { FC } from "react";
import { ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  color: string;
  icon?: ReactElement | string;
};

const Button: FC<Props> = ({ name, color, icon }) => {
  return (
    <motion.button
      data-testid="buttonComponent"
      initial={{ y: 5 }}
      whileHover={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 items-center md:text-xl text-xs text-skin-dark px-10 py-6 rounded-full font-bold uppercase ${color}`}>
      {icon}
      {name}
    </motion.button>
  );
};

export default Button;
