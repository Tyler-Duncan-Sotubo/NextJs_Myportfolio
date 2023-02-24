import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface NavData {
  name: string;
  path: string;
}

const navData: NavData[] = [
  { name: "about", path: "/" },
  { name: "projects", path: "/" },
  { name: "blog", path: "/" },
  { name: "contact", path: "/" },
];

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between md:px-20 px-6 pt-8 md:text-sm text-primary font-medium">
        <p className=" text-xs md:text-sm">Tyler Duncan Sotubo</p>
        <div className="flex gap-10">
          <ul className="hidden md:flex gap-14 capitalize cursor-pointer">
            {navData.map((item, index) => {
              return (
                <li key={index}>
                  <motion.p whileHover={{ color: "#D6532B", scale: 1.1 }}>
                    {item.name}
                  </motion.p>
                </li>
              );
            })}
          </ul>
          <motion.div
            whileHover={{ rotate: ["-360deg", "0deg"] }}
            transition={{
              rotate: {
                duration: 1.8,
                repeat: 1,
              },
            }}>
            <IoSettingsOutline
              size={25}
              className="text-accent cursor-pointer"
            />
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
