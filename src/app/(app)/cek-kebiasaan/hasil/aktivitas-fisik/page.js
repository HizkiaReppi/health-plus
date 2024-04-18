import Image from 'next/image';
import React from 'react';
import activityIlustration from '@/assets/assesment/aktivitas-ilustration.jpg';

export default function ActivityResult() {
  return (
    <div className='px-10 md:px-16 mb-10 mt-14'>
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-20 mt-8 mx-0 md:mx-10 lg:mx-20'>
        <Image
          src={activityIlustration}
          alt='Activity Ilustration'
          className='w-80 rounded'
        />
        <div>
          <h1 className='text-4xl font-semibold'>Aktivitas Fisik</h1>
          <p className='mt-7'>Skor Aktivitas Fisik:</p>
          <p className='text-3xl font-semibold mt-2'>80/100</p>
          <p className='mt-3 text-justify leading-8'>
            Skor aktivitas fisik anda menunjukkan bahwa Anda memiliki aktivitas
            fisik yang cukup baik, namun masih ada ruang untuk meningkatkan
            beberapa area. Penting untuk tetap memperhatikan pola makan yang
            sehat dan rutin berolahraga. Tetaplah berkomitmen untuk menjaga
            kesehatan tubuh Anda.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <h4 className='text-3xl font-semibold text-center'>
          Resiko Aktivitas Fisik Tidak Sehat
        </h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Penyakit jantung: Menjalani aktivitas fisik yang tidak sehat dapat
            meningkatkan risiko penyakit jantung, yang dapat disebabkan oleh
            gangguan pada sistem kardiovaskular.
          </li>
          <li className='py-0.5 leading-8'>
            Penyakit kardiovaskular: Aktivitas fisik yang tidak sehat dapat
            meningkatkan risiko penyakit kardiovaskular, yang dapat disebabkan
            oleh gangguan pada sistem kardiovaskular.
          </li>
          <li className='py-0.5 leading-8'>
            Pertumbuhan otak dan perkembangan si kecil: Aktiv itas fisik yang
            tidak sehat dapat mengurangi perkembangan otak dan pertumbuhan si
            kecil.
          </li>
          <li className='py-0.5 leading-8'>
            Kesehatan pencernaan: Aktivitas fisik yang tidak sehat dapat
            meningkatkan risiko kesehatan pencernaan, yang dapat disebabkan oleh
            gangguan pada sistem pencernaan.
          </li>
          <li className='py-0.5 leading-8'>
            Kesehatan mental: Aktivitas fisik yang tidak sehat dapat
            mengakibatkan gangguan kesehatan mental, seperti depresi dan
            kecemasan.
          </li>
          <li className='py-0.5 leading-8'>
            Gangguan otot: Aktivitas fisik yang tidak sehat dapat meningkatkan
            risiko gangguan otot, yang dapat disebabkan oleh gangguan pada
            sistem otot.
          </li>
        </ul>
      </div>
      <div className='mt-10 mb-8'>
        <h4 className='text-3xl font-semibold text-center'>Tips & Trik</h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Memperhatikan pola hidup sehat: Mengikuti pola hidup sehat, termasuk
            menjalankan aktivitas fisik secara teratur, makan dengan seimbang,
            dan mengelola stres, dapat membantu mengurangi risiko penyakit.
          </li>
          <li className='py-0.5 leading-8'>
            Memilih jenis olahraga yang sesuai: Menjalankan olahraga dengan
            intensitas sedang dan teratur dapat membantu mencegah penyakit
            jantung.
          </li>
          <li className='py-0.5 leading-8'>
            Memperhatikan intensitas dan lama latihan: Intensitas dan lama
            latihan harus disesuaikan dengan kondisi tubuh, dan ditingkatkan
            secara bertahap.
          </li>
          <li className='py-0.5 leading-8'>
            Memastikan ada jeda waktu: Memastikan ada jeda waktu yang cukup
            untuk mengistirahatkan tubuh, memulihkan otot, dan mengembalikan
            energi yang hilang saat berolahraga dapat membantu mengurangi risiko
            terjadinya cedera.
          </li>
          <li className='py-0.5 leading-8'>
            Memilih waktu yang tepat: Memilih waktu yang tepat untuk
            berolahraga, seperti tidak melakukannya pada malam hari, dapat
            membantu mengurangi risiko penyakit.
          </li>
          <li className='py-0.5 leading-8'>
            Memilih aktivitas fisik yang sesuai dengan kondisi tubuh: Memilih
            aktivitas fisik yang sesuai dengan kondisi tubuh, seperti untuk
            orang yang berisiko terken a penyakit tidak menular (PTM), dapat
            membantu mengurangi risiko penyakit.
          </li>
          <li className='py-0.5 leading-8'>
            Memperhatikan kesehatan mental: Menjalankan aktivitas fisik dapat
            juga membantu mengurangi stres dan menjaga kesehatan mental, yang
            dapat membantu mengurangi risiko penyakit.
          </li>
          <li className='py-0.5 leading-8'>
            Memperhatikan kesehatan keluarga: Memperhatikan kesehatan keluarga,
            termasuk mengurangi screen time, dapat membantu mengurangi sedentary
            behavior di rumah.
          </li>
          <li className='py-0.5 leading-8'>
            Memperhatikan lingkungan di tempat belajar: Memanfaatkan akses dan
            lingkungan di tempat belajar, seperti melakukan kombinasi pilihan
            aktivitas fisik, dapat membantu mengurangi dampak yang kurang baik
            untuk tubuh.
          </li>
        </ul>
      </div>
    </div>
  );
}
