import SkillsButton from "@/components/common/SkillsButton";
import { Footer } from "@/components/home/Footer";
import { projectData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaGithub, FaLink } from "react-icons/fa";

export default function projects() {
  return (
    <section className="w-[90%] mx-auto my-24 text-skin-primary font-Inter">
      <Link href="/" className="flex items-center gap-2 group">
        <BsArrowLeft className="cursor-pointer text-skin-accent group-hover:-ml-4 duration-300" />
        <h2 className="text-xl cursor-pointer text-skin-accent tracking-wide">
          Tyler Duncan Sotubo
        </h2>
      </Link>
      <h1 className="text-6xl font-bold text-skin-primary mt-6">
        All Projects
      </h1>
      <div className="w-full flex md:flex-wrap flex-col md:flex-row gap-4">
        {projectData.map((item, index) => (
          <div
            key={index}
            className={`py-12 flex flex-col items-center gap-4 md:w-[32%] w-full`}>
            <div className="relative w-full h-[270px] ">
              <Image
                src={item.img}
                alt=""
                fill
                className="shadow-2xl rounded-xl"
              />
            </div>
            <div className="w-full">
              <p className="text-xl capitalize font-semibold text-skin-dark">
                {item.name}
              </p>
              <div className="flex">
                <p className="text-sm font-semibold text-skin-primary">
                  Made at - {item.madeat}
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                {item.tech.map((item: any, index: number) => (
                  <div key={index}>
                    <SkillsButton name={item.name} />
                  </div>
                ))}
              </div>
              <div className="flex mt-4 gap-10">
                <Link
                  href={item.source}
                  target="_blank"
                  className="flex items-center gap-2">
                  <FaGithub className="text-skin-dark" />
                  <p className="text-skin-dark font-semibold hover:scale-90">
                    View Code
                  </p>
                </Link>
                <Link
                  href={item.web}
                  target="_blank"
                  className="flex items-center gap-2">
                  <FaLink className=" text-skin-dark" />
                  <p className=" text-skin-dark font-semibold hover:scale-90">
                    Visit Website
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
