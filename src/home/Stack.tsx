import React from "react";
import { Header } from "../components/header";
import { experience, others, Lang, Frameworks } from "@/data/data";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

export default function Stack() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto font-Inter" id="stack">
      <Header name="Curriculum Vitae" description="" />
      <div className="flex flex-col md:flex-row mt-12">
        <h3 className="text-skin-dark text-xl md:hidden text-center">
          My stack:
        </h3>
        <div className="w-full md:w-[25%] my-8 md:my-0 flex justify-center gap-4 md:block ">
          <div>
            <h3 className="text-skin-dark text-lg hidden md:block">
              Programming Languages
            </h3>
            {Lang.map((item, index) => (
              <div key={index} className="flex my-3 items-center gap-2">
                <div className="text-skin-accent md:text-2xl">{item.icon}</div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="md:mt-10">
            <h3 className="text-skin-dark text-lg hidden md:block">
              Libraries & Frameworks:
            </h3>
            {Frameworks.map((item, index) => (
              <div key={index} className="flex my-4 items-center gap-3">
                <div className="text-skin-accent md:text-2xl">{item.icon}</div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="md:mt-10">
            <h3 className="text-skin-dark text-xl hidden md:block">Others:</h3>
            {others.map((item, index) => (
              <div key={index} className="flex my-4 items-center gap-3">
                <div className="text-skin-accent md:text-2xl">{item.icon}</div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          {experience.map((item, index) => (
            <div
              key={index}
              className="flex flex-col-reverse md:flex-row text-skin-primary  md:justify-between mb-10">
              <div className="flex  gap-3 items-center text-skin-primary md:w-[80%] w-full">
                <div className="text-lg text-skin-primary font-regular font-light flex flex-col gap-3 ">
                  <div className="flex items-center gap-1">
                    <p className="text-skin-dark text-sm tracing-wide md:text-lg ">
                      {item.company}
                    </p>
                    <p className="text-skin-dark text-sm tracing-wide md:text-lg ">
                      <FiMinus />
                    </p>
                    <p className="text-skin-dark text-sm tracing-wide md:text-lg ">
                      {item.role}
                    </p>
                  </div>
                  <p>{item.desc}</p>
                  {item.objectives.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <IoCheckmarkDoneOutline />
                      <p className="text-skin-primary text-lg">{item}</p>
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
