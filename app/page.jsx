import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="w-[95%] md:w-[85%] mx-auto h-full">
        <div className="flex flex-col gap-8  lg:flex-row justify-between items-center lg:pt-8 lg:pb-12">
          <div className="text-center order-2 lg:order-none lg:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mt-4">Hello I'm <br /> <span className="text-[var(--accent)]">Imam Hossen</span></h1>
            <p className="max-w-[500px] text-white/80 mt-4 mb-6">
              I'm a passionate web developer with a focus on building interactive, user-friendly websites and web applications. I love transforming ideas into reality using modern technologies like React, Tailwind CSS, and Next.js.
            </p>
            {/* social media */}
            <div className="flex flex-col lg:flex-row gap-6  items-center">
              <Button className="cursor-pointer border-1 hover:border-0 text-md rounded-full text-[var(--accent)] hover:bg-[var(--accent-hover)] hover:text-[var(--primary)]">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="">
                <Socials containerStyles="flex gap-6" iconStyles="w-8 h-8 border border-[var(--accent)] flex justify-center rounded-full items-center text-[var(--accent)] hover:bg-[var(--accent-hover)] hover:text-[var(--primary)] hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none" >

            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
