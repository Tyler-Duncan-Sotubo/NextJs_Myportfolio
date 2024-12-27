import React from "react";
import SocialIcons from "../components/SocialIcons";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 items-center justify-between mt-28 mb-10 bg-skin-background w-full">
      <div className="w-[90%] mx-auto lg:w-[70%] flex flex-col md:flex-row gap-6 items-center justify-between">
        <SocialIcons size="text-3xl" />
        <p className="text-lg text-skin-primary text-center md:w-[45%] tracking-wide">
          Designed in <span className="text-skin-accent">Figma</span> coded in
          <span className=" text-skin-accent"> Visual Studio Code</span> by me.
          Built with <span></span>Next.js and{" "}
          <span className="text-skin-accent">Tailwind </span> CSS, deployed with
          <span className="text-skin-accent"> Netlify</span>. All text is set in
          the Inter typeface.
        </p>
      </div>
    </footer>
  );
};
