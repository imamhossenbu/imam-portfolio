"use client"

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className='text-[32px] text-[var(--accent)]' />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        <div className='mt-28 mb-12 flex justify-center items-center'>
          <Link onClick={handleClose} href="/" aria-label="Go to homepage">
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
        </div>

        <nav className='text-white flex flex-col justify-center items-center gap-8'>
          {
            links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleClose}
                className={`${link.path === pathname ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : ""} font-medium hover:text-[var(--accent-hover)] transition-all`}
              >
                {link.name}
              </Link>
            ))
          }
        </nav>
        <div className='text-center mt-6'>
          <Link onClick={handleClose} href="/contact">
            <Button className="cursor-pointer rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)]">Hire Me</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
