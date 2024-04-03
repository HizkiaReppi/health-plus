import DetailArticle from '@/components/detailArticle/DetailArticle';
import { articleData } from '@/constants/data';

export default function DetailArticlePage({ params }) {
  const article = articleData.find((article) => article.slug === params.slug);

  return (
    <div className='px-16 py-10 flex gap-10'>
      <div className='w-3/5'>
        <DetailArticle {...article} />
      </div>
      <div className='w-2/5'>Right Content</div>
    </div>
  );
}
