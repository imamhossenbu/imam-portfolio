import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center">
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
                        <Button className="cursor-pointer bg-black hover:bg-[var(--accent-hover)] hover:text-white">Hire Me</Button>
                    </Link>
                </div>


                {/* mobile nav */}

                <div className="lg:hidden">
                    <h1>mobile nav</h1>
                </div>
            </div>

        </header>
    )
}

export default Header