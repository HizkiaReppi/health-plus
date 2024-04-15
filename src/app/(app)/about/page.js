import Image from 'next/image';
import aboutBackground from '@/assets/about-image.png';
import introductionAboutImage from '@/assets/introduction-about-image.png';
import ourGoalImage from '@/assets/tujuan-kami-image.png';
import hizkiaReppi from '@/assets/member/hizkia-reppi.jpg';
import MemberDetail from '@/components/tentang-kami/MemberDetail';

const data = [
  {
    image: hizkiaReppi,
    name: 'Hizkia Jefren Reppi',
    position: 'Programmer',
  },
  {
    image: hizkiaReppi,
    name: 'Grace Natalia Zalukhu',
    position: 'Programmer',
  },
  {
    image: hizkiaReppi,
    name: 'Citra Dewi Puspita Sari',
    position: 'Desain UI/UX',
  },
  {
    image: hizkiaReppi,
    name: 'Nasywa Zafirah Syahrani',
    position: 'Desain UI/UX',
  },
  {
    image: hizkiaReppi,
    name: 'Bintang Mahaputra Ramadhan',
    position: 'Projek Manager',
  },
];

export default function AboutPage() {
  return (
    <>
      <header className='relative'>
        <Image
          src={aboutBackground}
          alt='About Background'
          className='w-full object-cover'
        />
        <h1 className='absolute top-8 md:top-14 lg:top-20 flex justify-center w-full text-3xl md:text-4xl lg:text-5xl font-semibold uppercase'>
          Tentang Kami
        </h1>
      </header>

      <section className='flex gap-10 px-10 md:px-16 py-10'>
        <Image
          src={introductionAboutImage}
          alt='Introduction About Image'
          className='w-full object-cover rounded hidden md:block'
        />
        <p className='text-base leading-8 text-justify'>
          Selamat datang di situs web kami yang didedikasikan untuk
          mempromosikan gaya hidup sehat! Website ini didirikan oleh 7teen Group
          dan platform kami menawarkan banyak artikel berdasarkan kategori yang
          bertujuan untuk menginspirasi individu merangkul pola hidup yang
          seimbang. Konten kami dikategorikan dengan cermat ke dalam pola makan
          sehat, aktivitas yang menarik, dan memelihara kesehatan mental,
          memberikan wawasan yang komprehensif dan tips praktis untuk perjalanan
          kesehatan Anda. Selain itu kami juga menyediakan penilaian untuk
          menguji pola hidup yang Anda miliki. Bergabunglah bersama kami untuk
          memiliki pola hidup yang lebih sehat dan bahagia!
        </p>
      </section>
      <section className='flex gap-10 px-10 md:px-16 py-10'>
        <div>
          <h2 className='mb-3 text-lg md:text-2xl lg:text-4xl font-semibold'>
            Tujuan Kami
          </h2>
          <p className='text-base leading-8 text-justify'>
            Tim kami berdedikasi untuk memberikan informasi dan membina gaya
            hidup sehat masyarakat terutama untuk para remaja dewasa melalui
            website ini. Kami menyediakan platform ini diharapkan dapat
            mengedukasi dan memberdayakan individu untuk memiliki pola hidup
            yang sehat untuk menjaga kesehatan dan kesejahteraan mereka. Melalui
            artikel dan penilaian di website ini, yang dikategorikan ke dalam
            pola makan sehat, aktivitas yang menarik, dan kesehatan mental, kami
            berusaha untuk menginspirasi perubahan positif dan mendukung
            pengguna dalam mencapai tujuan kesehatan mereka.
          </p>
        </div>
        <Image
          src={ourGoalImage}
          alt='Our Goal Image'
          className='w-full object-cover rounded hidden md:block'
        />
      </section>
      <section className='px-10 md:px-16 py-10'>
        <h2 className='text-lg md:text-2xl lg:text-4xl font-semibold text-center'>
          Perkenalkan Tim Kami
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center justify-items-center gap-x-2 mt-8'>
          {data.map((member, index) => (
            <MemberDetail
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </section>
    </>
  );
}
