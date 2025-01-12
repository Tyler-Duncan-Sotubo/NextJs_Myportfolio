import React from "react";

export const Hero = () => {
  return (
    <section className="mt-40 md:mt-28 mx-auto w-full text-center">
      <div className="mt-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-6xl leading-20 capitalize text-skin-dark tracking-wide font-bold ">
            Tyler Duncan Sotubo
          </h1>
          <h2 className="text-2xl leading-20 capitalize text-skin-secondary tracking-wide font-semiBold">
            IT Architect and Software Engineer
          </h2>
        </div>
      </div>
    </section>
  );
};
