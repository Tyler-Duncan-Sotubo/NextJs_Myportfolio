/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import { navData } from "@/data/data";
import { Link } from "react-scroll/modules";
import SocialIcons from "../SocialIcons";

export const Nav = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const removeHamburgerOnScroll = () => {
    if (window.scrollY >= 90) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", removeHamburgerOnScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-skin-background w-[90%] mx-auto lg:w-[80%] py-16 md:text-sm text-skin-primary font-Inter absolute top-0  
         `}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer z-[9999] md:right-24 right-12 fixed ${
            !hamburger || isOpen ? "block" : "hidden md:block"
          }`}>
          <div
            className={`after:content-[''] after:block w-8 h-[3px] bg-skin-accent mb-2 duration-300 relative ${
              isOpen ? "rotate-[-45deg] top-[8px] w-10" : "top-0"
            }`}></div>
          <div
            className={`before:content-[''] before:block w-10 h-[3px] bg-skin-accent mt-2 duration-300 relative ${
              isOpen ? " rotate-[45deg] bottom-[2px]  " : ""
            }`}></div>
        </div>
        <ul
          className={`fixed duration-300 shadow-lg bg-white cursor-pointer top-0 px-10 py-20 z-[9998] h-screen w-full  
        md:top-6 md:max-w-[370px] md:h-[500px]
        ${isOpen ? "right-0 md:right-16" : "right-[-400px] opacity-0"}`}>
          {navData.map((item, index: any) => {
            return (
              <Link
                key={index}
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={() => setIsOpen(false)}>
                <li className="mt-6 capitalize font-Inter md:text-lg text-skin-background text-2xl font-regular ">
                  <p
                    onClick={() => setActiveIndex(index)}
                    className={`duration-300 hover:text-skin-accent ${
                      activeIndex === index ? "text-skin-accent" : ""
                    }`}>
                    {item.name}
                  </p>
                </li>
              </Link>
            );
          })}
          <div className="mt-20">
            <SocialIcons size="text-2xl" />
          </div>
        </ul>
      </nav>
    </>
  );
};
