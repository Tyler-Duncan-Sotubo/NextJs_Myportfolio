import { toolsData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { Header } from "../common/header";

export const Skills = () => {
  return (
    <div>
      <div className="pt-28 mx-auto" id="skills">
        <Header
          name="My Skills"
          description="Expert in these Languages, Libraries, Frameworks & Tools"
        />
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 md:px-52 px-10 md:gap-16 gap-8">
        {toolsData.map((item, index) => (
          <div
            key={index}
            className="px-20 py-8 flex flex-col rounded-lg shadow-lg items-center hover:bg-skin-accent group">
            <div className=" bg-skin-light rounded-full">
              <div className="relative h-12 w-12 group-hover:scale-50 ">
                <Image src={item.img} alt="" fill />
              </div>
            </div>
            <div className="mt-10"></div>
            <div className="text-md uppercase font-semibold group-hover:text-skin-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
