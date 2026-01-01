'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Span } from 'next/dist/trace';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `pb-1 border-b-2 transition ${
      pathname === path
        ? 'text-blue-600 border-blue-600'
        : 'border-transparent hover:text-blue-600 hover:border-gray-300'
    }`;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='min-h-screen flex flex-col bg-white'>
      {/* NAVBAR */}
      <header className='border-b border-gray-200 dark:border-gray-800'>
        <nav className='max-w-6xl mx-auto px-2 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            {/* LOGO */}
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-user-round-icon lucide-user-round flex items-center'
              >
                <circle cx='12' cy='8' r='5' />
                <path d='M20 21a8 8 0 0 0-16 0' />
              </svg>
            </div>
            <span className='text-xl font-bold text-black'>
              Abdulaziz Ibrahim
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div
            className={`hidden md:flex space-x-8 text-sm font-medium text-black ${montserrat.className}`}
          >
            <Link href='/about' className={linkStyle('/about')}>
              About
            </Link>

            <Link
              href='/about/projects'
              className={linkStyle('/about/projects')}
            >
              Projects
            </Link>

            <Link href='/about/contact' className={linkStyle('/about/contact')}>
              Contact
            </Link>

            <Link
              href='/about/dedication'
              className={linkStyle('/about/dedication')}
            >
              Dedicated projects
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className='md:hidden text-2xl text-black'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            ☰
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className={`md:hidden border-t text-black flex flex-col border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4 text-sm ${montserrat.className}`}
          >
            <Link
              href='/about'
              className={linkStyle('/about')}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/about/projects'
              className={linkStyle('/about/projects')}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href='/about/contact'
              className={linkStyle('/about/contact')}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href='/about/dedication'
              className={linkStyle('/about/dedication')}
              onClick={() => setMenuOpen(false)}
            >
              Dedicated projects
            </Link>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className='flex-1 bg-gray-200 '>{children}</main>

      {/* FOOTER */}
      <footer
        className={` border-t border-gray-200 dark:border-gray-800 bg-white text-center text-sm text-gray-500 py-4 ${montserrat.className}`}
      >
        © {new Date().getFullYear()} Abdulaziz Ibrahim
      </footer>
    </div>
  );
}
