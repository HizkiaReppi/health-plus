'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/(app)/providers';

import DailyChallenge from '@/components/dashboard/DailyChallenge';
import Greeting from '@/components/dashboard/Greeting';
import Calendar from '@/components/dashboard/Calendar';
import WeeklyChallenge from '@/components/dashboard/WeeklyChallenge';
import MonthlyGoals from '@/components/dashboard/MonthlyGoals';

import bgDashboard from '@/assets/weekly-plan/dashboard-header.png';
import polaMakanImage from '@/assets/weekly-plan/pola-makan.png';
import aktivitasImage from '@/assets/weekly-plan/aktivitas.png';
import terapiImage from '@/assets/weekly-plan/terapi.png';

export default function DashboardPage() {
  const { token } = useAuth();

  const router = useRouter();

  // if (!token) {
  //   router.push('/masuk');
  //   return null;
  // }

  return (
    <div>
      <header className='relative'>
        <Image
          src={bgDashboard}
          alt='Dashboard Background'
          className='w-full object-cover'
        />
        <h1 className='absolute top-8 md:top-16 lg:top-24 flex justify-center w-full text-3xl md:text-4xl lg:text-5xl font-bold italic leading-8 text-center text-[#017063]'>
          “A Healthy Outside <br /> Start From The Inside”
        </h1>
      </header>
      <section className='px-10 md:px-16 my-8'>
        <Greeting />
      </section>
      <section className='px-10 md:px-16 my-8 flex flex-col-reverse md:flex-row justify-between gap-x-20 gap-y-10 items-center md:items-start'>
        <div className='w-full'>
          <DailyChallenge />
        </div>
        <div>
          <Calendar />
        </div>
      </section>
      <section className='px-10 md:px-16 my-8 flex flex-col-reverse md:flex-row justify-between gap-x-20 gap-y-10 items-center md:items-start'>
        <div className='w-full'>
          <WeeklyChallenge />
        </div>
        <div className='w-full'>
          <MonthlyGoals />
        </div>
      </section>
      <section className='my-8 px-10 md:px-16'>
        <h6 className='px-5 md:px-8 uppercase text-xl font-semibold'>
          Rencana Mingguan
        </h6>
        <div className='bg-gradient-to-b from-[#BFF6D2] to-[#80B8AD] py-8 px-10 rounded-[30px] mt-4'>
          <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>
            Buat Rencana Pola Hidup Sehat Mingguan Anda!
          </p>
          <p className='text-sm md:text-base lg:text-lg font-semibold mt-5'>
            Anda bisa membuat Rencana Pola Hidup Sehat Mingguan berdasarkan tiga
            kategori dibawah ini.
            <br />
            Ayo buat sekarang!
          </p>
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
      </section>
    </div>
  );
}
