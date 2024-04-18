'use client';

import { usePathname } from 'next/navigation';
import Button from '../utilities/Button';
import Link from 'next/link';

const NavAssesment = () => {
  const pathname = usePathname();

  return (
    <div className='px-10 md:px-16 my-10 flex items-center flex-wrap gap-5'>
      <Link href='/cek-kebiasaan/hasil'>
        <Button outline={pathname !== '/cek-kebiasaan/hasil'}>Ringkasan</Button>
      </Link>
      <Link href='/cek-kebiasaan/hasil/kesehatan-mental'>
        <Button outline={pathname !== '/cek-kebiasaan/hasil/kesehatan-mental'}>
          Kesehatan Mental
        </Button>
      </Link>
      <Link href='/cek-kebiasaan/hasil/pola-makan'>
        <Button outline={pathname !== '/cek-kebiasaan/hasil/pola-makan'}>
          Pola Makan
        </Button>
      </Link>
      <Link href='/cek-kebiasaan/hasil/aktivitas-fisik'>
        <Button outline={pathname !== '/cek-kebiasaan/hasil/aktivitas-fisik'}>
          Aktivitas Fisik
        </Button>
      </Link>
    </div>
  );
};

export default NavAssesment;
