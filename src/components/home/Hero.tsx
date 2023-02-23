import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaTwitter,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-44 text-primary bg">
      <div className="flex gap-10">
        <FaGithub className=" text-accent text-4xl" />
        <FaLinkedin className=" text-accent text-4xl" />
        <FaCodepen className=" text-accent text-4xl" />
        <FaTwitter className=" text-accent text-4xl" />
      </div>
      <div className="flex flex-col w-1/2 items-center gap-72">
        <div className="mt-12">
          <h2 className=" text-4xl text-center font-medium">
            CS graduate and Adept Front-End developer, Focusing On Mobile-First
            Development
          </h2>
          <p className="mt-2 text-center">
            I love working with{" "}
            <span className=" text-accent font-medium">React JS</span> ,
            <span className=" text-accent font-medium ml-1">Next JS</span> for
            Better SEO and
            <span className=" text-accent font-medium ml-1">Tailwind</span> for
            CSS
          </p>
        </div>
        <FaArrowDown className="text-accent text-2xl" />
      </div>
    </section>
  );
};

export default Hero;
