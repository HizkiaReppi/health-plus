'use client';

import React from 'react';
import { FaCheck, FaPencilAlt, FaTrashAlt, FaUndo } from 'react-icons/fa';
import Button from '../utilities/Button';

const DailyChallenge = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toISOString().split('T')[0]
  );

  return (
    <div className='w-full'>
      <div className='inline-block bg-[#C6F8B9] py-4 px-8 rounded-t-[30px] shadow-md -mt-3'>
        <h4 className='text-sm md:text-base lg:text-lg font-semibold uppercase'>
          TANTANGAN HARIAN
        </h4>
      </div>
      <div className='bg-primary-100 p-5 rounded'>
        <div className='flex items-center justify-between mb-3'>
          <input
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='bg-transparent border-transparent ring-transparent focus:ring-0 focus:border-transparent'
          />
          <Button type='button' className='text-sm'>
            Buat Tantangan
          </Button>
        </div>
        <div className='w-full p-5 rounded-2xl bg-white flex flex-col md:flex-row justify-between gap-x-20 gap-y-10 h-full'>
          <div className='w-full'>
            <h5 className='text-sm md:text-base lg:text-lg font-semibold inline-block'>
              Belum Selesai
              <span className='block w-3/5 h-0.5 bg-black'></span>
            </h5>
            <div className='mt-5 pb-4 border-b border-b-black'>
              <h6 className='text-base md:text-lg lg:text-xl font-semibold'>
                Tidak makan mie instan
              </h6>
              <p className='text-xs md:text-sm lg:text-base mt-0.5'>
                Kategori: Pola Makan
              </p>
              <div className='flex items-center gap-3 mt-3'>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-primary-500 hover:bg-primary-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaCheck />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-yellow-500 hover:bg-yellow-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaPencilAlt />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-red-500 hover:bg-red-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaTrashAlt />
                </button>
              </div>
            </div>
            <div className='mt-5 pb-4 border-b border-b-black'>
              <h6 className='text-base md:text-lg lg:text-xl font-semibold'>
                Tidak makan mie instan
              </h6>
              <p className='text-xs md:text-sm lg:text-base mt-0.5'>
                Kategori: Pola Makan
              </p>
              <div className='flex items-center gap-3 mt-3'>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-primary-500 hover:bg-primary-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaCheck />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-yellow-500 hover:bg-yellow-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaPencilAlt />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-red-500 hover:bg-red-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaTrashAlt />
                </button>
              </div>
            </div>
            <div className='mt-5 pb-4 border-b border-b-black'>
              <h6 className='text-base md:text-lg lg:text-xl font-semibold'>
                Tidak makan mie instan
              </h6>
              <p className='text-xs md:text-sm lg:text-base mt-0.5'>
                Kategori: Pola Makan
              </p>
              <div className='flex items-center gap-3 mt-3'>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-primary-500 hover:bg-primary-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaCheck />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-yellow-500 hover:bg-yellow-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaPencilAlt />
                </button>
                <button className='p-2 md:p-2.5 lg:p-3 rounded bg-red-500 hover:bg-red-700 text-sm md:text-base lg:text-lg text-white'>
                  <FaTrashAlt />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-center gap-4 mt-5 mb-5'>
              <button
                type='button'
                className='text-xs font-semibold hover:text-primary-500'
              >
                &lt; Prev
              </button>
              <button
                type='button'
                className='text-xs font-semibold hover:text-primary-500'
              >
                Next &gt;
              </button>
            </div>
          </div>
          <div className='w-full md:w-0.5 h-0.5 md:h-full bg-black' />
          <div className='w-full'>
            <h5 className='text-sm md:text-base lg:text-lg font-semibold inline-block'>
              Selesai
              <span className='block w-3/5 h-0.5 bg-black'></span>
            </h5>
            <div>
              <div className='mt-5 pb-4 border-b border-b-black'>
                <h6 className='text-base md:text-lg lg:text-xl font-semibold'>
                  Tidak makan mie instan
                </h6>
                <p className='text-xs md:text-sm lg:text-base mt-0.5'>
                  Kategori: Pola Makan
                </p>
                <div className='flex items-center gap-3 mt-3'>
                  <button className='p-2 md:p-2.5 lg:p-3 rounded bg-primary-500 hover:bg-primary-700 text-sm md:text-base lg:text-lg text-white'>
                    <FaCheck />
                  </button>
                  <button className='p-2 md:p-2.5 lg:p-3 rounded bg-yellow-500 hover:bg-yellow-700 text-sm md:text-base lg:text-lg text-white'>
                    <FaPencilAlt />
                  </button>
                  <button className='p-2 md:p-2.5 lg:p-3 rounded bg-red-500 hover:bg-red-700 text-sm md:text-base lg:text-lg text-white'>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;
