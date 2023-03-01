import React, { useEffect } from "react";
import { projectData } from "@/data/data";
import Image from "next/image";
import SkillsButton from "../common/SkillsButton";
import Link from "next/link";
import { FaEye, FaGithub, FaLink } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../common/button";

const Projects = () => {
  return (
    <section id="projects" className=" bg-skin-background">
      <div className="max-w-screen-xl py-10 mx-auto px-10 md:px-0">
        <h2 className="mb-2 md:text-2xl text-center font-medium uppercase text-skin-accent">
          <span className=" text-primary">My </span> Projects
        </h2>
        <p className="md:text-3xl text-center text-skin-primary font-bold w-2/5 mx-auto">
          Take a look some of my featured projects
        </p>
        <div className="mt-10">
          {projectData.map((item, index) => {
            if (index === 1) {
              return (
                <div
                  key={index}
                  className="py-16 flex md:flex-row-reverse flex-col items-center gap-10 border-b-[.2px] border-skin-accent">
                  <div className="relative w-full h-[270px] md:h-[330px] md:w-1/2 ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-full md:w-1/2 mt-7">
                    <p className=" text-xl uppercase font-semibold text-skin-primary">
                      {item.name}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap ">
                      {item.tech.map((item: any, index: number) => (
                        <div key={index}>
                          <SkillsButton name={item.name} />
                        </div>
                      ))}
                    </div>
                    <p className=" text-lg mt-6 my-10">{item.desc}</p>
                    <div className="flex gap-10">
                      <Link
                        href={item.source}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaGithub className=" text-skin-accent" />
                        <p className=" text-skin-accent font-semibold hover:scale-90">
                          View Code
                        </p>
                      </Link>
                      <Link
                        href={item.web}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaLink className=" text-skin-accent" />
                        <p className=" text-skin-accent font-semibold hover:scale-90">
                          Visit Website
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="py-16 flex flex-col md:flex-row items-center gap-10 border-b-[.2px] last:border-none border-skin-primary">
                  <div className="relative w-full h-[270px] md:h-[330px] md:w-1/2 ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-full md:w-1/2 mt-7">
                    <p className=" text-xl uppercase font-semibold text-skin-primary">
                      {item.name}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {item.tech.map((item: any, index: number) => (
                        <div key={index}>
                          <SkillsButton name={item.name} />
                        </div>
                      ))}
                    </div>
                    <p className=" text-lg mt-6 my-10">{item.desc}</p>
                    <div className="flex gap-10">
                      <Link
                        href={item.source}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaGithub className=" text-skin-accent" />
                        <p className=" text-skin-accent font-semibold hover:scale-90">
                          View Code
                        </p>
                      </Link>
                      <Link
                        href={item.web}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaLink className=" text-skin-accent" />
                        <p className=" text-skin-accent font-semibold hover:scale-90">
                          Visit Website
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button
            name="View All Projects"
            color="bg-skin-accent"
            icon={<FaEye />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
