import image from '@/assets/dr-dian-wulan.png';
import Image from 'next/image';
import { testimonials } from '@/constants/data';

const Testimonials = () => {
  return (
    <section className='px-16 py-24'>
      <div className='flex flex-col items-center mb-14 z-10'>
        <h2 className='title-section'>Apa yang mereka katakan tentang kami?</h2>
        <span className='w-24 h-0.5 bg-primary-500 -mt-3'></span>
      </div>
      <div className='flex flex-wrap justify-center gap-x-10 gap-y-5'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='w-80 h-[133px] bg-primary-50 rounded-md py-3 px-4'
          >
            <div className='flex items-center gap-1.5 mb-2'>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className='rounded-full'
                width={31}
                height={31}
              />
              <div>
                <h5 className='text-base font-semibold'>{testimonial.name}</h5>
                <h6 className='text-xs'>@{testimonial.username}</h6>
              </div>
            </div>
            <p className='text-xs'>"{testimonial.content}"</p>
          </div>
        ))}
        <span className='inline-block w-4/5 h-[1px] bg-primary-500 mt-7'></span>
      </div>
    </section>
  );
};

export default Testimonials;
