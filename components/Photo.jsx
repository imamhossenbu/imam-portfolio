"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.8,
                    ease: "easeInOut",
                },
            }}
            className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Rotating SVG ring */}
            <motion.svg
                className="absolute w-full h-full"
                viewBox="0 0 200 200"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="100"
                    cy="100"
                    r="95"
                    stroke="#00ff99"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "4 6 4 6" }}
                    animate={{
                        strokeDasharray: [
                            "4 6 4 6",
                            "3 5 2 4",
                            "5 3 5 3",
                            "10 12 7 13",
                        ],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>

            {/* Profile image with scale & fade-in */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.8,
                        ease: "easeInOut",
                    },
                }}
                className="relative w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden z-10 shadow-xl"
            >
                <Image
                    src="/assets/profile.jpg"
                    alt="imam-profile"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </motion.div>
        </motion.div>
    );
};

export default Photo;
