'use client';

import Button from '../utilities/Button';
import CardArticle from './CardArticle';
import TitleSection from './TitleSection';
import Article1 from '@/assets/image-blog-1.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';

const AllArticle = ({ articles }) => {
  const [current, setCurrent] = useState(1);
  // const articles = articleData;

  let filterArticles = [];

  if (current >= 1) {
    // buat variabel yang menampung data yang akan ditampilkan
    const start = (current - 1) * 4;
    const end = start + 4;

    // filter data yang akan ditampilkan
    filterArticles = articles.slice(start, end);

    // jika data yang ditampilkan adalah data terakhir
    if (end >= articles.length) {
      filterArticles = articles.slice(start);
    }

    // jika data yang ditampilkan adalah data pertama
    if (start === 0) {
      filterArticles = articles.slice(0, 4);
    }
  }

  // fungsi untuk mentriger perubahan current
  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <TitleSection>Semua Artikel</TitleSection>
      <div className='flex flex-col gap-y-10 gap-x-16 mt-14'>
        {filterArticles.map((article) => (
          <CardArticle
            key={article.id}
            author={article.author}
            title={article.title}
            category={article.category}
            content={article.content}
            published={article.publishedAt}
            withImage={true}
            imageLeft={true}
            image={article.image}
            slug={article.slug}
          />
        ))}
      </div>
      <div className='flex items-center justify-center gap-2 mt-10'>
        <Button
          onClick={handlePrev}
          className='flex items-center gap-1 text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'
        >
          <FaArrowLeft /> Prev
        </Button>
        <Button
          onClick={() => setCurrent(1)}
          className='text-lg border-primary-500'
        >
          1
        </Button>
        <Button
          onClick={() => setCurrent(2)}
          className='text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'
        >
          2
        </Button>
        <Button
          onClick={() => setCurrent(3)}
          className='text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'
        >
          3
        </Button>
        <Button
          onClick={handleNext}
          className='flex items-center gap-1 text-lg border-primary-500'
        >
          Next <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default AllArticle;
