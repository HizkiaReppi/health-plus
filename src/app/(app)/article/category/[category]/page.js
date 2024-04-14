'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { articleCategory } from '@/constants/data';
import { articleData } from '@/constants/article_dummy_data';
import AllArticle from '@/components/article/AllArticle';
import TitleSection from '@/components/article/TitleSection';
import polaMakanIcon from '@/assets/icon/pola-makan-icon.png';
import aktivitasFisikIcon from '@/assets/icon/aktivitas-fisik-icon.png';
import kesehatanMentalIcon from '@/assets/icon/mental-health-icon.png';
import allArticleIlustration from '@/assets/all-article-ilustration.png';

export default function CategoryArticle({ params }) {
  const category = articleCategory.find(
    (category) => category.slug == params.category
  );
  const pathname = usePathname();

  const formattedData = category.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== category.description.length - 1 && <br />}
    </React.Fragment>
  ));

  const articles = articleData.filter(
    (article) => article.category === category.title
  );

  return (
    <>
      <header className='text-center px-10 md:px-16 bg-primary-100 py-24'>
        <h1 className='text-5xl font-bold'>{category.title}</h1>
        <p className='text-lg mt-8'>{formattedData}</p>
        <div className='uppercase mt-12 text-xl font-semibold'>
          <Link href='/article'>Article</Link>
          <span> &gt; </span>
          <span>{category.title}</span>
        </div>
      </header>
      <div className='flex justify-between px-10 md:px-16 mt-16 mb-24 pb-96 relative'>
        <AllArticle articles={articles} />
        <div>
          <TitleSection>Semua Kategori</TitleSection>
          <div className='flex flex-col gap-y-5 mt-14'>
            <Link
              href='/article/category/kesehatan-mental'
              className={`inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md ${
                pathname === '/article/category/kesehatan-mental'
                  ? 'bg-primary-300 text-black hover:text-white'
                  : 'bg-transparent border-[3px] border-primary-300'
              }`}
            >
              <Image src={kesehatanMentalIcon} className='w-[52px] pr-2' />
              Kesehatan Mental
            </Link>
            <Link
              href='/article/category/pola-makan'
              className={`inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md bg-transparent border-[3px] border-primary-300 ${
                pathname === '/article/category/pola-makan'
                  ? 'bg-primary-300 text-black hover:text-white'
                  : 'bg-transparent border-[3px] border-primary-300'
              }`}
            >
              <Image src={polaMakanIcon} className='w-[52px] pr-2' />
              Pola Makan
            </Link>
            <Link
              href='/article/category/aktivitas-fisik'
              className={`inline-flex items-center pl-5 w-[297px] h-20 text-xl font-semibold rounded-md bg-transparent border-[3px] border-primary-300 ${
                pathname === '/article/category/aktivitas-fisik'
                  ? 'bg-primary-300 text-black hover:text-white'
                  : 'bg-transparent border-[3px] border-primary-300'
              }`}
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
