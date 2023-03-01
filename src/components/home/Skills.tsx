import { toolsData } from "@/data/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <div className="py-16 mx-auto">
        <h2 className="mb-2  text-xl text-center font-medium uppercase text-skin-accent">
          <span className="text-skin-primary">My </span> Skills
        </h2>
        <p className="md:text-2xl text-center text-primary font-bold w-2/5 mx-auto">
          Expert in these Languages, Libraries, Frameworks & Tools
        </p>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 md:px-52 px-10 mb-28 md:gap-16 gap-8">
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

export default Skills;
