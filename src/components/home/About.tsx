import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../common/button";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import { Header } from "../common/header";
import { Languages, frameworks, databases, tools } from "../../data/data";

const aboutVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 100 },
};

export const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const RenderSkills = ({ skills }: any) => {
    return (
      <div className="flex gap-1">
        {skills.map((item: any, index: number) => (
          <div key={index} className="mr-5">
            <div className="relative flex flex-col items-center gap-1">
              <div className="text-5xl text-skin-accent ">{item.icon}</div>
              <div className="text-skin-dark text-xs">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="font-Inter bg-skin-background py-20">
      <div className="w-1/2 mx-auto">
        <Header
          name="About Me"
          description="Information about me, what I do, and my current skills mostly in terms of programming and technology"
        />
      </div>
      <div className="flex flex-col md:flex-row w-[90%] mx-auto lg:w-[80%] justify-between py-20 gap-24">
        <motion.div
          ref={ref}
          variants={aboutVariant}
          initial="hidden"
          animate={control}
          className="w-full mx-auto md:w-1/2">
          <h1 className="text-2xl text-skin-dark font-bold">Get to know me!</h1>
          <p className="text-lg text-skin-secondary my-3 tracking-wide">
            Back in 2015, I decided to try my hand at creating custom wordpress
            themes going head first into the rabbit hole of coding and web
            development.
          </p>
          <p className="text-lg text-skin-secondary my-3 tracking-wide">
            Fast-forward to today, and I’ve had the privilege of building
            software for an advertising agency, a start-up, a huge corporation.
            I most enjoy building software in the sweet spot where design and
            engineering meet — things that look good but are also built well
            under the hood.
          </p>
          <p className="text-lg text-skin-secondary my-3 tracking-wide">
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two kids, playing NBA 2K
          </p>
          <div className="py-16 flex justify-center items-center">
            <Link
              href="https://drive.google.com/file/d/1RU5krTpgk9raDz4W_c7K1VAOLwbmpvyt/view?usp=sharing"
              target="_blank">
              <Button
                name="Download CV"
                color="bg-skin-herobackground"
                icon={<BsDownload size={24} />}
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={aboutVariant}
          initial="hidden"
          animate={control}
          className="w-1/2 flex flex-col gap-4 ">
          <h1 className="text-2xl text-skin-dark font-bold">My Stack</h1>
          <div className="">
            <RenderSkills skills={Languages} />
          </div>
          <div className="">
            <RenderSkills skills={frameworks} />
          </div>
          <div className="">
            <RenderSkills skills={tools} />
          </div>
          <div className="">
            <RenderSkills skills={databases} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
