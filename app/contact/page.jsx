"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import toast from 'react-hot-toast';


const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+880) 1624-994532" },
  { icon: <FaEnvelope />, title: "Email", description: "imam62310@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Barisal, Bangladesh" },
]

const Contact = () => {
  const form = useRef(null)
  // console.log(form.current);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rsj96lp',
        'template_bhzae8f',
        form.current,
        '2WOAspDuf-PhHAO40'
      )
      .then(() => {
        toast.success("Message sent successfully!")
        form.current.reset()
      })
      .catch((error) => {
        console.error("EmailJS error:", error)
        toast.error("Failed to send message. Please try again.")
      })

  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
      <div className="w-[95%] lg:w-[85%] mx-auto my-24 lg:my-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* form */}
          <div className="order-2 lg:order-none w-full lg:w-[55%] hover:scale-103 transition-all duration-500">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Let’s Connect</h3>
              <p className="text-white/70">Have a project in mind or just want to say hello? Feel free to drop me a message.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input name="first_name" type="text" placeholder="First Name" required />
                <Input name="last_name" type="text" placeholder="Last Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" type="tel" placeholder="Phone Number" />
              </div>
              <Textarea name="message" className="h-[150px]" placeholder="Write your message here..." required />
              <div>
                <Button type="submit" className="cursor-pointer border-1 bg-accent text-md rounded-full text-primary hover:bg-[var(--accent-hover)] outline-none border-none">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center justify-center lg:justify-between mb-8 lg:mb-0 w-full lg:w-[45%] hover:scale-103 transition-all duration-500">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-md flex justify-center items-center bg-[#27272c] text-accent">
                    <div className="text-[22px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
