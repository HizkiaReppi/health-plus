'use client';

import { articleData } from '@/constants/article_dummy_data';
import CardArticle from './CardArticle';
import TitleSection from './TitleSection';
import { useState } from 'react';

const Header = () => {
  const [current, setCurrent] = useState(1);
  const articlesThisMonth = articleData.filter(
    (data) => new Date(data.publishedAt).getMonth() === new Date().getMonth()
  );

  // tampilkan articlesThisMonth hanya 2 artikel
  const filteredArticlesThisMonth = articlesThisMonth.slice(0, 2);

  const sortedArticles = articlesThisMonth.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  let filterArticles = [];

  if (current >= 1) {
    // buat variabel yang menampung data yang akan ditampilkan
    const start = (current - 1) * 2;
    const end = start + 2;

    // filter data yang akan ditampilkan
    filterArticles = sortedArticles.slice(start, end);

    // jika data yang ditampilkan adalah data terakhir
    if (end >= sortedArticles.length) {
      filterArticles = sortedArticles.slice(start);
    }

    // jika data yang ditampilkan adalah data pertama
    if (start === 0) {
      filterArticles = sortedArticles.slice(0, 2);
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
    <header className='px-10 md:px-16 py-20 bg-primary-100'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-y-10'>
        <div>
          <TitleSection>Ditampilkan Bulan Ini</TitleSection>
          <div className='flex flex-col md:flex-row gap-y-10 mt-14'>
            {filteredArticlesThisMonth.map((article) => (
              <CardArticle
                key={article.id}
                author={article.author}
                title={article.title}
                category={article.category}
                content={article.content}
                published={article.publishedAt}
                image={article.image}
                slug={article.slug}
                className='mr-12'
              />
            ))}
          </div>
        </div>
        <div className='mt-1 mb-5 md:mt-20 md:mb-0 w-full md:w-0.5 h-0.5 md:h-[500px] bg-black' />
        <div>
          <TitleSection>Artikel Populer</TitleSection>
          <div className='flex flex-col gap-y-10 gap-x-16 mt-14'>
            {filterArticles.map((article) => (
              <CardArticle
                key={article.id}
                author={article.author}
                title={article.title}
                category={article.category}
                content={article.content}
                published={article.publishedAt}
                image={article.image}
                withImage={false}
                slug={article.slug}
              />
            ))}
          </div>
          <div className='flex items-center justify-center gap-4 mt-5'>
            <button
              type='button'
              onClick={handlePrev}
              className='text-xs font-semibold hover:text-primary-500'
            >
              &lt; Prev
            </button>
            <button
              type='button'
              onClick={handleNext}
              className='text-xs font-semibold hover:text-primary-500'
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
