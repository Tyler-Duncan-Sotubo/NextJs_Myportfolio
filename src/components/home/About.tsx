import { AboutData } from "@/data/data";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll/modules";
import Button from "../common/button";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export const About = () => {
  const [activeIndex, setActiveIndex] = useState<Number>(0);

  return (
    <section id="about" className="font-Inter bg-skin-background md:pb-24">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto lg:w-[80%] justify-between py-8 mt-10 gap-24">
        <div className="md:flex flex-col justify-center gap-7 md:w-[35%] w-full hidden">
          {AboutData.map((item, index) => (
            <Scroll
              key={index}
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-60}
              duration={700}>
              <div
                key={index}
                className="flex flex-row items-center gap-4 cursor-pointer group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                onClick={() => setActiveIndex(index)}>
                <div
                  className={`content-[''] block w-28 h-[3px] duration-300 relative hover:w-32 ${
                    activeIndex === index
                      ? "w-32 bg-skin-accent"
                      : "w-28 bg-skin-primary"
                  } `}></div>
                <p className="text-skin-dark uppercase text-sm">{item.name}</p>
              </div>
            </Scroll>
          ))}
        </div>
        <div className="w-full mx-auto max-w-3xl">
          <p className="text-xl text-skin-primary  tracking-wide font-regular font-light leading-relaxed ">
            Started my journey into the world of tech and PHP back in 2019 as a
            blogger working on the WordPress platform. In 2021, I decided to try
            my hand at creating custom wordpress themes going head first into
            the rabbit hole of coding and web development.
          </p>
          <p className="text-xl text-skin-primary my-6 tracking-wide font-regular font-light leading-relaxed">
            Fast-forward to today, and I’ve had the privilege of building
            software for an advertising agency and a start-up. I most enjoy
            building software in the sweet spot where design and engineering
            meet — things that look good but are also built well under the hood.
          </p>
          <p className="text-xl text-skin-primary my-6 tracking-wide font-regular font-light leading-relaxed">
            When I’m not at the computer, I’m usually running 5k Marathon,
            reading, playing NBA 2K, NFL Madden or enjoying a game of chess with
            friends.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link href="/Resume.pdf" target="_blank" download>
          <Button
            name="Download CV"
            color="bg-skin-herobackground"
            icon={<FaDownload />}
          />
        </Link>
      </div>
    </section>
  );
};
