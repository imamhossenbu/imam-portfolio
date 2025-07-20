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
    category: "full stack",
    name: "E-Quesheet(Betar Barisal)",
    title: "project 1",
    description: "A user-friendly web application that facilitates Quesheet by allowing user to browse and  admin to browse, manage, and add different song and ceremony. The platform includes authentication, and admin functionalities for better management.",
    stack: [{ name: "Next JS" }, { name: "Express JS" }, { name: "Node JS" }, { name: "MongoDb" }, { name: "Tailwind CSS" }, { name: "Firebase" }, { name: "JWT" },],
    image: "/assets/work/betar.png",
    live: "https://equesheet.com/",
    clientRepo: "https://github.com/imamhossenbu/betar-demo",
    serverRepo: "https://github.com/imamhossenbu/betar-Server"
  },
  {
    num: "02",
    category: "full stack",
    name: "PeddyCare",
    title: "project 2",
    description: "A user-friendly web application that facilitates pet adoption by allowing users to browse, adopt, and contribute to pet adoption campaigns. The platform includes authentication, payment integration, and admin functionalities for better management.",
    stack: [{ name: "React JS" }, { name: "Express JS" }, { name: "Node JS" }, { name: "MongoDb" }, { name: "Tailwind CSS" }, { name: "Firebase" }, { name: "Stripe" }, { name: "JWT" },],
    image: "/assets/work/peddycare.png",
    live: "https://pet-adoption-3d21e.web.app/",
    clientRepo: "https://github.com/imamhossenbu/peddyCare-client",
    serverRepo: "https://github.com/imamhossenbu/PeddyCare-Server"
  },
  {
    num: "03",
    category: "full stack",
    name: "HonestView",
    title: "project 3",
    description: "A full-stack service review platform where users can interact with services, post and manage reviews, and perform CRUD operations on services and reviews.",
    stack: [{ name: "React JS" }, { name: "Express JS" }, { name: "Node JS" }, { name: "MongoDb" }, { name: "Tailwind CSS" }, { name: "Firebase" }, { name: "JWT" },],
    image: "/assets/work/honestview.png",
    live: "https://b10-assignment-11-593fd.web.app/",
    clientRepo: "https://github.com/imamhossenbu/HonestView",
    serverRepo: "https://github.com/imamhossenbu/HonestView-Server"
  },
  {
    num: "04",
    category: "full stack",
    name: "MovieVerse",
    title: "project 4",
    description: "Movieverse is an easy-to-use movie portal that allows users to explore movies, view movie details, add and delete movies, and manage their favorite movies.",
    stack: [{ name: "React JS" }, { name: "Express JS" }, { name: "Node JS" }, { name: "MongoDb" }, { name: "Tailwind CSS" }, { name: "Firebase" }, { name: "JWT" },],
    image: "/assets/work/movieverse.png",
    live: "https://b10-a10-movie-portal.netlify.app/",
    clientRepo: "https://github.com/imamhossenbu/movieverse",
    serverRepo: "https://github.com/imamhossenbu/movieverse-server"
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    name: "EcoExplorer",
    description: "Eco-Adventure Experiences is a blog website designed to showcase various eco-friendly travel adventures, including mountain treks, ocean dives, wildlife safaris, and more.",
    stack: [{ name: "React JS" }, { name: "Tailwind CSS" }, { name: "Firebase" }, { name: "DaisyUI" }, { name: "React Router" },],
    image: "/assets/work/eco-explorer.png",
    live: "https://ecoexplorer-b10-09.netlify.app/",
    clientRepo: "https://github.com/imamhossenbu/EcoExplorer",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 6",
    name: "GadgetHeaven",
    description: "GadgetHeaven enables users to browse gadgets by categories or details, and manage their wishlist and cart with ease.",
    stack: [{ name: "React JS" }, { name: "Tailwind CSS" }, { name: "React Router" },],
    image: "/assets/work/gadget-heaven.png",
    live: "https://gadgetheaven-b10-a8.netlify.app/",
    clientRepo: "https://github.com/imamhossenbu/gadget-heaven",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 7",
    name: " Dream 11",
    description: "The BPL Dream 11 Team Selector allows users to build a team by selecting players within a coin-based budget.",
    stack: [{ name: "React JS" }, { name: "Tailwind CSS" },],
    image: "/assets/work/dream-11.png",
    live: "https://b10-a7.surge.sh/",
    clientRepo: "https://github.com/imamhossenbu/dream11-website/tree/main/my-project",
  },
  {
    num: "08",
    category: "frontend",
    title: "project 8",
    name: "Peddy",
    description: "Peddy features dynamic pet listings with details such as name, breed, age, gender, and price. It allows users to filter pets by categories, view detailed information in a modal, and adopt pets through a countdown confirmation modal. ",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "Javascript" }, { name: "API" }],
    image: "/assets/work/peddy.png",
    live: "https://b10-a6-pet-adoption.surge.sh/",
    clientRepo: "https://github.com/imamhossenbu/pat-adoption-website",
  },
  {
    num: "09",
    category: "frontend",
    title: "project 9",
    name: "Donate",
    description: "Donate now to support various causes in Bangladesh. Your contributions will provide crucial relief to those affected by disasters and movements.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "Javascript" },],
    image: "/assets/work/donate.png",
    live: "https://imamhossenbu.github.io/B10-assignment-5/",
    clientRepo: "https://github.com/imamhossenbu/B10-assignment-5",
  },
  {
    num: "10",
    category: "frontend",
    title: "project 10",
    name: "Weather App",
    description: "Weather App is a simple weather application that provides current weather information for any city. Users can search for a city and view the current temperature, humidity, and weather conditions.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "Javascript" },],
    image: "/assets/work/weather-app.png",
    live: "https://imamhossenbu.github.io/weather-app/",
    clientRepo: "https://github.com/imamhossenbu/weather-app",
  },
  {
    num: "11",
    category: "frontend",
    title: "project 11",
    name: "Rinterio",
    description: "Rinterio is a static rental website built with HTML and CSS. It showcases rental items with clean design, allowing users to view item details and explore the layout.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" },],
    image: "/assets/work/rinterio.png",
    live: "https://imamhossenbu.github.io/B10-assignment-3/",
    clientRepo: "https://github.com/imamhossenbu/B10-assignment-3",
  },
  {
    num: "12",
    category: "frontend",
    title: "project 12",
    name: "Fitness",
    description: "The Fitness platform is a static website includes sections like workout programs, BMI calculator, habit formation tips, trainer profiles, and more.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }],
    image: "/assets/work/fitness.png",
    live: "https://imamhossenbu.github.io/B10-assignment2/",
    clientRepo: "https://github.com/imamhossenbu/B10-assignment2",
  },
  {
    num: "13",
    category: "frontend",
    title: "project 13",
    name: "Hero Travel",
    description: "Hero Travel is a static travel website that showcases various travel packages and destinations. It features a clean design and provides information about different travel options.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" },],
    image: "/assets/work/hero-travel.png",
    live: "https://imamhossenbu.github.io/travel-website/",
    clientRepo: "https://github.com/imamhossenbu/travel-website",
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
              <ul className="flex gap-4 flex-wrap">
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
                <Link target="_blank" href={project.live} delayDuration={100}>
                  <Tooltip>
                    <TooltipProvider>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer"><BsArrowUpRight className="text-white text-2xl font-extrabold group-hover:text-accent" /></TooltipTrigger>
                      <TooltipContent><p>Live Project</p></TooltipContent>
                    </TooltipProvider>
                  </Tooltip>
                </Link>
                {project.clientRepo && (
                  <Link href={project.clientRepo} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsGithub className="text-white text-2xl font-extrabold group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent><p>Client Repository</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Server Repo */}
                {project.serverRepo && (
                  <Link href={project.serverRepo} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsGithub className="text-white text-2xl font-extrabold group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent><p>Server Repository</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
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
                      <Image src={project.image} fill className={`object-${project.num === "01" ? "contain" : "cover"}`} alt="" />
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