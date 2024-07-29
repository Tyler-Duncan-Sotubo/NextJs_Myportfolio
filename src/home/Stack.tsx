import React from "react";
import { Header } from "../components/header";
import { experience, others, Lang, Frameworks } from "@/data/data";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

export default function Stack() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto font-Inter mt-20" id="stack">
      <Header name="My Stack" description="" />
      <div className="flex md:flex-row">
        <div className="w-full md:my-0">
          <h3 className="text-skin-dark text-2xl my-10">
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
            {Lang.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-skin-accent text-3xl md:text-5xl">
                  {item.icon}
                </div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <h3 className="text-skin-dark text-2xl my-10">
            Libraries & Frameworks:
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {Frameworks.map((item, index) => (
              <div key={index} className="flex  items-center gap-3">
                <div className="text-skin-accent text-3xl md:text-5xl">
                  {item.icon}
                </div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
          <h3 className="text-skin-dark text-2xl my-10">Others:</h3>
          <div className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-5">
            {others.map((item, index) => (
              <div key={index} className="flex  items-center gap-3">
                <div className="text-skin-accent text-3xl md:text-5xl">
                  {item.icon}
                </div>
                <p className="text-skin-primary text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
