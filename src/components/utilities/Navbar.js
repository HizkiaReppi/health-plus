'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import logo from '@/assets/logo.svg';
import Button from './Button';
import NavLink from './NavLink';
import { useAuth } from '@/app/(app)/providers';

const Navbar = () => {
  const pathname = usePathname();
  const { token, logout } = useAuth();

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
        <Image src={logo} alt='Health Plus' className='w-32 md:w-52' />
      </Link>

      {/* Menu */}
      <ul className='hidden md:flex justify-between items-center gap-10'>
        <li>
          <NavLink href='/' active={pathname == '/'}>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            href='/tentang-kami'
            active={pathname.startsWith('/tentang-kami')}
          >
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink href='/artikel' active={pathname.startsWith('/artikel')}>
            Artikel
          </NavLink>
        </li>
        {!token ? (
          <>
            <li>
              <Link href='/masuk'>
                <Button outline={true}>Masuk</Button>
              </Link>
            </li>
            <li>
              <Link href='/daftar'>
                <Button>Daftar</Button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Button outline={true} onClick={logout}>
                Keluar
              </Button>
            </li>
            <li>
              <Link href='/dashboard'>
                <Button>Dashboard</Button>
              </Link>
            </li>
          </>
        )}
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
          <NavLink href='/' active={pathname == '/'}>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            href='/tentang-kami'
            active={pathname.startsWith('/tentang-kami')}
          >
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink href='/artikel' active={pathname.startsWith('/artikel')}>
            Artikel
          </NavLink>
        </li>
        <li>
          <Link href='/masuk'>
            <Button className='px-3 py-2 text-sm' outline={true}>
              Masuk
            </Button>
          </Link>
        </li>
        <li>
          <Link href='/daftar'>
            <Button className='px-3 py-2 text-sm'>Daftar</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
