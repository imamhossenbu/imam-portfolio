"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectLabel, SelectItem, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion"
import { Key } from "lucide-react"


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1624-994532",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "imam62310@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Barisal, Bangladesh",
  },
]


const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="w-[95%] lg:w-[85%] mx-auto my-24 lg:my-32">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form */}
          <div className="order-2 lg:order-none w-full lg:w-[55%] hover:scale-103 transition-all duration-500">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Let's work together</h3>
              <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi reprehenderit unde maxime dolor enim, assumenda perferendis laborum odit nobis.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input type="text" placeholder="First name" />
                <Input type="text" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea className="h-[150px]" placeholder="Type yout messge here..." />
              <div>
                <Button className="cursor-pointer border-1 bg-accent text-md rounded-full text-primary hover:bg-[var(--accent-hover)] outline-none border-none">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center lg:justify-between mb-8 lg:mb-0 w-full lg:w-[45%] hover:scale-103 transition-all duration-500">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-md flex justify-center items-center bg-[#27272c] text-accent">
                      <div className="text-[22px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact