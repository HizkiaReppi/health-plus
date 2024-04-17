import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import polaMakanImage from '@/assets/weekly-plan/pola-makan.png';
import aktivitasImage from '@/assets/weekly-plan/aktivitas.png';
import terapiImage from '@/assets/weekly-plan/terapi.png';
import bannerAktivitas from '@/assets/weekly-plan/banner-aktivitas.png';
import WeeklyPlanCard from '@/components/dashboard/WeeklyPlanCard';
import CardArticle from '@/components/utilities/CardArticle';
import { articleData } from '@/constants/article_dummy_data';

export default function WeeklyPlanActivity() {
  const articles = articleData.filter(
    (article) => article.category === 'Aktivitas Fisik'
  );

  const article = articles.slice(0, 3);

  return (
    <div>
      <div className='mx-10 md:mx-16 px-10 md:px-16 py-10 bg-gradient-to-b from-[#DCFCE7] to-[#839689] rounded-[15px] md:rounded-[30px] mt-14'>
        <h2 className='px-5 md:px-8 uppercase text-xl font-semibold'>
          Rencana Mingguan
        </h2>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-7'>
          <div className='flex flex-col content-center gap-5'>
            <Image
              src={polaMakanImage}
              alt='Pola Makan Image'
              className='w-[366px] object-cover'
            />
            <Link
              href='/dashboard/rencana-mingguan/pola-makan'
              className='inline-block btn-primary text-center hover:text-white'
            >
              Pola Makan Mingguan
            </Link>
          </div>
          <div className='flex flex-col content-center gap-5'>
            <Image
              src={aktivitasImage}
              alt='Pola Makan Image'
              className='w-[366px] object-cover'
            />
            <Link
              href='/dashboard/rencana-mingguan/aktivitas-fisik'
              className='inline-block btn-primary text-center hover:text-white'
            >
              Aktivitas Mingguan
            </Link>
          </div>
          <div className='flex flex-col content-center gap-5'>
            <Image
              src={terapiImage}
              alt='Pola Makan Image'
              className='w-[366px] object-cover'
            />
            <Link
              href='/dashboard/rencana-mingguan/kesehatan-mental'
              className='inline-block btn-primary text-center hover:text-white'
            >
              Terapi Mingguan
            </Link>
          </div>
        </div>
      </div>
      <div className='relative mt-14'>
        <Image
          src={bannerAktivitas}
          alt='Banner Aktivitas'
          className='w-full'
        />
        <div className='absolute left-10 md:left-48 top-1/3'>
          <h5 className='text-base md:text-lg lg:text-3xl font-semibold text-white'>
            Buat Rencana Aktifitas Fisik Mingguan Anda Sekarang!
          </h5>
          <p className='text-xs md:sm lg:text-xl font-semibold mt-2 text-white'>
            Buatlah dengan mengisi template dibawah ini.
          </p>
        </div>
      </div>
      <div className='mx-10 md:mx-16 mt-24'>
        <p className='text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center mb-24'>
          April 2024
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 justify-items-center mb-20'>
          <WeeklyPlanCard
            name='Jogging'
            date='12 April 2024'
            time='Pagi'
            duration='1 Jam'
            description='Jarak tempuh 2km, Mulai dari rumah hingga Stadion'
          />
          <WeeklyPlanCard
            name='Bersepeda'
            date='13 April 2024'
            time='Siang'
            duration='2 Jam'
            description='Jarak tempuh 4 Km, Mulai dari rumah hingga GOR'
          />
          <WeeklyPlanCard
            name='Memancing'
            date='13 April 2024'
            time='Sore'
            duration='3 Jam'
            description='Lokasi di Pemancingan Tirta Ayu'
          />
          <div className='bg-[#E5E7EB] opacity-[44%] p-5 text-center w-full h-full rounded-2xl shadow-md grid place-items-center'>
            <button
              type='button'
              className='py-3 px-5 rounded-[10px] bg-[#E0E0E1] hover:bg-gray-400 text-black hover:text-white text-xl font-semibold mt-5'
            >
              Tambah Data
            </button>
          </div>
        </div>
      </div>
      <div className='mx-10 md:mx-16 mt-24'>
        <h2 className='uppercase text-xl md:text-2xl lg:text-3xl textt-center font-semibold'>
          Rekomendasi
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-10'>
          {article.map((article) => (
            <CardArticle {...article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
