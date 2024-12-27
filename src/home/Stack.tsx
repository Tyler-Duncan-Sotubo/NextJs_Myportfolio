// Stack.js
import React from "react";
import { Header } from "../components/header";
import { Lang, Frameworks, Others, skills, database } from "@/data/data";
import { BsDot } from "react-icons/bs";

export default function Stack() {
  // Separate skills into hard and soft skills

  const RenderMap = ({ item }: { item: { name: string } }) => {
    return (
      <div key={item.name} className="flex items-center justify-center">
        <BsDot className="text-white text-2xl" />
        <p className="text-skin-primary text-xl  flex items-center">
          {item.name}
        </p>
      </div>
    );
  };

  return (
    <section
      className="flex justify-center items-center font-Inter w-[90%] mx-auto lg:w-[60%] mb-20 sm:px-0 "
      id="stack">
      <div className="w-full">
        <div className="flex flex-col md:flex-row  gap-12 mt-10">
          {/* Tools & Technologies */}
          <div className="w-full md:w-1/2">
            <h4 className="text-skin-accent text-xl mb-4">
              Tools & Technologies
            </h4>
            <div className="flex flex-col gap-8">
              {/* Programming Languages */}
              <div>
                <div className="flex flex-row flex-wrap gap-4 border-b-2 pb-6 mb-4 border-dashed">
                  {Lang.map((item) => (
                    <RenderMap key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Libraries & Frameworks */}
              <div>
                <div className="flex flex-row flex-wrap gap-4 border-b-2 pb-6 mb-4 border-dashed">
                  {Frameworks.map((item) => (
                    <RenderMap key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Database */}
              <div>
                <div className="flex flex-row flex-wrap gap-4 border-b-2 pb-6 mb-4 border-dashed">
                  {database.map((item) => (
                    <RenderMap key={item.name} item={item} />
                  ))}
                </div>
              </div>

              {/* Others */}
              <div>
                <div className="flex flex-row flex-wrap gap-4 border-b-2 pb-6 mb-4 border-dashed">
                  {Others.map((item) => (
                    <RenderMap key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industry Knowledge */}
          <div className="w-full md:w-1/2">
            <h4 className="text-xl mb-4 text-skin-accent">
              Industry Knowledge
            </h4>
            <div className="flex flex-row flex-wrap gap-4">
              {skills.map((skill) => (
                <RenderMap key={skill.name} item={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
