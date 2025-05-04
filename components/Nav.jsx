"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },

]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='text-white flex gap-8'>
            {
                links.map((link, index) => {
                    return <Link key={index} href={link.path} 
                    className={`${link.path === pathname && "text-[var(--accent)] border-b-2 border-[var(--accent)]"} font-medium hover:text-[var(--accent-hover)] transition-all`}>{link.name}</Link>
                })
            }
        </nav >
    )
}

export default Nav