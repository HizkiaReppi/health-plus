import React from 'react';
import Image from 'next/image';

import DailyChallenge from '@/components/dashboard/DailyChallenge';
import Greeting from '@/components/dashboard/Greeting';

import bgDashboard from '@/assets/bg-dashboard.png';
import Calendar from '@/components/dashboard/Calendar';

export default function DashboardPage() {
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
    </div>
  );
}
