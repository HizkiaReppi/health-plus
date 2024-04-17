import React from 'react';
import calendarIcon from '@/assets/icon/calendar.svg';
import Image from 'next/image';

const WeeklyChallenge = () => {
  return (
    <div>
      <div className='inline-block bg-[#C6F8B9] py-4 px-8 rounded-t-[30px] shadow-md -mt-3'>
        <h4 className='text-sm md:text-base lg:text-lg font-semibold uppercase'>
          TANTANGAN MINGGUAN
        </h4>
      </div>
      <div className='bg-white p-5 shadow-md rounded border-gray-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 mt-5'>
            <Image src={calendarIcon} alt='Calendar Icon' width={13} />
            <p className='text-xs font-semibold'>
              14 April 2024 - 20 April 2024
            </p>
          </div>
          <div className='inline-flex items-center justify-center rounded-[10px] w-9 h-9 md:w-11 md:h-11 p-2 md:p-3 bg-primary-500 text-lg md:text-2xl lg:text-3xl text-white font-semibold'>
            +
          </div>
        </div>
        <div className='bg-primary-100 pb-5 mt-2 rounded-2xl'>
          <div className='bg-black bg-opacity-10 rounded-t-2xl'>
            <h6 className='py-3 px-7 text-base md:text-lg font-semibold text-black opacity-100'>
              OLAHRAGA
            </h6>
          </div>
          <div>
            <div className='mt-3 px-2'>
              <div className='flex items-center ps-4 group'>
                <input
                  id='jogging-setiap-pagi-minimal-30-menit'
                  type='checkbox'
                  name='jogging-setiap-pagi-minimal-30-menit'
                  className='w-5 h-5 md:w-6 md:h-6 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2'
                />
                <label
                  for='jogging-setiap-pagi-minimal-30-menit'
                  className='w-full py-3 ms-4 text-base md:text-lg font-semibold text-black group-checked:line-through'
                >
                  Jogging setiap pagi minimal 30 menit
                </label>
              </div>
            </div>
            <div className='px-2'>
              <div className='flex items-center ps-4'>
                <input
                  id='badminton-setiap-hari-minggu-minimal-1-jam'
                  type='checkbox'
                  name='badminton-setiap-hari-minggu-minimal-1-jam'
                  className='w-5 h-5 md:w-6 md:h-6 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2'
                />
                <label
                  for='badminton-setiap-hari-minggu-minimal-1-jam'
                  className='w-full py-3 ms-4 text-base md:text-lg font-semibold text-black'
                >
                  Badminton setiap hari minggu minimal 1 jam
                </label>
              </div>
            </div>
            <div className='ms-4 px-2'>
              <button className='text-[#999999] text-base md:text-lg font-semibold'>
                Tambah Baru
              </button>
            </div>
          </div>
        </div>
        <div className='bg-primary-100 pb-5 rounded-2xl mt-5'>
          <div className='bg-black bg-opacity-10 rounded-t-2xl'>
            <h6 className='py-3 px-7 text-base md:text-lg font-semibold text-black opacity-100'>
              POLA MAKAN
            </h6>
          </div>
          <div>
            <div className='mt-3 px-2'>
              <div className='flex items-center ps-4'>
                <input
                  id='kurangi-makanan-cepat-saji'
                  type='checkbox'
                  name='kurangi-makanan-cepat-saji'
                  className='w-5 h-5 md:w-6 md:h-6 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-500 focus:ring-2'
                />
                <label
                  for='kurangi-makanan-cepat-saji'
                  className='w-full py-3 ms-4 text-base md:text-lg font-semibold text-black'
                >
                  Kurangi makanan cepat saji
                </label>
              </div>
            </div>
            <div className='ms-4 px-2'>
              <button className='text-[#999999] text-base md:text-lg font-semibold'>
                Tambah Baru
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChallenge;
