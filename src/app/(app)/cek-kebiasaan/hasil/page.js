import Image from 'next/image';
import React from 'react';
import overviewIlustration from '@/assets/assesment/overview-ilustration.jpg';

export default function AssesmentResult() {
  return (
    <div className='px-10 md:px-16 mb-10 mt-14'>
      <div className='flex flex-col md:flex-row items-center gap-20 mt-8 mx-0 md:mx-10 lg:mx-20'>
        <Image
          src={overviewIlustration}
          alt='Overview Ilustration'
          className='w-96 rounded'
        />
        <div>
          <h1 className='text-4xl font-semibold'>
            Ringkasan Skor Kebiasaan Anda
          </h1>
          <div>
            <div className='flex items-center gap-3 mt-3 mb-4'>
              <div className='text-white text-lg font-semibold mt-2 p-3 bg-primary-500 rounded'>
                75
              </div>
              <div className='text-white text-lg font-semibold mt-2 p-3 bg-primary-500 rounded'>
                90
              </div>
              <div className='text-white text-lg font-semibold mt-2 p-3 bg-primary-500 rounded'>
                80
              </div>
            </div>
            <hr className='my-3 border-2 border-black' />
            <div>
              <h4 className='mt-4 mb-3 font-semibold'>
                Hasil cek kebiasaan anda:
              </h4>
              <div className='text-white text-lg font-semibold mt-2 py-3 px-4 bg-primary-500 rounded'>
                Lumayan Baik
              </div>
            </div>
          </div>
          <p className='mt-3 text-justify leading-8'>
            Hasil cek kebiasaan Anda menunjukkan bahwa Anda memiliki kebiasaan
            yang cukup baik, namun masih ada ruang untuk meningkatkan beberapa
            area. Penting untuk tetap memperhatikan pola makan yang sehat, rutin
            berolahraga, dan menjaga kesehatan mental Anda. Tetaplah berkomitmen
            untuk menjaga kesehatan tubuh Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
