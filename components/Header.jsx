import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="w-[95%] md:w-[85%] mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" aria-label="Go to homepage">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00ff19] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
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

                {/* desktop nav */}


                <div className='hidden lg:flex  items-center  gap-8'>
                    <Nav />
                    <Link href="/contact">
                        <Button className="cursor-pointer text-md rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)]">Hire Me</Button>
                    </Link>
                </div>


                {/* mobile nav */}

                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>

        </header>
    )
}

export default Header