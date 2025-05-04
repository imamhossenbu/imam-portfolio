"use client"

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { Button } from './ui/button';

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
        <CiMenuFries className='text-[32px] text-[var(--accent)]' />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        <div className='mt-28 mb-12 text-center'>
          <Link href="/" onClick={handleClose}>
            <h2 className='text-4xl font-semibold'>
              I<span className='text-[var(--accent)]'>H</span>
            </h2>
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
