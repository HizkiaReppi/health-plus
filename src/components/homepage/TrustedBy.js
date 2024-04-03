import Image from 'next/image';
import { trustedBy } from '@/constants/data';

const TrustedBy = () => {
  return (
    <section className='px-16 py-8 border-t border-black border-b'>
      <h2 className='title-section'>Telah Dipercaya Oleh</h2>
      <div className='flex items-center gap-10 w-screen relative'>
        {trustedBy.map((doctor, index) => (
          <div
            key={index}
            className='rounded bg-primary-100 p-2 flex items-start gap-2 h-[91px] w-[260px] flex-shrink-0'
          >
            <Image src={doctor.image} className='self-center' />
            <div className='flex flex-col justify-center gap-0.5 mt-2'>
              <h3 className='text-sm font-bold text-black'>{doctor.name}</h3>
              <p className='text-[10px] text-black'>{doctor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
