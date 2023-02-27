import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

interface NavData {
  name: string;
  path: string;
}

const themeSliderVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
};

const navData: NavData[] = [
  { name: "about", path: "/" },
  { name: "projects", path: "/#projects" },
  { name: "blog", path: "/" },
  { name: "contact", path: "/" },
];

const Nav = () => {
  const [color, setColor] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [toggle, setToggle] = useState<boolean>(false);

  const control = useAnimation();

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
        className={`flex justify-between  mb-6 md:px-20 px-6 pt-8 md:text-sm text-primary font-medium sticky top-0 ${
          color ? "bg-primary py-6 z-50 duration-300" : ""
        }`}>
        <p
          className={`text-primary text-xs md:text-sm ${
            color ? "text-background" : ""
          }`}>
          Tyler Duncan Sotubo
        </p>
        <div className="flex gap-10">
          <ul
            className={`hidden md:flex gap-14 capitalize cursor-pointer z-50 text-primary ${
              color ? "text-background" : ""
            }`}>
            {navData.map((item, index: any) => {
              return (
                <li key={index}>
                  <p
                    onClick={() => setActiveIndex(index)}
                    className={`hover:scale-125 duration-300 hover:text-accent ${
                      activeIndex === index ? "text-accent scale-110" : ""
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
              className="text-accent cursor-pointer"
            />
          </motion.div>
          <motion.div
            className={` fixed top-16 px-10 py-14 z-50 duration-500 shadow-lg bg-white ${
              toggle ? "right-0" : "right-[-200px]"
            }`}>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
