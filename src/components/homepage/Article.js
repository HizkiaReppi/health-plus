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
    <section className='px-16 py-24 bg-primary-100 relative'>
      <>
        <Image
          src={tigaDaunBesarImage}
          className='absolute -bottom-3.5 -left-4 w-48 object-cover'
        />
        <Image
          src={tigaDaunKecilImage}
          className='absolute -top-12 -left-6 w-96 object-cover'
        />
        <Image
          src={tigaDaunKecilImage}
          className='absolute rotate-180 -bottom-5 -right-3 w-80 object-cover'
        />
        <Image
          src={daunBesarImage}
          className='absolute -top-3 -right-3 w-40 object-cover'
        />
      </>
      <div className='flex flex-col items-center mb-14 z-10'>
        <h2 className='title-section'>Cek Artikel Terbaru Kami</h2>
        <span className='w-24 h-0.5 bg-primary-500 -mt-3'></span>
      </div>
      <div className='flex justify-center sm:justify-between items-center flex-wrap gap-y-10 z-10'>
        {articleData.map((article) => (
          <CardArticle {...article} key={article.id} />
        ))}
      </div>
      <div className='flex justify-center mt-10 z-10'>
        <Link href='/article'>
          <Button className='px-14'>Lihat Semua Artikel</Button>
        </Link>
      </div>
    </section>
  );
};

export default Article;
