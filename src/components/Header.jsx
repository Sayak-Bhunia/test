import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Header = () => {

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      controls.start({
        opacity: 1 - scrollY / 200,
        y: -scrollY / 3,
      });
    };

    handleScroll(); 

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
        <div className="mt-6 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            exit={{ opacity: 0, y: -50 }}
            className="flex flex-col lg:flex-row"
          >
        <div className="text-left mb-4 lg:mr-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r text-slate-100 bg-clip-text scroll-m-20 text-4xl lg:text-5xl font-bold tracking-tight py-0.5 mb-2"
          >
            hi, i'm sayak ✦. 
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-violet-500 scroll-m-20 text-2xl font-semibold tracking-tight mb-4"
          >
            frontend dev & design ツ
          </motion.h3>
          <motion.hr
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-25 border-t-2 border-dashed border-slate-600 mx-auto mb-4"
          />
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight mb-4 w-full max-w-80 mt-2"
          >
            crafting minimal websites and web components using efficient code and building engaging tech communities for the past 3 years.
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-gray-100 scroll-m-20 text-xl font-semibold tracking-tight mb-4 w-full max-w-80"
          >
            looking for an internship role as a front-end developer.
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight mb-4 w-full max-w-80"
          >
            hire me →{" "}
            <a href="https://drive.google.com/file/d/1tZmK6HuhYo4myRQKEKBWyo7zBF-4xp18/view?usp=sharing" target="_blank">
              <span className="text-violet-500 scroll-m-20 text-xl font-semibold no-underline hover:underline">resume</span>
            </a>
          </motion.h3>
        </div>
        <div className="hidden lg:block">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src="./images/unidp2.jpg"
            alt="Image Description"
            className="mt-4 mx-auto lg:mt-0 lg:ml-4 w-full h-80 rounded-xl border-4 hover:border-2 border-custom hover:border-slate-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-slate-100 hover:shadow-lg"
          />
        </div>
          </motion.div>
        </div>
        <div class="mt-0 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            exit={{ opacity: 0, y: -50 }}
            className="text-left mb-4 lg:mr-4"
          >
          <h3 className="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
            in the past 2 years, I have won 2 hackathons{" "}
          <a href="https://devfolio.co/projects/coders-dasboard-d8fd" target="_blank">
            <span className="text-violet-500 scroll-m-20 text-xl font-semibold no-underline hover:underline">Codefest 23</span>
          </a>{" "}
          and{" "}
          <a href="https://devfolio.co/projects/ezmed-cb1e" target="_blank">
            <span className="text-violet-500 scroll-m-20 text-xl font-semibold no-underline hover:underline">HackOdisha 3.0</span>
          </a>
          </h3>
          <h3 className="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
            and created{" "}
          <a href="https://devdojo.website/" target="_blank">
            <span className="text-violet-500 scroll-m-20 text-xl font-semibold no-underline hover:underline">Dev Dojo</span>
          </a>{" "}
            (community), also worked as a PR and MGT Lead
          </h3>
          <h3 className="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
            of{" "}
          <a href="https://gdsc.community.dev/narula-institute-of-technology-agarpara/" target="_blank">
            <span className="text-violet-500 scroll-m-20 text-xl font-semibold no-underline hover:underline">GDSC NiT</span>
          </a>{" "}
            and worked on numerous projects.
          </h3>
           <hr className="w-25 border-t-2 border-dashed border-slate-600 mx-auto mt-9" />
          </motion.div>
        </div>
    </>
  )
}

export default Header;