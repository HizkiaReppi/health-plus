import Image from 'next/image';
import aboutBackground from '@/assets/about/header-about.png';
import introductionAboutImage from '@/assets/about/about-desc.png';
import ourGoalImage from '@/assets/about/our-goals.png';
import hizkiaReppi from '@/assets/member/hizkia-reppi.jpg';
import graceZalukhu from '@/assets/member/grace-zalukhu.jpg';
import nasywa from '@/assets/member/nasywa.jpg';
import citra from '@/assets/member/citra.JPG';
import bintang from '@/assets/member/bintang.jpg';
import MemberDetail from '@/components/tentang-kami/MemberDetail';

const data = [
  {
    image: hizkiaReppi,
    name: 'Hizkia Jefren Reppi',
    position: 'Programmer',
  },
  {
    image: graceZalukhu,
    name: 'Grace Natalia Zalukhu',
    position: 'Programmer',
  },
  {
    image: citra,
    name: 'Citra Dewi Puspita Sari',
    position: 'Desain UI/UX',
  },
  {
    image: nasywa,
    name: 'Nasywa Zafirah Syahrani',
    position: 'Desain UI/UX',
  },
  {
    image: bintang,
    name: 'Bintang Mahaputra Ramadhan',
    position: 'Projek Manager',
  },
];

export default function AboutPage() {
  return (
    <>
      <header>
        <Image
          src={aboutBackground}
          alt='About Background'
          className='w-full object-cover'
        />
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
