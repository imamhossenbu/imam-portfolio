import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="w-[95%] md:w-[85%] mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h2 className='text-4xl font-semibold'>
                        I<span className='text-[var(--accent)]'>H</span>
                    </h2>
                </Link>
                {/* desktop nav */}


                <div className='hidden lg:flex items-center gap-8'>
                    <Nav />
                    <Link href="/contact">
                        <Button className="cursor-pointer text-md rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)]">Hire Me</Button>
                    </Link>
                </div>


                {/* mobile nav */}

                <div className="lg:hidden">
                    <MobileNav/>
                </div>
            </div>

        </header>
    )
}

export default Header