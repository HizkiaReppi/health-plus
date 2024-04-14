'use client';

import Link from 'next/link';
import { useState } from 'react';

const NavLink = ({ href, active = false, children }) => {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <Link
      href={href}
      className={`text-base md:text-lg relative ${
        active ? 'text-primary-500' : 'text-black'
      } hover:text-primary-500 duration-100`}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      {children}
      {(active || activeHover) && (
        <span className='absolute left-0 -bottom-2 w-full h-0 md:h-0.5 bg-primary-500 rounded-full' />
      )}
    </Link>
  );
};

export default NavLink;
