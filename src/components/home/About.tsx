import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../common/button";
import { BsDownload } from "react-icons/bs";
import { MdOutlineReadMore } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

const aboutVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

export const About = () => {
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
    <section id="about">
      <motion.div
        ref={ref}
        variants={aboutVariant}
        initial="hidden"
        animate={control}
        className="pt-24 max-w-screen-lg md:px-16 px-10 mx-auto flex flex-col items-start">
        <div className="flex items-center gap-3">
          <h2 className="md:text-4xl text-2xl font-semibold my-3 text-skin-primary">
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
            className="relative w-8 h-8 hidden md:block">
            <Image src="/assets/img/hand.webp" alt="" fill />
          </motion.div>
        </div>
        <p className="text-2xl text-skin-primary my-3">
          A software developer based in London. I develop full-blown web
          applications using the MERN Stack.
        </p>
        <p className="text-2xl text-skin-primary my-3">
          I mostly work on the front-end using React, Typescript, Tailwind CSS
          and Next JS
        </p>
        <p className="text-2xl text-skin-primary my-3">
          I&apos;ve been building websites since 2019 with a focus on responsive
          design, accessibility and pleasing aesthetics.
        </p>
        <p className="text-2xl text-skin-primary my-3">
          Over the Last 2 year i have tried out my hand in App Development using
          the cross platform libary React Native and i currentl have 3 active
          apps on playstore for my previous company
        </p>
      </motion.div>
      <div className="py-16 flex justify-center items-center">
        <Link
          href="https://drive.google.com/file/d/1RU5krTpgk9raDz4W_c7K1VAOLwbmpvyt/view?usp=sharing"
          target="_blank">
          <Button
            name="Download CV"
            color="bg-skin-primary"
            icon={<BsDownload size={24} />}
          />
        </Link>
      </div>
    </section>
  );
};
