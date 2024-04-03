import Image from 'next/image';
import MakanSayurImage from '@/assets/makan-sayur-image.png';

import { tipsAndTrik } from '@/constants/data';

const TipsAndTrik = () => {
  return (
    <section className='px-16 py-20'>
      <div className='flex flex-col items-center mb-16'>
        <h2 className='title-section'>
          Tips & Trik Untuk Hidup Sehat Dan Bahagia
        </h2>
        <h4 className='text-2xl font-medium text-center w-[750px]'>
          Hai Pecinta Kesehatan! Di bawah ini ada beberapa tips dan trik yang
          dapat kalian lakukan dengan mudah nih, enjoy!
        </h4>
        <span className='w-20 h-0.5 bg-primary-500 mt-5'></span>
      </div>
      <div className='flex flex-wrap items-center justify-between gap-y-14'>
        {tipsAndTrik.map((data, index) => (
          <div
            key={index}
            className='w-[374px] h-[371.69px] bg-primary-50 rounded-[45px] p-3.5 relative'
          >
            <Image
              src={data.image}
              alt='Gambar Makan Sayur'
              className='rounded-[45px]'
            />
            <div className='w-[92.5%] h-[93%] bg-gradient-to-b from-transparent to-black absolute top-3.5 left-3.5 rounded-[45px] z-10'></div>
            <div className='z-20 absolute bottom-14 left-8'>
              <h5 className='text-4xl font-bold uppercase text-[#D9D9D9] mb-3'>
                {data.title}
              </h5>
              <p className='text-base font-semibold text-[#D9D9D9]'>
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
