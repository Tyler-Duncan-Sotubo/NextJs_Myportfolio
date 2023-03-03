import Button from "@/components/common/button";
import { Nav } from "@/components/common/nav/Nav";
import React from "react";
import { BsDownload } from "react-icons/bs";

const about = () => {
  return (
    <>
      <Nav />
      <section className=" max-w-screen-lg mx-autoq21   ">
        <p className="text-xl text-skin-primary my-3">
          A software developer based in London. I develop full-blown web
          applications using the MERN Stack, but I mostly work on the front-end
          using React, Typescript, Tailwind CSS and Next JS
        </p>
        <Button
          name="Download CV"
          color="bg-skin-accent"
          icon={<BsDownload size={15} />}
        />
      </section>
    </>
  );
};

export default about;
