import React from "react";
import { experience } from "@/data/data";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link as Scroll, Element } from "react-scroll";
import { Nav } from "@/components/Nav";

export default function Experience() {
  return (
    <>
      <Nav />
      <section
        className="flex justify-center items-start font-Inter w-[95%] mx-auto lg:w-[70%] mt-20 px-4"
        id="experience">
        <div className="w-full">
          {/* <Header name="Work Experience" description="" /> */}
          <div className="flex flex-col md:flex-row my-20">
            {/* Left Column: Dates as Links */}
            <div className="w-full md:w-[20%] mb-16 md:fixed md:top-60">
              <div className="flex flex-col gap-4">
                {experience.map((item, index) => (
                  <Scroll
                    key={index}
                    to={`experience-${index}`}
                    smooth={true}
                    duration={500}
                    offset={-20}
                    className="cursor-pointer text-skin-primary hover:text-skin-accent transition-colors duration-200">
                    <p className="text-lg font-medium">{item.date}</p>
                  </Scroll>
                ))}
              </div>
            </div>

            {/* Right Column: Experience Details */}
            <div className="w-full md:w-[80%] md:ml-[25%]">
              {experience.map((item, index) => (
                <Element
                  key={index}
                  name={`experience-${index}`}
                  className="mb-16">
                  <div className="flex flex-col-reverse md:flex-row text-skin-primary md:justify-between">
                    <div className="w-full">
                      <div className="flex flex-col gap-2">
                        <div className="">
                          <p className="text-white md:text-2xl text-xl">
                            {item.role} {item.company && "@"} {item.company} |{" "}
                            {item.date}
                          </p>
                        </div>
                        <p className="text-skin-secondary text-xl">
                          {item.desc}
                        </p>
                        {item.objectives.map((objective, objIndex) => (
                          <div
                            key={objIndex}
                            className="flex gap-3 items-center">
                            <IoCheckmarkDoneOutline />
                            <p className="text-skin-secondary text-xl">
                              {objective}
                            </p>
                          </div>
                        ))}
                        <h4 className="text-xl mt-10">
                          {item.accomplishments.length > 0 && "Accomplishments"}
                        </h4>
                        {item?.accomplishments.map((objective, objIndex) => (
                          <div
                            key={objIndex}
                            className="flex gap-3 items-center">
                            <IoCheckmarkDoneOutline />
                            <p className="text-skin-secondary text-xl">
                              {objective}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Element>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
