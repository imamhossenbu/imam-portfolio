"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import SliderBtn from "@/components/SliderBtn";


const projects = [
  {
    num: "01",
    category: "frontend",
    name: "PeddyCare",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peddy.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "frontend",
    name: "HonestView",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/fitness.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    name: "MovieVerse",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/biker-zone.png",
    live: "",
    github: ""
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peeddy.png",
    live: "",
    github: ""
  },
  {
    num: "05",
    category: "frontend",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peeddy.png",
    live: "",
    github: ""
  },
  {
    num: "06",
    category: "frontend",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peeddy.png",
    live: "",
    github: ""
  },
  {
    num: "07",
    category: "frontend",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peeddy.png",
    live: "",
    github: ""
  },
  {
    num: "08",
    category: "frontend",
    title: "project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit repudiandae, ratione aliquam aliquid quas magnam ipsa officia magni amet.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },],
    image: "/assets/work/peeddy.png",
    live: "",
    github: ""
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex])
  }



  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="flex flex-col justify-center py-10 lg:py-0 ">
      <div className="my-20 lg:mt-32 w-[95%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row  justify-between items-center gap-[30px] lg:gap-[40px]">
          <div className="w-full lg:w-[50%]  flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[20px]">
              {/* num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[34px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <h3 className="text-[28px] font-semibold leading-none text-[var(--accent-hover)]">{project.name}</h3>
              {/* project description */}
              <p className="text-white/80">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return <li className="text-accent text-lg" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/30"></div>
              {/* button */}
              <div className="flex gap-4 items-center">
                <Link href={project.live} delayDuration={100}>
                  <Tooltip>
                    <TooltipProvider>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer"><BsArrowUpRight className="text-white text-2xl font-extrabold group-hover:text-accent" /></TooltipTrigger>
                      <TooltipContent><p>Live Project</p></TooltipContent>
                    </TooltipProvider>
                  </Tooltip>
                </Link>
                <Link href={project.github} delayDuration={100}>
                  <Tooltip>
                    <TooltipProvider>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer"><BsGithub className="text-white text-2xl font-extrabold group-hover:text-accent" /></TooltipTrigger>
                      <TooltipContent><p>Github Repository</p></TooltipContent>
                    </TooltipProvider>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} className="lg:h-[400px]" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide className="w-full" key={index}>
                  <div className="h-[400px] relative group flex justify-center items-center rounded-lg  bg-pink-50/5">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                    {/* image */}
                    <div className="relative   w-full aspect-[3/2] ">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              })}

              <SliderBtn
                containerStyles="absolute z-20 top-1/2 -translate-y-1/2 w-full px-2 flex justify-between items-center
                   lg:top-auto lg:bottom-0 lg:right-2  lg:w-auto lg:px-0 lg:gap-4"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[30px] h-[30px] rounded-full lg:w-[40px] lg:h-[40px] transition all flex justify-center items-center"
              />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work