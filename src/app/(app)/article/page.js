import Link from 'next/link';
import Image from 'next/image';
import AllArticle from '@/components/article/AllArticle';
import Header from '@/components/article/Header';
import TitleSection from '@/components/article/TitleSection';
import polaMakanIcon from '@/assets/icon/pola-makan-icon.png';
import aktivitasFisikIcon from '@/assets/icon/aktivitas-fisik-icon.png';
import kesehatanMentalIcon from '@/assets/icon/mental-health-icon.png';
import allArticleIlustration from '@/assets/all-article-ilustration.png';
import { articleData } from '@/constants/article_dummy_data';

export default function Article() {
  return (
    <>
      <Header />
      <div className='flex justify-between px-10 md:px-16 mt-16 mb-24 pb-96 relative'>
        <AllArticle articles={articleData} />
        <div>
          <TitleSection>Semua Kategori</TitleSection>
          <div className='flex flex-col gap-y-5 mt-14'>
            <Link
              href='/article/category/kesehatan-mental'
              className='inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md bg-transparent border-[3px] border-primary-300'
            >
              <Image src={kesehatanMentalIcon} className='w-[52px] pr-2' />
              Kesehatan Mental
            </Link>
            <Link
              href='/article/category/pola-makan'
              className='inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md bg-transparent border-[3px] border-primary-300'
            >
              <Image src={polaMakanIcon} className='w-[52px] pr-2' />
              Pola Makan
            </Link>
            <Link
              href='/article/category/aktivitas-fisik'
              className='inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md bg-transparent border-[3px] border-primary-300'
            >
              <Image src={aktivitasFisikIcon} className='w-[52px] pr-2' />
              Aktivitas Fisik
            </Link>
          </div>
        </div>
        <div className='absolute -bottom-40 right-0'>
          <Image src={allArticleIlustration} className='w-[824px]' />
        </div>
      </div>
    </>
  );
}
