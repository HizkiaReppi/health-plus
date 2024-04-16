import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';
import footerBackground from '@/assets/footer-background.png';
import { footerLinks, footerSocialMedia } from '@/constants/data';
import logo from '@/assets/logo.svg';
import Input from './Input';
import Button from './Button';

const Footer = () => {
  return (
    <footer className='w-full relative bg-primary-100'>
      <div className='absolute w-full'>
        <Image
          src={footerBackground}
          alt='Footer Background'
          className='object-cover min-w-full'
        />
      </div>
      <div className='z-10 absolute top-40 md:top-80 px-16 bg-primary-100 w-full'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-14'>
          <div>
            <Image src={logo} alt='Health Plus' height={80} />
            <p className='text-sm text-justify my-6 w-full md:w-[515px]'>
              <span className='text-[#8BD039] font-bold'>Health</span>
              <span className='text-[#70C3DE] font-bold'>Plus</span>, teman Anda
              dalam perjalanan menuju gaya hidup sehat yang menyenangkan! Kami
              memberikan Anda berbagai tip dan trik ramah remaja serta saran
              untuk membantu Anda menjalani hidup dengan semangat dan energi
              positif.
            </p>
            <div className='flex items-center gap-3'>
              {footerSocialMedia.map((socialMedia, index) => (
                <Link
                  key={index}
                  title={socialMedia.title}
                  href={socialMedia.href}
                  className='w-10 h-10 rounded-md border border-black hover:border-primary-500 inline-flex justify-center items-center'
                >
                  {socialMedia.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
              <div className='flex items-center gap-4 w-full'>
                <div className='w-12 h-12 rounded-md bg-primary-200 flex justify-center items-center'>
                  <MdOutlineEmail className='text-3xl' />
                </div>
                <div>
                  <p className='text-base font-semibold text-nowrap'>
                    Masukan Email Anda
                  </p>
                  <p className='text-xs w-full md:w-36'>
                    Tetap update dengan tips kesehatan terbaru!
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Input type='email' placeholder='Masukan Email Anda' />
                <Button className='py-3.5 px-3.5'>
                  <FaArrowRight className='text-lg' />
                </Button>
              </div>
            </div>
            <div className='mt-9 flex flex-wrap items-start gap-x-[75px]'>
              {footerLinks.map((footerLink) => (
                <div key={footerLink.title}>
                  <p className='text-base font-semibold'>{footerLink.title}</p>
                  <ul className='text-xs'>
                    {footerLink.links.map((link) => (
                      <li key={link.title} className='mt-3.5'>
                        <Link href={link.href}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='my-10 pt-5 border-t border-t-black text-center text-xs md:text-base'>
          <p>&copy; Copyright 2024 - HealthPlus | Dikembangkan oleh 7Teen </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
