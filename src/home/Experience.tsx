import React from "react";
import { Header } from "../components/header";
import { experience, others, Lang, Frameworks } from "@/data/data";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto font-Inter" id="stack">
      <Header name="Work Experience" description="" />
      <div className="flex flex-col md:flex-row mt-12">
        <div className="w-full">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col-reverse md:flex-row text-skin-primary md:justify-between mb-10">
              <div className="flex gap-3 items-center text-skin-primary md:w-[80%] w-full">
                <div className="text-xl text-skin-primary font-regular font-light flex flex-col gap-3 ">
                  <div className="flex items-center gap-1">
                    <p className="text-white text-sm tracing-wide md:text-2xl font-medium ">
                      {item.company}
                    </p>
                    <p className="text-white text-sm tracing-wide md:text-xl ">
                      <FiMinus />
                    </p>
                    <p className="text-white text-sm tracing-wide md:text-xl ">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-white">{item.desc}</p>
                  {item.objectives.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <IoCheckmarkDoneOutline />
                      <p className="text-white text-xl">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-4 font-bold">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
