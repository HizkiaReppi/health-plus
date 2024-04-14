import Image from 'next/image';
import { tipsAndTrik } from '@/constants/data';

const TipsAndTrik = () => {
  return (
    <section className='px-10 md:px-16 py-20'>
      <div className='flex flex-col items-center mb-16'>
        <h2 className='title-section'>
          Tips & Trik Untuk Hidup Sehat Dan Bahagia
        </h2>
        <h4 className='text-xs md:text-2xl font-medium text-center w-full md:w-[750px]'>
          Hai Pecinta Kesehatan! Di bawah ini ada beberapa tips dan trik yang
          dapat kalian lakukan dengan mudah nih, enjoy!
        </h4>
        <span className='w-20 h-0.5 bg-primary-500 mt-5'></span>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-7 md:gap-y-14'>
        {tipsAndTrik.map((data, index) => (
          <div
            key={index}
            className='w-[180px] h-[180px] lg:w-[374px] lg:h-[371.69px] bg-primary-50 rounded-2xl md:rounded-[45px] p-1.5 md:p-3.5 relative shadow-md md:shadow-xl'
          >
            <Image
              src={data.image}
              alt='Gambar Makan Sayur'
              className='rounded-2xl md:rounded-[45px]'
            />
            <div className='w-[92.5%] h-[93%] bg-gradient-to-b from-transparent to-black absolute top-1.5 left-1.5 md:top-3.5 md:left-3.5 rounded-2xl md:rounded-[45px] z-10'></div>
            <div className='z-20 absolute bottom-7 left-4 md:bottom-14 md:left-8'>
              <h5 className='text-sm md:text-lg lg:text-3xl font-bold uppercase text-[#D9D9D9] mb-1 md:mb-3'>
                {data.title}
              </h5>
              <p className='text-[6px] md:text-[8px] lg:text-base font-semibold text-[#D9D9D9] w-[93%]'>
                {data.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsAndTrik;
