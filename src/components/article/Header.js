import CardArticle from './CardArticle';
import TitleSection from './TitleSection';
import Article1 from '@/assets/image-blog-1.png';

const Header = () => {
  return (
    <header className='px-10 md:px-16 py-20 bg-primary-100'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-y-10'>
        <div>
          <TitleSection>Ditampilkan Bulan Ini</TitleSection>
          <div className='flex flex-col md:flex-row gap-y-10 mt-14'>
            <CardArticle
              key={1}
              author={'Hizkia'}
              title={
                '5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'
              }
              category={'Kesehatan Mental'}
              content={
                'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
              }
              published={'2024-03-29T15:00:00Z'}
              image={Article1}
              slug={
                'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
              }
              className='mr-12'
            />
            <CardArticle
              key={1}
              author={'Hizkia'}
              title={
                '5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'
              }
              category={'Kesehatan Mental'}
              content={
                'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
              }
              published={'2024-03-29T15:00:00Z'}
              image={Article1}
              slug={
                'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
              }
            />
          </div>
        </div>
        <div className='mt-1 mb-5 md:mt-20 md:mb-0 w-full md:w-0.5 h-0.5 md:h-[500px] bg-black' />
        <div>
          <TitleSection>Artikel Populer</TitleSection>
          <div className='flex flex-col gap-y-10 gap-x-16 mt-14'>
            <CardArticle
              key={1}
              author={'Hizkia'}
              title={
                '5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'
              }
              category={'Kesehatan Mental'}
              content={
                'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
              }
              published={'2024-03-29T15:00:00Z'}
              withImage={false}
              slug={
                'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
              }
            />
            <CardArticle
              key={1}
              author={'Hizkia'}
              title={
                '5 Cara Menjaga Kesehatan Mental Saat Menjalani Hidup Remaja'
              }
              category={'Kesehatan Mental'}
              content={
                'Stay Chill, Stay Healthy: Cara-Cara Keren untuk Menjaga Kesehatan Mentalmu di Tengah Kesibukan Remaja! Saat menjalani masa remaja yang penuh dengan tekanan, tidak heran jika kesehatan mental sering terlupakan...'
              }
              published={'2024-03-29T15:00:00Z'}
              withImage={false}
              slug={
                'makanan-sehat-pikiran-sehat-menjaga-kesehatan-mental-melalui-pola-makan'
              }
            />
          </div>
          <div className='flex items-center justify-center gap-4 mt-5'>
            <button
              type='button'
              className='text-xs font-semibold hover:text-primary-500'
            >
              &lt; Prev
            </button>
            <button
              type='button'
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
