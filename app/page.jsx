"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from 'react-icons/fi'
import { ReactTyped } from 'react-typed';

export default function Home() {
  return (
    <section className=" h-full">
      <div className="w-[95%] md:w-[85%] my-24 lg:my-32 mx-auto h-full">
        <div className="flex flex-col gap-8  lg:flex-row justify-between items-center lg:pt-4 ">
          <div className="text-center order-2 lg:order-none lg:text-left">
            <h1 className="h2 mt-4">
              Hello! I'm <br />
              <ReactTyped
                strings={["Imam Hossen", "A Web Developer", "A Frontend Enthusiast"]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-[var(--accent)]"
              />
            </h1>
            <p className="max-w-[500px] text-white/80 mt-4 mb-6">
              I'm a passionate web developer with a focus on building interactive, user-friendly websites and web applications. I love transforming ideas into reality using modern technologies like React, Tailwind CSS, and Next.js.
            </p>
            {/* social media */}
            <div className="flex flex-col lg:flex-row gap-4  items-center">
              <Button className="cursor-pointer border-1 border-[var(--accent)] hover:border-0 text-md rounded-full text-[var(--accent)] hover:bg-[var(--accent-hover)] hover:text-[var(--primary)]">
                <Link href="/Imam_Hossen_Resume.pdf" download target="_blank"><span>Download CV</span></Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="">
                <Socials containerStyles="flex gap-4" iconStyles="w-9 h-9 border border-[var(--accent)] flex justify-center rounded-full items-center text-[var(--accent)] hover:bg-[var(--accent-hover)] hover:text-[var(--primary)] hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none" >

            <Photo />
          </div>
        </div>
      </div>
      {/* stats section */}

      <div className="w-[95%] md:w-[85%] mx-auto">
        <Stats />
      </div>
    </section>
  );
}
