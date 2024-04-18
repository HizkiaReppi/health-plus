import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center my-20 gap-2'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>404</h1>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-1.5'>
        Opps! Maaf Halaman Yang Anda Tuju Tidak Tersedia
      </h2>
      <Link
        href='/'
        className='inline-block text-white hover:text-white py-3 px-5 rounded-md bg-primary-500 hover:bg-primary-800 mt-6'
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}
