import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Content = () => {
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
            className="bg-gradient-to-r from-indigo-700 via-sky-500 to-emerald-400 text-transparent bg-clip-text scroll-m-20 text-4xl lg:text-5xl font-bold tracking-tight py-0.5 mb-2"
          >
            Sayak Bhunia
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-violet-500 scroll-m-20 text-2xl font-semibold tracking-tight mb-4"
          >
            frontend dev & design
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
            <a href="https://drive.google.com/file/d/14zT8xk-TpikK--fWN6HNeKXqsgHAxym3/view?usp=sharing" target="_blank">
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
        <div className="mt-4 flex flex-col items-left lg:flex-row lg:items-start justify-center mr-12">
          <div className="text-left mb-4 lg:mr-4">
            <h3 className="text-violet-500 scroll-m-20 text-xl font-semibold tracking-tight mb-6 w-full max-w-48">
              projects.
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="https://xenotron.vercel.app/" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">XENOTRON</span></a>
            </h3>
            <a href="https://github.com/Sayak-Bhunia/xenotron" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              github
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-48">
              an arch linux inspired terminal alike website to keep with your daily schedule and tasks and to know about your location and weather.
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="https://github.com/Sayak-Bhunia/cli-cs-trivia" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">cli-cs-trivia</span></a> an arch
            </h3>
            <a href="https://github.com/Sayak-Bhunia/cli-cs-trivia" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              github
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-48">
              a cli/app trivia to test you computer science fundamental knowledge of oops, js and cpp.
            </h3>
          </div>
          <div className="text-left mb-4 lg:mr-4">
            <h3 className="text-custom scroll-m-20 text-xl font-semibold tracking-tight mb-6 w-full max-w-48">
              projects.
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="https://medwizard.vercel.app/" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">MEDWIZ</span></a> an arch
            </h3>
            <a href="https://github.com/Sayak-Bhunia/MEDWIZ_0.1" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              github
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-48">
              an ai powered chatbot to connect you with the best docs of their respective fields in kolkata.<span className="text-custom scroll-m-20 text-xl font-semibold">your location and weather.</span>
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="https://devdojo.website/" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">Dev Dojo</span></a> an arch
            </h3>
            <a href="https://github.com/Sayak-Bhunia/devdojo" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              github
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-48">
              a landing page for a tech community that i created from scratch to gather cool people to contribute in tech.
            </h3>
          </div>
          <div className="text-left mb-4 lg:mr-4">
            <h3 className="text-custom scroll-m-20 text-xl font-semibold tracking-tight mb-6 w-full max-w-48">
              projects.
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">Xhibit</span></a> <span className="text-gray-400">( in progress )</span>
            </h3>
            <a href="" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              github
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight mb-14 w-full max-w-48">
              a webapp to share cool stuff people have built and to connect with like minded developers and designers.
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 w-full max-w-48">
              <a href="https://www.kaggle.com/code/sayak2903/brain-tumor-classification-using-confusion-matrix" target="_blank"><span className="text-gray-100 scroll-m-20 text-xl font-semibold no-underline hover:underline hover:text-violet-500">Tumor Trace</span></a>
            </h3>
            <a href="https://www.kaggle.com/code/sayak2903/brain-tumor-classification-using-confusion-matrix" target="_blank"><button class="mt-2 mb-1 bg-slate-100 text-slate-800 hover:bg-slate-600 hover:text-gray-100 font-semibold py-1 px-2 rounded-lg shadow">
              notebook
            </button></a>
            <h3 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-48">
              an ML model built using Convolutional Neural Network (CNN) and Confusion Matrix to detect brain tumors.
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div class="text-left lg:mr-4">
            <h3 class="text-custom text-xl font-semibold tracking-tight ml-0">
              in the past 2 years i have won 2 hackathons Codefest 23 and HackOdisha 3.0
            </h3>
            <hr className="w-25 border-t-2 border-dashed border-slate-600 mx-auto" />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left mb-4 lg:mr-4">
            <h3 className="text-violet-500 text-xl font-semibold tracking-tight mb-6">
              my super powers.
            </h3>
            <h3 className="text-gray-100 scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-64">
              frameworks & tools.
            </h3>
          </div>
          <div className="text-left lg:mr-4">
            <h3 className="text-custom text-xl font-semibold tracking-tight hidden md:block">
              my super powers.
            </h3>
            <h3 className="text-custom scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-64 hidden md:block">
              frameworks.
            </h3>
          </div>
          <div className="text-left lg:mr-4">
            <h3 className="text-custom text-xl font-semibold tracking-tight hidden md:block">
              my super powers.
            </h3>
            <h3 className="text-custom scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-64 hidden md:block">
              frameworks.
            </h3>
          </div>
          <div className="text-left lg:mr-4">
            <h3 className="text-custom text-xl font-semibold tracking-tight hidden md:block">
              my super powers.
            </h3>
            <h3 className="text-custom scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-64 hidden md:block">
              frameworks.
            </h3>
          </div>
        </div>
        <div className="mt-2 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="mr-8 grid grid-cols-7 gap-8">
            <div>
              <div className="position-relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg>
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path></svg>
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path></svg>
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path></svg>
                    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
                    <path d="M0 0 C15.84 0 31.68 0 48 0 C48 15.84 48 31.68 48 48 C32.16 48 16.32 48 0 48 C0 32.16 0 16.32 0 0 Z " fill="#010101" transform="translate(0,0)"/>
                    <path d="M0 0 C-1.51031326 3.53816053 -3.57593356 5.83366147 -6.28125 8.546875 C-7.12300781 9.39121094 -7.96476562 10.23554688 -8.83203125 11.10546875 C-10.15267578 12.41451172 -10.15267578 12.41451172 -11.5 13.75 C-12.38042969 14.63816406 -13.26085938 15.52632812 -14.16796875 16.44140625 C-15.00972656 17.28058594 -15.85148437 18.11976562 -16.71875 18.984375 C-17.49154297 19.75491211 -18.26433594 20.52544922 -19.06054688 21.31933594 C-21 23 -21 23 -23 23 C-21.48968674 19.46183947 -19.42406644 17.16633853 -16.71875 14.453125 C-15.87699219 13.60878906 -15.03523438 12.76445312 -14.16796875 11.89453125 C-13.28753906 11.02183594 -12.40710937 10.14914063 -11.5 9.25 C-10.61957031 8.36183594 -9.73914062 7.47367188 -8.83203125 6.55859375 C-7.99027344 5.71941406 -7.14851563 4.88023438 -6.28125 4.015625 C-5.50845703 3.24508789 -4.73566406 2.47455078 -3.93945312 1.68066406 C-2 0 -2 0 0 0 Z " fill="#E8E8E8" transform="translate(34,11)"/>
                    <path d="M0 0 C-1.53218685 3.63061667 -3.7183144 5.9863773 -6.5 8.75 C-7.69109375 9.94882812 -7.69109375 9.94882812 -8.90625 11.171875 C-11 13 -11 13 -13 13 C-11.46781315 9.36938333 -9.2816856 7.0136227 -6.5 4.25 C-5.7059375 3.45078125 -4.911875 2.6515625 -4.09375 1.828125 C-2 0 -2 0 0 0 Z " fill="#ECECEC" transform="translate(36,23)"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="position:relative inline-block">
                <div className="p-4 rounded-full bg-neutral-800 my-3 cursor-pointer group hover:bg-neutral-200">
                  <div className="flex flex-col items-center justify-center text-xl lg:text-3xl text-neutral-200 group-hover:text-violet-600 transition-all duration-200">
                    <svg width="1em" height="1em" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div class="text-left mt-4 lg:mr-6">
            <h3 class="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
              besides i also use <span className="text-gray-100">kaggle notebook</span>, <span className="text-gray-100">PyCharm</span>, <span className="text-gray-100">Spline</span>, <span className="text-gray-100">Canva</span>, <span className="text-gray-100">Fastn</span> and <span className="text-gray-100">GCP</span>.
            </h3>
            <h3 class="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
              i use <span className="text-gray-100">Supabase</span> for user auth and <span className="text-gray-100">MongoDB</span> for creating databases.
            </h3>
            <h3 class="text-zinc-500 text-xl font-semibold tracking-tight ml-0">
              i use <span className="text-gray-100">C</span> and <span className="text-gray-100">CPP</span> for competitive programming and <span className="text-gray-100">Python</span> for ML projects.
            </h3>
            <hr className="w-25 mt-10 border-t-2 border-dashed border-slate-600 mx-auto" />
          </div>
        </div>
        <div class="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left mb-2 lg:mr-4">
            <h3 className="text-violet-500 text-xl font-semibold tracking-tight mb-5">
              education. <span className="text-custom hidden sm:block">aadjbkdhbskdhsbdksahdbkhdbkhdbkahdbkahdbksdhbkdhskdbhsakhdbskdh..</span>
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="block max-w-5xl p-6 border-2 border-gray-500 rounded-lg shadow dark:border-gray-70 bg-custom">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              Narula Institute of Technology
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              B.Tech in Computer Science and Engineering
            </h3>
            <hr className="w-25 mt-3 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-2 text-left font-sans text-gray-400">
              grad. 2026 oct | sgpa - 9.34 <span className="text-custom hidden sm:inline-block">kahbakshdbaskhdbaskdhsabdkahsbdiabdabdkashdbsssssss</span>
            </p>
          </div>
        </div>
        <div class=" mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div className="block max-w-5xl p-6 border-2 border-gray-500 rounded-lg shadow dark:border-gray-70 bg-custom">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              Haradayal Nag Adarsha Vidyalaya
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              PCM + Computer Science
            </h3>
            <hr className="w-25 mt-3 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-2 text-left font-sans text-gray-400">
              grad. 2022 july | percentage - 90% <span className="text-custom hidden sm:inline-block">kahbakshdbaskhdbaskdhsabdkahsbdiabdabdkashda</span>
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left mb-2 lg:mr-4">
            <hr className="w-25 mt-4 border-t-2 border-dashed border-slate-600 mx-auto" />
            <h3 className="text-violet-500 text-xl font-semibold tracking-tight mt-8 mb-5">
              community. <span className="text-custom hidden sm:block">aadjbkdhbskdhsbdksahdbkhdbkhdbkahdbkahdbksdhbkdhskdbhsakhdbskdh..</span>
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="block max-w-5xl p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              GDSC NiT
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              PR and Management Lead | Aug 2023 - Present
            </h3>
            <hr className="w-25 mt-3 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-2 text-left font-sans text-gray-400">
              <ul>
                <li className="mb-2">• conducted 2 sessions in my college in front of 300+ participants.</li>
                <li className="mb-2">• prepare efficient event reports after every event with proper descriptions and pictures.</li>
                <li className="mb-2">• effectively connected with other community officials for partnerships.</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="block max-w-5xl p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              Dev Dojo
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              Founder | Dec 2023 - Present
            </h3>
            <hr className="w-25 mt-4 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-3 text-left font-sans text-gray-400">
              <ul>
                <li className="mb-2">• developed the community website from scratch.</li>
                <li className="mb-2">• maintain the discord server and whatsapp and other social platforms → ig, x, linkedin.</li>
                <li className="mb-2">• also efficiently connected with other community officials for partnerships.</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left mb-2 lg:mr-4">
            <hr className="w-25 mt-4 border-t-2 border-dashed border-slate-600 mx-auto" />
            <h3 className="text-violet-500 text-xl font-semibold tracking-tight mt-8 mb-5">
              publications & blogs. <span className="text-custom hidden sm:block">aadjbkdhbskdhsbdksahdbkhdbkhdbkahdbkahdbksdhbkdhskdbhsakhdbskdh..</span>
            </h3>
          </div>
        </div>
        <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="block max-w-5xl p-6 border-2 border-gray-500 rounded-lg shadow dark:border-gray-70 bg-custom">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              Ardunino Based Smart Lighting
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              International Advanced Research Journal in Science, Engineering and Technology
            </h3>
            <hr className="w-25 mt-3 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-2 text-left font-sans text-gray-100">
              <span className="no-underline hover:underline text-xl"><a href="https://iarjset.com/wp-content/uploads/2023/11/IARJSET-NCSTCS-18.pdf" target="_blank">link</a></span> <span className="text-custom hidden sm:inline-block">kahbakshdbaskhdbaskdhsabdkahsbdiabdabdkashdbssssssssssssssbsggsssgsgsgss.</span>
            </p>
          </div>
        </div>
        <div class=" mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div className="block max-w-5xl p-6 border-2 border-gray-500 rounded-lg shadow dark:border-gray-70 bg-custom">
            <h3 className="text-left text-xl font-bold tracking-tight text-violet-600">
              The Power of Proper Hackathons
            </h3>
            <h3 className="text-left text-md tracking-tight text-gray-100">
              Hashnode
            </h3>
            <hr className="w-25 mt-3 border-t-2 border-dashed border-slate-600 mx-auto" />
            <p className="mt-2 text-left font-sans text-gray-100">
              <span className="no-underline hover:underline text-xl"><a href="https://sayak2903.hashnode.dev/the-power-of-proper-hackathons-unleashing-innovation-and-embracing-authenticity" target="_blank">link</a></span> <span className="text-custom hidden sm:inline-block">kahbakshdbaskhdbaskdhsabdkahsbdiabdabdkashdbssssssssssssssbsggsssgsgsssss</span>
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left lg:mr-4">
            <hr className="w-25 mt-4 border-t-2 border-dashed border-slate-600 mx-auto" />
            <h3 className="text-violet-500 text-xl font-semibold tracking-tight mt-8">
              socials. <span className="text-custom hidden sm:block">aadjbkdhbskdhsbdksahdbkhdbkhdbkahdbkahdbksdhbkdhskdbhsakhdbskdh..</span>
            </h3>
          </div>
        </div>
        <div class="mt-4 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left lg:mr-4">
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight">
              you can reach me at <a href="mailto:sbhunia2903@gmail.com"><span className="text-gray-100 no-underline hover:underline">sbhunia2903@gmail.com</span></a>. <span className="text-custom">akbdkahbdhdvbajdhbvshshsh.</span>
            </h3>
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight mt-2">
              if you want to ask something or just want to say hi then feel free to mail me
            </h3>
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight">
              or connect with me on any social platform given below.
            </h3>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://github.com/Sayak-Bhunia">
                <span>github</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://www.linkedin.com/in/sayak-bhunia-452419252/">
                <span>linkedin</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://twitter.com/0xSayak15089">
                <span>twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://leetcode.com/Sayak2903/">
                <span>leetcode</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://www.codechef.com/users/sayak2903">
                <span>codechef</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Content;
