import Link from 'next/link';
import TitleSection from '@/components/article/TitleSection';
import DetailArticle from '@/components/detailArticle/DetailArticle';
import { articleData } from '@/constants/article_dummy_data';
import CardArticle from '@/components/article/CardArticle';
import Button from '@/components/utilities/Button';

export default function DetailArticlePage({ params }) {
  const article = articleData.find((article) => article.slug === params.slug);

  const similarArticles = articleData.filter(
    (data) => data.category === article.category
  );

  const randomArticles = [];

  while (randomArticles.length < 2) {
    const random = Math.floor(Math.random() * similarArticles.length);
    if (
      !randomArticles.includes(similarArticles[random]) &&
      similarArticles[random].slug !== article.slug
    ) {
      randomArticles.push(similarArticles[random]);
    }
  }

  const category = randomArticles[1].category.toLowerCase().replace(' ', '-');

  return (
    <div className='px-16 py-10 flex flex-col md:flex-row gap-y-10 gap-x-20'>
      <div>
        <DetailArticle {...article} />
      </div>
      <div>
        <TitleSection>Artikel Serupa</TitleSection>
        <div>
          {randomArticles.map((article) => (
            <CardArticle
              key={article.id}
              author={article.author}
              title={article.title}
              category={article.category}
              content={article.content}
              published={article.publishedAt}
              image={article.image}
              slug={article.slug}
              className='mt-12'
            />
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <Link href={`/artikel/kategori/${category}`}>
            <Button className='md:px-14 px-7 text-xs md:text-base'>
              Lihat Semua
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
