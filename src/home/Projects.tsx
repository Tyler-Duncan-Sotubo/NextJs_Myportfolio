import React from "react";
import { projectData } from "@/data/data";
import Image from "next/image";
import SkillsButton from "../components/SkillsButton";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { Header } from "../components/header";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-skin-background font-Inter py-12">
      <div className="w-[90%] mx-auto lg:w-[80%]">
        <Header
          name="My Projects"
          description="Take a look at some of my featured projects"
        />
        <div className="mt-4">
          {projectData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`py-12 flex ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col items-center gap-10`}>
              {/* Project Image and Tech Stack */}
              <div className="md:w-1/2">
                <div className="relative w-full h-[300px] md:h-[330px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="shadow-2xl rounded-xl"
                  />
                </div>
                {/* Tech Stack Icons */}
                <div className="my-8 flex gap-3 flex-wrap">
                  {item.techIcons?.map((iconItem: any, techIndex: number) => (
                    <div key={techIndex}>
                      <p className="text-skin-accent">{iconItem.icon}</p>
                    </div>
                  ))}
                </div>
                {/* Tech Stack Names */}
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.tech.map((techItem: any, techIndex: number) => (
                    <div key={techIndex}>
                      <SkillsButton name={techItem.name} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="w-full md:w-1/2">
                <p className="text-3xl capitalize font-semibold text-skin-dark">
                  {item.name}
                </p>
                <div className="flex">
                  <p className="text-lg font-semibold text-skin-primary my-1">
                    Made at - {item.madeat}
                  </p>
                </div>
                {/* Render the description with <p> tags and spacing */}
                <div
                  className="text-lg text-skin-primary my-4 tracking-wide space-y-4"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
                <div className="flex gap-10">
                  <Link
                    href={item.source}
                    target="_blank"
                    className="flex items-center gap-2">
                    <FaGithub className="text-skin-dark" />
                    <p className="font-semibold hover:scale-90 text-skin-accent text-xl">
                      View Code
                    </p>
                  </Link>
                  <Link
                    href={item.web}
                    target="_blank"
                    className="flex items-center gap-2">
                    <FaLink className="text-skin-dark" />
                    <p className="font-semibold hover:scale-90 text-skin-accent text-xl">
                      Visit Website
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center font-Inter tracking-wide">
          <Link href="/projects">
            <h3 className="uppercase text-lg py-2 px-8 text-bold text-skin-dark cursor-pointer border-[1.5px] border-skin-accent rounded-xl hover:bg-skin-herobackground hover:text-skin-accent">
              View All Projects
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};
