import Image from 'next/image';
import Link from 'next/link';
import hero from '@/assets/hero.png';
import Button from '../utilities/Button';

const Hero = () => {
  return (
    <section className='flex flex-row items-center gap-16 bg-primary-50 px-10 md:px-16 py-24 md:py-10'>
      <div>
        <h1 className='text-xl md:text-4xl font-semibold text-gray-900 mb-5'>
          Temukan Cara yang Menyenangkan untuk Merawat Diri Sendiri!
        </h1>
        <h6 className='text-base md:text-xl text-justify mb-5 md:mb-12'>
          Jelajahi Keseimbangan Aktivitas Fisik, Pola Makan Sehat, dan
          Kesejahteraan Emosional untuk Hidup yang Lebih Bahagia dan Produktif!
          Mulailah dengan Mengidentifikasi Kebiasaan Positif dan Negatif melalui
          Aktivitas Interaktif ini untuk Memperbaiki Kualitas Hidupmu!
        </h6>
        <Link href='/cek-kebiasaan'>
          <Button className='text-sm'>Ayo Cek Kebiasaanmu</Button>
        </Link>
      </div>
      <div className='hidden md:block'>
        <Image src={hero} alt='Hero' width={2000} />
      </div>
    </section>
  );
};

export default Hero;
