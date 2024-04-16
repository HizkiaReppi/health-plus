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
      <div className='bg-[#C6F8B9] py-4 px-8 rounded-t-[30px]'>
        <h4 className='text-sm md:text-base lg:text-lg font-semibold uppercase'>
          TANTANGAN HARIAN
        </h4>
      </div>
      <div className='bg-primary-100 p-5'>
        <div className='flex items-center justify-between mb-3'>
          <input
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='bg-transparent border-transparent ring-transparent focus:ring-0 focus:border-transparent'
          />
          <Button
            type='button'
            className='text-sm'
            // data-modal-target='crud-modal'
            // data-modal-toggle='crud-modal'
          >
            Buat Tantangan
          </Button>
          <button
            data-modal-target='crud-modal'
            data-modal-toggle='crud-modal'
            className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
          >
            Toggle modal
          </button>
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
          </div>
          <div className='w-full md:w-0.5 h-0.5 md:h-full bg-black' />
          <div className='w-full'>
            <h5 className='text-sm md:text-base lg:text-lg font-semibold inline-block'>
              Selesai
              <span className='block w-3/5 h-0.5 bg-black'></span>
            </h5>
            <div></div>
          </div>
        </div>
      </div>

      <div
        id='crud-modal'
        tabindex='-1'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Create New Product
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='crud-modal'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form className='p-4 md:p-5'>
              <div className='grid gap-4 mb-4 grid-cols-2'>
                <div className='col-span-2'>
                  <label
                    for='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    placeholder='Type product name'
                    required=''
                  />
                </div>
                <div className='col-span-2'>
                  <label
                    for='description'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Product Description
                  </label>
                  <textarea
                    id='description'
                    rows='4'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Write product description here'
                  ></textarea>
                </div>
              </div>
              <button
                type='submit'
                className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <svg
                  className='me-1 -ms-1 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;
