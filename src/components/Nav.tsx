/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import { navData } from "@/data/data";
import { Link as Scroll } from "react-scroll/modules";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

export const Nav = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <nav className="md:flex flex-row justify-end  mt-10 text-skin-dark gap-10 hidden mx-auto lg:w-[70%]">
        {navData.map((item, index: any) => {
          return (
            <Link key={index} href={item.path}>
              <li className="mt-6 capitalize font-Inter md:text-lg text-skin-dark text-3xl font-regular cursor-pointer list-none">
                <p
                  onClick={() => setActiveIndex(index)}
                  className={`duration-300 hover:text-skin-accent flex items-center gap-2 ${
                    activeIndex === index ? "text-skin-accent" : ""
                  }`}>
                  {item.icon}
                  {item.name}
                </p>
              </li>
            </Link>
          );
        })}
      </nav>
      <nav
        className={`flex md:hidden justify-between items-center bg-skin-background w-[90%] mx-auto lg:w-[80%] py-16 md:text-sm text-skin-primary font-Inter absolute top-0  
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
          className={`fixed duration-300 shadow-lg bg-white cursor-pointer top-0 px-10 py-20 z-[9998] h-[500px] w-full  
        md:top-6 md:hidden
        ${isOpen ? "right-0 md:right-16" : "right-[-400px] opacity-0"}`}>
          {navData.map((item, index: any) => {
            return (
              <Link key={index} href={item.path}>
                <li className="mt-6 capitalize font-Inter md:text-lg text-black text-3xl font-regular cursor-pointer list-none">
                  <p
                    onClick={() => setActiveIndex(index)}
                    className={`duration-300 hover:text-skin-accent flex items-center gap-2 ${
                      activeIndex === index ? "text-skin-accent" : ""
                    }`}>
                    {item.icon}
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
