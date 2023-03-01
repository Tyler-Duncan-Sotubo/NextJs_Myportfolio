import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../common/button";
import { BsDownload } from "react-icons/bs";
import { MdOutlineReadMore } from "react-icons/md";

const aboutVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="">
      <motion.div
        ref={ref}
        variants={aboutVariant}
        initial="hidden"
        animate={control}
        className="py-20 max-w-screen-lg px-16 mx-auto flex flex-col items-start">
        <div className="flex items-center gap-3">
          <h2 className="text-4xl my-3 text-skin-primary">
            Hello, I&apos;m Tyler Duncan Sotubo
          </h2>
          <motion.div
            animate={{ rotate: ["15deg", "-10deg"] }}
            transition={{
              delay: 1,
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="relative w-8 h-8">
            <Image src="/assets/img/hand.webp" alt="" fill />
          </motion.div>
        </div>
        <p className="text-xl   my-3">
          A software developer based in London. I develop full-blown web
          applications using the MERN Stack, but I mostly work on the front-end
          using React, Typescript, Tailwind CSS and Next JS
        </p>
        <p className="text-xl text-skin-primary my-3">
          I&apos;ve been building websites since 2019 with a focus on responsive
          design, accessibility and pleasing aesthetics.
        </p>
        <p className="text-xl text-skin-primary my-3">
          Over the Last 2 year i have tried out my hand in App Development using
          the cross platform libary React Native and i currentl have 3 active
          apps on playstore for my previous company
        </p>
        <div className="my-10 flex gap-4">
          <Button
            name="More About Me"
            color="bg-skin-accent"
            icon={<MdOutlineReadMore size={20} />}
          />
          <Button
            name="Download CV"
            color="bg-skin-primary"
            icon={<BsDownload size={15} />}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
