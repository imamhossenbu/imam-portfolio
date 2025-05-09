"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        if (!mediaQuery.matches) return;
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 z-[9999] pointer-events-none rounded-full bg-[#00ff99] mix-blend-difference hidden lg:block"
            style={{ x, y }}
        />
    );
};

export default CustomCursor;
