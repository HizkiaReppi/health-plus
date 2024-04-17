'use client';

import Image from 'next/image';
import cekKebiasaanImage from '@/assets/cek-kebiasaan-background.png';
import Link from 'next/link';
import { useAuth } from '../providers';
import { useRouter } from 'next/navigation';

export default function CekKebiasaanPage() {
  const { token } = useAuth();

  const router = useRouter();

  if (!token) {
    router.push('/masuk');
    return null;
  }

  return (
    <div>
      <Image
        src={cekKebiasaanImage}
        alt='Cek Kebiasaan Image'
        className='w-full object-cover'
      />
      <div className='px-10 md:px-16 py-10'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>
          Yuk, Ketahui Pola Hidupmu!
        </h1>
        <p className='text-base md:text-lg lg:text-xl mt-3'>
          Tes ini bertujuan untuk mengetahui jenis pola hidup yang dijalani.
          Sayangi dirimu dimulai dengan pola hidup yang sehat!
        </p>
        <Link
          href='/cek-kebiasaan/pertanyaan'
          className='inline-block btn-primary mt-5 hover:text-white'
        >
          Mulai
        </Link>
        <div className='mt-12'>
          <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>
            Panduan mengerjakan Tes:{' '}
          </h4>
          <ol className='text-base md:text-lg lg:text-xl mt-3'>
            <li>
              Semua jawaban benar. Isilah sesuai dengan pola hidup yang kamu
              jalani.
            </li>
            <li>Tidak ada waktu pengerjaan.</li>
            <li>Hasil tes dapat dilihat setelah mengisi semua pertanyaan.</li>
          </ol>
          <p className='mt-5'>Selamat mengerjakan!</p>
        </div>
      </div>
    </div>
  );
}
