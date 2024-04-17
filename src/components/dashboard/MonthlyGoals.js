import calendarIcon from '@/assets/icon/calendar.svg';
import Image from 'next/image';

const MonthlyGoals = () => {
  return (
    <div>
      <div className='flex justify-end w-full'>
        <div className='inline-flex bg-[#C6F8B9] py-4 px-8 rounded-t-[30px] shadow-md -mt-3'>
          <h4 className='text-sm md:text-base lg:text-lg font-semibold uppercase'>
            TUJUAN BULANAN
          </h4>
        </div>
      </div>
      <div className='bg-[#E1F9E9] p-5 shadow-md rounded border-gray-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 mt-5'>
            <Image src={calendarIcon} alt='Calendar Icon' width={16} />
            <p className='text-base font-semibold'>April 2024</p>
          </div>
          <div className='inline-flex items-center justify-center rounded-[10px] w-9 h-9 md:w-11 md:h-11 p-2 md:p-3 bg-primary-500 text-lg md:text-2xl lg:text-3xl text-white font-semibold'>
            +
          </div>
        </div>
        <div className='pb-5 mt-2 rounded-2xl pt-3'>
          <div className='mt-3'>
            <div className='mt-3 px-2'>
              <div className='flex items-center ps-4 pe-4 py-0 rounded-md border border-gray-400 group'>
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
            <div className='px-2 mt-3'>
              <div className='flex items-center ps-4 pe-4 py-0 rounded-md border border-gray-400 group'>
                <button className='text-[#999999] py-3 ms-1 text-base md:text-lg font-semibold'>
                  Tambah Baru
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyGoals;
