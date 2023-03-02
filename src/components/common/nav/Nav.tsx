import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { navData } from "@/data/data";

export const Nav = () => {
  const [color, setColor] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [toggle, setToggle] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className={`flex justify-between md:px-20 px-6 py-8 md:text-sm text-skin-primary items-center font-medium sticky top-0  ${
          color
            ? " bg-skin-primary py-6 z-40 duration-300"
            : "bg-skin-background"
        }`}>
        <p
          className={`text-skin-primary text-md md:text-sm ${
            color ? "text-skin-background" : ""
          }`}>
          Tyler Duncan Sotubo
        </p>
        <div className="flex md:gap-10 gap-6 items-center">
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
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative md:hidden">
            <div
              className={`after:content-[''] after:block w-6 h-[2px] bg-orange-700 mb-2 duration-700 relative ${
                isOpen ? "rotate-[-45deg] top-[8px]" : "top-0"
              } ${color && " bg-gray-200"}`}></div>
            <div
              className={`before:content-[''] before:block w-6 h-[2px] bg-orange-700 mt-2 duration-700 relative ${
                isOpen ? " rotate-[45deg] bottom-[2px] " : ""
              } ${color && " bg-gray-200"}`}></div>
          </div>
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
      <ul
        className={`fixed md:hidden px-10 py-10 z-[9999] h-1/3 w-full duration-700 shadow-lg bg-skin-white cursor-pointer bg-skin-light ${
          isOpen ? "right-0" : "right-[-400px] opacity-0"
        }`}>
        {navData.map((item, index: any) => {
          return (
            <li key={index} className="mt-5 text-center uppercase font-bold">
              <p
                onClick={() => setActiveIndex(index)}
                className={`duration-300 hover:text-skin-accent ${
                  activeIndex === index ? "text-skin-accent" : ""
                }`}>
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
