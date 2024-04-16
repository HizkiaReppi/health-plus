import Link from 'next/link';
import Image from 'next/image';
import Button from '../utilities/Button';
import CardArticle from '../utilities/CardArticle';
import { articleData } from '@/constants/data';
import tigaDaunBesarImage from '@/assets/tiga-daun-besar.png';
import tigaDaunKecilImage from '@/assets/3-daun-kecil.png';
import daunBesarImage from '@/assets/daun-besar.png';

const Article = () => {
  return (
    <section className='px-10 md:px-16 py-24 bg-primary-100 relative'>
      <>
        <Image
          src={tigaDaunBesarImage}
          alt='Tiga Daun Besar'
          className='absolute z-0 -bottom-1.5 md:-bottom-3.5 -left-4 w-24 md:w-48 object-cover'
        />
        <Image
          src={tigaDaunKecilImage}
          alt='Tiga Daun Kecil'
          className='absolute z-0 -top-6 md:-top-12 -left-6 w-48 md:w-96 object-cover'
        />
        <Image
          src={tigaDaunKecilImage}
          alt='Tiga Daun Kecil'
          className='absolute z-0 rotate-180 -bottom-5 -right-5 md:-right-3 w-40 md:w-80 object-cover'
        />
        <Image
          src={daunBesarImage}
          alt='Daun Besar'
          className='absolute z-0 -top-1 md:-top-3 -right-1 md:-right-3 w-20 md:w-40 object-cover'
        />
      </>
      <div className='flex flex-col items-center mb-14 z-20'>
        <h2 className='title-section'>Cek Artikel Terbaru Kami</h2>
        <span className='w-24 h-0.5 bg-primary-500 -mt-3'></span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-10 z-10'>
        {articleData.map((article) => (
          <CardArticle {...article} key={article.id} />
        ))}
      </div>
      <div className='flex justify-center mt-10 z-10'>
        <Link href='/artikel'>
          <Button className='md:px-14 px-7 text-xs md:text-base'>
            Lihat Semua Artikel
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Article;
