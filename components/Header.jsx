"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import clsx from "clsx"; // Optional: class merging library

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-black/80 backdrop-blur shadow-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="w-[95%] md:w-[85%] mx-auto flex justify-between items-center transition-all duration-300">
                {/* Logo */}
                <Link href="/" aria-label="Go to homepage">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00ff19] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image
                            src="/assets/profile-logo.png"
                            width={80}
                            height={80}
                            alt="Imam Hossen Logo"
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="cursor-pointer text-md rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)]">
                            Hire Me
                        </Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
