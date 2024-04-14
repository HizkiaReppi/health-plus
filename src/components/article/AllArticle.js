import Button from '../utilities/Button';
import CardArticle from './CardArticle';
import TitleSection from './TitleSection';
import Article1 from '@/assets/image-blog-1.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

const AllArticle = () => {
  return (
    <div>
      <TitleSection>Semua Artikel</TitleSection>
      <div className='flex flex-col gap-y-10 gap-x-16 mt-14'>
        <CardArticle
          key={1}
          author={'Hizkia'}
          title={'5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'}
          category={'Kesehatan Mental'}
          content={
            'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
          }
          published={'2024-03-29T15:00:00Z'}
          withImage={true}
          imageLeft={true}
          image={Article1}
          slug={
            'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
          }
        />
        <CardArticle
          key={1}
          author={'Hizkia'}
          title={'5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'}
          category={'Kesehatan Mental'}
          content={
            'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
          }
          published={'2024-03-29T15:00:00Z'}
          withImage={true}
          imageLeft={true}
          image={Article1}
          slug={
            'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
          }
        />
        <CardArticle
          key={1}
          author={'Hizkia'}
          title={'5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'}
          category={'Kesehatan Mental'}
          content={
            'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
          }
          published={'2024-03-29T15:00:00Z'}
          withImage={true}
          imageLeft={true}
          image={Article1}
          slug={
            'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
          }
        />
      </div>
      <div className='flex items-center justify-center gap-2 mt-10'>
        <Button className='flex items-center gap-1 text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'>
          <FaArrowLeft /> Prev
        </Button>
        <Button className='text-lg border-primary-500'>1</Button>
        <Button className='text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'>
          2
        </Button>
        <Button className='text-lg text-black hover:text-white border border-black hover:border-primary-500 bg-transparent'>
          3
        </Button>
        <Button className='flex items-center gap-1 text-lg border-primary-500'>
          Next <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default AllArticle;
