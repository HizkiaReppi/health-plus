import Image from 'next/image';
import CategoryArticle from './Category';
import writter from '@/assets/icon/writter.svg';
import calendar from '@/assets/icon/calendar.svg';
import clock from '@/assets/icon/clock.svg';
import { formatMonth } from '@/utils/formatTimestamp';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

const DetailArticle = (props) => {
  const formattedDate = formatMonth(props.publishedAt);
  const readingTime = calculateReadingTime(props.content);

  return (
    <div>
      <CategoryArticle category={props.category} />
      <h1 className='text-4xl font-semibold text-black my-5'>{props.title}</h1>
      <div className='flex items-center'>
        <div className='flex items-center gap-2'>
          <Image src={writter} className='w-[11.48px] h-[13.5px]' />
          <span className='h-3 w-[1px] border-[0.1px] border-[#999999]'></span>
          <span className='text-base font-semibold text-[#777777]'>
            {props.author}
          </span>
        </div>
        <div className='flex items-center gap-2 pl-2'>
          <Image src={calendar} className='w-[14px] h-[14.8px]' />
          <span className='h-3 w-[1px] border-[0.1px] border-[#999999]'></span>
          <span className='text-base font-semibold text-[#777777]'>
            {formattedDate}
          </span>
        </div>
        <div className='flex items-center gap-2 pl-2'>
          <Image src={clock} className='w-[14px] h-[14px]' />
          <span className='h-3 w-[1px] border-[0.1px] border-[#999999]'></span>
          <span className='text-base font-semibold text-[#777777]'>
            {readingTime} Menit Baca
          </span>
        </div>
      </div>
      <Image src={props.image} className='w-[797.21px] object-cover mt-8' />
      <div
        className='text-justify text-base mt-10 blog leading-loose'
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
      <hr className='border-primary-500 mt-10' />
    </div>
  );
};

export default DetailArticle;
