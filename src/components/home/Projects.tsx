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
    <section id="projects" className=" bg-background">
      <div className="max-w-screen-xl py-10 mx-auto">
        <h2 className="mb-2 text-2xl text-center font-medium uppercase text-accent">
          <span className=" text-primary">My </span> Projects
        </h2>
        <p className="text-3xl text-center text-primary font-bold w-2/5 mx-auto">
          Take a look some of my featured projects
        </p>
        <div className="mt-10">
          {projectData.map((item, index) => {
            if (index === 1) {
              return (
                <div
                  key={index}
                  className="py-16 flex flex-row-reverse gap-10 border-b-[.2px] border-accent">
                  <div className="relative h-[330px] w-1/2">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-1/2 mt-7">
                    <p className=" text-xl uppercase font-semibold text-primary">
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
                        <FaGithub className=" text-accent" />
                        <p className=" text-accent font-semibold">View Code</p>
                      </Link>
                      <Link
                        href={item.web}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaLink className=" text-accent" />
                        <p className=" text-accent font-semibold">
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
                  className="py-16 flex gap-10 border-b-[.2px] border-primary">
                  <div className="relative h-[330px] w-1/2">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-1/2 mt-7">
                    <p className=" text-xl uppercase font-semibold text-primary">
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
                        <FaGithub className=" text-accent" />
                        <p className=" text-accent font-semibold">View Code</p>
                      </Link>
                      <Link
                        href={item.web}
                        target="_blank"
                        className="flex items-center gap-2">
                        <FaLink className=" text-accent" />
                        <p className=" text-accent font-semibold">
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
          <Button name="View All Projects" color="bg-accent" icon={<FaEye />} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
