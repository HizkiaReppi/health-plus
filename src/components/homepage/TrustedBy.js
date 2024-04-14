import Image from 'next/image';
import { trustedBy } from '@/constants/data';

const TrustedBy = () => {
  return (
    <section className='px-10 md:px-16 py-8 border-t border-black border-b'>
      <h2 className='title-section'>Telah Dipercaya Oleh</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-5 md:gap-10'>
        {trustedBy.map((doctor, index) => (
          <div
            key={index}
            className='rounded bg-primary-100 p-2 flex items-start gap-2 h-[54px] md:h-[91px] w-[190px] md:w-[260px] flex-shrink-0'
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              className='self-center w-[25px] h-[25px] md:w-[58px] md:h-[58px]'
            />
            <div className='flex flex-col justify-center gap-0.5 mt-1 md:mt-2'>
              <h3 className='text-[10px] md:text-sm font-bold text-black'>
                {doctor.name}
              </h3>
              <p className='text-[7px] md:text-[10px] text-black'>
                {doctor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
