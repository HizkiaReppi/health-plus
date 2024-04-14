'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import logo from '@/assets/logo.svg';
import Button from './Button';
import NavLink from './NavLink';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < -1) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);

  return (
    <nav className='sticky top-0 left-0 flex justify-between items-center px-10 md:px-16 py-5 bg-primary-50 z-50 shadow-lg'>
      <Link href='/'>
        <Image src={logo} className='w-32 md:w-52' />
      </Link>

      {/* Menu */}
      <ul className='hidden md:flex justify-between items-center gap-10'>
        <li>
          <NavLink href='/' active={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/blog'>Blog</NavLink>
        </li>
        <li>
          <Link href='/login'>
            <Button outline={true}>Login</Button>
          </Link>
        </li>
        <li>
          <Link href='/register'>
            <Button>Register</Button>
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className='block md:hidden'
        onClick={handleClick}
        onScroll={handleClick}
      >
        {!nav ? (
          <HiMenuAlt3 className='text-3xl cursor-pointer' />
        ) : (
          <MdClose className='text-3xl cursor-pointer' />
        )}
      </div>

      {/* Menu Mobile */}
      <ul
        className={
          !nav
            ? 'absolute top-[-500px] left-0 flex md:hidden w-full opacity-0 duration-200 ease'
            : 'absolute top-full left-0 flex md:hidden flex-col gap-3 w-full shadow-md text-left duration-200 ease px-10 bg-primary-50 pb-5'
        }
      >
        <li>
          <NavLink href='/' active={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/blog'>Blog</NavLink>
        </li>
        <li>
          <Link href='/login'>
            <Button className='px-3 py-2 text-sm' outline={true}>
              Login
            </Button>
          </Link>
        </li>
        <li>
          <Link href='/register'>
            <Button className='px-3 py-2 text-sm'>Register</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
