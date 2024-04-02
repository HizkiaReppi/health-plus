import Image from 'next/image';
import Link from 'next/link';
import hero from '@/assets/hero.png';
import Button from '../utilities/Button';

const Hero = () => {
  return (
    <section className='flex flex-row items-center gap-16 bg-primary-50 px-16 py-10'>
      <div>
        <h1 className='text-4xl font-semibold text-gray-900 mb-5'>
          Temukan Cara yang Menyenangkan untuk Merawat Diri Sendiri!
        </h1>
        <h6 className='text-xl text-justify mb-12'>
          Jelajahi Keseimbangan Aktivitas Fisik, Pola Makan Sehat, dan
          Kesejahteraan Emosional untuk Hidup yang Lebih Bahagia dan Produktif!
          Mulailah dengan Mengidentifikasi Kebiasaan Positif dan Negatif melalui
          Aktivitas Interaktif ini untuk Memperbaiki Kualitas Hidupmu!
        </h6>
        <Link href='/assessment'>
          <Button>Ayo Cek Kebiasaanmu</Button>
        </Link>
      </div>
      <div>
        <Image src={hero} alt='Hero' width={2000} />
      </div>
    </section>
  );
};

export default Hero;
