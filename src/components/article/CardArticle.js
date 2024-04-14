import { formatTimestamp } from '@/utils/formatTimestamp';
import Category from './Category';
import TextWithEllipsis from '../utilities/TextWithEllipsis';
import Link from 'next/link';
import { calculateReadingTime } from '@/utils/calculateReadingTime';
import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';
import { RiCalendar2Line } from 'react-icons/ri';
import { FaRegClock } from 'react-icons/fa';

const CardArticle = ({
  category,
  title,
  author,
  published,
  content,
  slug,
  image,
  className,
  imageLeft = false,
  withImage = true,
}) => {
  const formattedDate = formatTimestamp(published);
  const readingTime = calculateReadingTime(content);

  return (
    <div
      className={`flex gap-10 ${
        imageLeft ? 'flex-row w-[697px]' : 'flex-col w-96'
      } ${className}`}
    >
      {imageLeft ? (
        <div className='relative rounded-[10px] w-[600px] h-[200px] overflow-hidden mt-4'>
          <div className='absolute inset-0 bg-gradient z-10 opacity-30'></div>
          <Image
            src={image}
            alt={title}
            className='rounded-[10px] w-[600px] h-[200px] object-cover'
          />
        </div>
      ) : null}
      <div>
        <Category category={category} />
        <h3 className='text-xl font-semibold mt-5'>
          <Link href={`/article/${slug}`}>{title}</Link>
        </h3>
        {withImage == true && imageLeft == false ? (
          <div className='relative rounded-[10px] h-[200px] overflow-hidden mt-4'>
            <div className='absolute inset-0 bg-gradient z-10 opacity-30'></div>
            <Image
              src={image}
              alt={title}
              className='rounded-[10px] w-full h-[200px] object-cover'
            />
          </div>
        ) : null}
        <div className='flex items-start gap-2 my-4 text-[#777777]'>
          <div className='flex gap-1'>
            <LuUser2 className='text-xs md:text-sm' />
            <p className='text-xs font-regular'>{author}</p>
          </div>
          <span className='h-[13px] w-[1px] border-[0.1px] border-[#777777]'></span>
          <div className='flex gap-1'>
            <RiCalendar2Line className='text-xs md:text-sm' />
            <time className='text-xs font-regular'>{formattedDate}</time>
          </div>
          <span className='h-[13px] w-[1px] border-[0.1px] border-[#777777]'></span>
          <div className='flex gap-1'>
            <FaRegClock className='text-xs md:text-sm' />
            <p className='text-xs font-regular'>{readingTime} Menit Baca</p>
          </div>
        </div>
        <TextWithEllipsis text={content} wordCount={25} />
      </div>
    </div>
  );
};

export default CardArticle;
