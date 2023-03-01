import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface NavData {
  name: string;
  path: string;
}

const navData: NavData[] = [
  { name: "about", path: "/" },
  { name: "projects", path: "/#projects" },
  { name: "Skills", path: "/" },
  { name: "contact", path: "/" },
];

const Nav = () => {
  const [color, setColor] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [toggle, setToggle] = useState<boolean>(false);

  const changeNavBarColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarColor);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between  mb-6 md:px-20 px-6 pt-8 md:text-sm text-skin-primary font-medium sticky top-0 ${
          color ? " bg-skin-primary py-6 z-50 duration-300" : ""
        }`}>
        <p
          className={`text-skin-primary text-xs md:text-sm ${
            color ? "text-skin-background" : ""
          }`}>
          Tyler Duncan Sotubo
        </p>
        <div className="flex gap-10">
          <ul
            className={`hidden md:flex gap-14 capitalize cursor-pointer z-50 text-skin-primary ${
              color ? "text-skin-background" : ""
            }`}>
            {navData.map((item, index: any) => {
              return (
                <li key={index}>
                  <p
                    onClick={() => setActiveIndex(index)}
                    className={`hover:scale-125 duration-300 hover:text-skin-accent ${
                      activeIndex === index ? "text-skin-accent scale-110" : ""
                    }`}>
                    {item.name}
                  </p>
                </li>
              );
            })}
          </ul>
          <motion.div
            onClick={() => setToggle(!toggle)}
            whileHover={{ rotate: ["-360deg", "0deg"] }}
            transition={{
              rotate: {
                duration: 1.8,
                repeat: 1,
              },
            }}>
            <IoSettingsOutline
              size={25}
              className="text-skin-accent cursor-pointer"
            />
          </motion.div>
          {/* <motion.div
            className={` fixed top-20 px-10 py-14 z-50 duration-500 shadow-lg bg-skin-white ${
              toggle ? "right-0" : "right-[-200px]"
            }`}>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </motion.div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
