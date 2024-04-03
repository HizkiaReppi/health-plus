import Image from 'next/image';
import Link from 'next/link';
import TextWithEllipsis from './TextWithEllipsis';
import { formatTimestamp } from '@/utils/formatTimestamp';

const CardArticle = (props) => {
  const formattedDate = formatTimestamp(props.publishedAt);

  return (
    <div className='w-[400px] h-[500px] bg-[#FAFAFA] rounded-3xl'>
      <div className='relative rounded-tr-3xl rounded-tl-3xl h-[246px] overflow-hidden'>
        <div className='absolute inset-0 bg-gradient z-10 opacity-30'></div>
        <Image
          src={props.image}
          alt='Image Article'
          className='rounded-tr-3xl rounded-tl-3xl h-[246px] object-cover'
        />
      </div>

      <div className='p-7 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <p className='text-xs font-semibold'>{props.author}</p>
          <span className='h-2.5 w-0.5 border-[0.2px] border-black'></span>
          <time className='text-xs font-semibold'>{formattedDate}</time>
        </div>
        <h6 className='text-base font-semibold'>{props.title}</h6>
        <TextWithEllipsis text={props.content} wordCount={25} />
        <Link
          href={`/article/${props.slug}`}
          className='text-xs font-semibold text-primary-500 hover:text-primary-700 duration-200'
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default CardArticle;
