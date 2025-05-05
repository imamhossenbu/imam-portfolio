"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaWordpress
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGnubash,
  SiGsap,
  SiBootstrap,
  SiNextdotjs
} from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Hi! I'm Imam Hossen, a passionate web developer and 2nd-year CSE student at the University of Barisal. My journey began with a curiosity about how websites work, which quickly turned into a love for creating responsive, user-friendly, and visually appealing web experiences. I specialize in technologies like React, Tailwind CSS, and API integration, constantly striving to expand my knowledge and improve with each project. Beyond coding, I enjoy reading for personal growth, hiking in nature, playing chess to sharpen my thinking, and unwinding with music.",
  Info: [
    {
      fieldname: "Name",
      fieldvalue: "Imam Hossen"
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+880) 1624 994532"
    },
    {
      fieldname: "Email",
      fieldvalue: "imam62310@gmail.com"
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Bangladeshi"
    },
    {
      fieldname: "Language",
      fieldvalue: "Bangla, English, Hindi"
    }
  ]
};


const education = {
  icon: "/assets/resume/cup.svg",
  title: "My education",
  description:
    "Focused on computer science fundamentals and hands-on web development experience, gaining practical knowledge and technical proficiency.",
  items: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development",
      duration: "2024 - 2025"
    },
    {
      institution: "University Of Barisal",
      degree: "BSc in Computer Science & Engineering",
      duration: "2022 - In progress..."
    },
    {
      institution: "Gachbaria Govt. College",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2019 - 2021"
    },
    {
      institution: "Chamball High School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2017 - 2019"
    }
  ]
};

const skills = {
  title: "My skills",
  description:
    "Proficient in front-end and back-end technologies with experience in modern frameworks, databases, and development tools.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" }
  ]
};



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="flex justify-center "
  >
    <div className="w-[95%] md:w-[85%] mx-auto">
      <Tabs defaultValue="about" className="flex flex-col lg:flex-row gap-[70px]">
        {/* Sidebar Tabs */}

        <TabsList className="flex flex-col w-full max-w-[300px] mx-auto mt-[65px] lg:mx-0 gap-4">
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* Content Area */}
        <div className="flex-1 w-full">
          <TabsContent className="w-full" value="about">
            <div className="flex flex-col gap-10 text-center lg:text-left py-10 lg:pt-0">
              <h3 className="text-3xl md:text-4xl font-bold">{about.title}</h3>

              {/* Description */}
              <p className="max-w-3xl text-white/70 mx-auto lg:mx-0 whitespace-pre-line">
                {about.description}
              </p>

              {/* Info Cards */}
              <ScrollArea className="h-[300px]">
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 max-w-4xl mx-auto lg:mx-0">
                  {about.Info.map((info, index) => (
                    <div
                      key={index}
                      className="bg-[#232329] border border-white/10 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                    >
                      <h4 className="text-sm text-accent font-semibold uppercase tracking-wide">
                        {info.fieldname}
                      </h4>
                      <p className="text-white text-lg font-medium mt-2">{info.fieldvalue}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent className='w-full h-full' value="education">
            {/* Education Content */}
            <div className="flex flex-col gap-[25px] text-center lg:text-left pt-10 lg:pt-0 ">
              <h3 className="text-3xl md:text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/70 mx-auto lg:mx-0">{education.description}</p>
            </div>
            <div>
              <div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] my-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-4 space-y-1 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-lg"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[250px] min-h-[80px] font-semibold text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/70">{item.institution}</p>
                          </div>
                        </li>

                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
          <TabsContent className='w-full' value="skills">
            {/* Skills Content */}
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[25px] text-center lg:text-left pt-10 lg:pt-0 ">
                <h3 className="text-3xl md:text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto lg:mx-0">{skills.description}</p>
              </div>
              <div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20  gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          {/* Wrap TooltipTrigger and TooltipContent inside TooltipProvider */}
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] rounded-xl bg-[#232329] flex justify-center items-center group transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-lg">
                                <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>

              </div>

            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>

};

export default Resume;

