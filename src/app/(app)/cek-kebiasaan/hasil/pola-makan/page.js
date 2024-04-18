import Image from 'next/image';
import React from 'react';
import dietIlustration from '@/assets/assesment/ilustration-diet.jpg';

export default function DietResult() {
  return (
    <div className='px-10 md:px-16 mb-10 mt-14'>
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-20 mt-8 mx-0 md:mx-10 lg:mx-20'>
        <Image
          src={dietIlustration}
          alt='Diet Ilustration'
          className='w-80 rounded'
        />
        <div>
          <h1 className='text-4xl font-semibold'>Pola Makan</h1>
          <p className='mt-7'>Skor Pola Makan:</p>
          <p className='text-3xl font-semibold mt-2'>90/100</p>
          <p className='mt-3 text-justify leading-8'>
            Skor pola makan Anda menunjukkan bahwa Anda memiliki pola makan yang
            sangat baik, tetap pertahankan pola makan yang baik dan sehat.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <h4 className='text-3xl font-semibold text-center'>
          Resiko Pola Makan Tidak Sehat
        </h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Penyakit kardiovaskular: Konsumsi makanan yang mengandung banyak
            gula, garam, dan minyak dapat meningkatkan risiko penyakit
            kardiovaskular, seperti infarkt miokard, stroke, dan gagal jantung.
          </li>
          <li className='py-0.5 leading-8'>
            Kesehatan fisik: Konsumsi makanan yang tidak sehat dapat
            mengakibatkan gangguan fisik, seperti obesitas, kelemahan, dan
            ketidakseimbangan kesehatan.
          </li>
          <li className='py-0.5 leading-8'>
            Kanker: Konsumsi makanan yang mengandung banyak gizi g, vitamin b,
            dan kalsium dapat mengurangi risiko kanker tertentu.
          </li>
          <li className='py-0.5 leading-8'>
            Pendengaran: Konsumsi makanan yang mengandung banyak liris dapat
            meningkatkan risiko pendengaran yang buruk.
          </li>
          <li className='py-0.5 leading-8'>
            Pencernaan: Konsumsi makanan dalam jumlah besar dapat memberikan
            tekanan berlebih pada sistem pencernaan.
          </li>
          <li className='py-0.5 leading-8'>
            Kesehatan emosional: Konsumsi makanan yang tidak sehat dapat
            mengakibatkan gangguan emosional, seperti depresi dan kecemasan.
          </li>
        </ul>
      </div>
      <div className='mt-10 mb-8'>
        <h4 className='text-3xl font-semibold text-center'>Tips & Trik</h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Lakukan perubahan pola makan: Perlu diingat bahwa perubahan pola
            makan yang tepat dapat membantu mengurangi risiko penyakit. Sebagai
            contoh, mengganti makanan yang mengandung banyak gula, garam, dan
            minyak dengan makanan yang mengandung banyak lemak sehat, serat,
            vitamin, dan mineral.
          </li>
          <li className='py-0.5 leading-8'>
            Minum banyak air: Air membantu membersihkan sistem produk limbah dan
            racun di tubuh. Kurang minum air dapat menyebabkan dehidrasi, memicu
            kelelahan, tidak ada energi, dan sakit kepala.
          </li>
          <li className='py-0.5 leading-8'>
            Jangan makan di waktu malam: Metabolisme dalam tubuh akan berjalan
            lebih baik ketika makan di waktu pagi hari, sehingga jangan makan di
            waktu malam.
          </li>
          <li className='py-0.5 leading-8'>
            Pastikan selalu sarapan: Sarapan merupakan waktu makan yang penting
            dan sebaiknya jangan diabaikan. Sarapan akan membuat tubuhmu sehat,
            berenergi, dan lebih mudah untuk fokus.
          </li>
          <li className='py-0.5 leading-8'>
            Utamakan bahan makanan alami: Mengkonsumsi makanan dari bahan-bahan
            atau sumber yang alami dapat membantu mengurangi risiko penyakit.
          </li>
          <li className='py-0.5 leading-8'>
            Mengganti lemak jahat dengan lemak sehat: Lemak jahat dapat merusak
            pola makan dan meningkatkan risiko penyakit tertentu, sedangkan
            lemak sehat melindungi otak dan jantung.
          </li>
          <li className='py-0.5 leading-8'>
            Mengonsumsi makanan yang mengandung banyak serat: Makan makanan yang
            mengandung banyak serat dapat membantu meningkatkan suasana hati dan
            membantu mengontrol kolesterol.
          </li>
          <li className='py-0.5 leading-8'>
            Jangan makan di waktu kecemasan: Makan di waktu kecemasan dapat
            meningkatkan risiko penyakit kardiovaskular.
          </li>
        </ul>
      </div>
    </div>
  );
}
