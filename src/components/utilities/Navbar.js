import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
import Button from './Button';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 flex justify-between items-center px-16 py-5 bg-primary-50 z-50 shadow-lg'>
      <Link href='/'>
        <Image src={logo} height={60} />
      </Link>
      <ul className='flex justify-between items-center gap-10'>
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
    </nav>
  );
};

export default Navbar;
