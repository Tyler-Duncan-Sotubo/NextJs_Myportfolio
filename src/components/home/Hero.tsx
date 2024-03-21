/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialIcons from "../common/SocialIcons";
import { SlMouse } from "react-icons/sl";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="text-skin-primary flex items-center 2xl font-Inter xl:pb-32 h-screen">
      <div className="relative mt-16 w-[90%] mx-auto lg:w-[80%] flex flex-col gap-4">
        <div className=" max-w-3xl flex flex-col gap-7">
          <p className="text-skin-accent tracking-widest">Hi, my name is</p>
          <h1 className="text-2xl md:text-6xl leading-20 capitalize text-skin-dark tracking-wide font-bold">
            Tyler Duncan Sotubo
          </h1>
          <h2 className="text-2xl md:text-5xl leading-20 capitalize text-skin-secondary tracking-wide font-semiBold">
            Full Stack Engineer
          </h2>
          <p className="text-lg tracking-wider leading-relaxed w-[70%]">
            I am a full stack engineer based in London specializing in building
            exceptional digital experiences.
          </p>
          <SocialIcons size="text-3xl" />
        </div>
      </div>
    </section>
  );
};
