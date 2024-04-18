import Image from 'next/image';
import React from 'react';
import mentalHealthIlustration from '@/assets/assesment/mental-health-ilustration.png';

export default function MentalHealthResult() {
  return (
    <div className='px-10 md:px-16 mb-10 mt-14'>
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-20 mt-8 mx-0 md:mx-10 lg:mx-20'>
        <Image
          src={mentalHealthIlustration}
          alt='Mental Health Ilustration'
          className='w-80 rounded'
        />
        <div>
          <h1 className='text-4xl font-semibold'>Kesehatan Mental</h1>
          <p className='mt-7'>Skor Kesehatan Mental:</p>
          <p className='text-3xl font-semibold mt-2'>75/100</p>
          <p className='mt-3 text-justify leading-8'>
            Skor kesehatan mental Anda menunjukkan bahwa Anda memiliki kesehatan
            mental yang cukup baik, namun masih ada ruang untuk meningkatkan
            beberapa area. Penting untuk tetap memperhatikan perasaan stres dan
            kecemasan serta mencari cara untuk meningkatkan kesejahteraan
            emosional Anda. Tetaplah berkomunikasi dengan orang-orang terdekat
            dan berikan waktu untuk merawat diri sendiri.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <h4 className='text-3xl font-semibold text-center'>
          Resiko Kesehatan Mental
        </h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Tekanan sosial: Tekanan sosial dapat berupa kekurangan pendukung,
            kekurangan hubungan positif, atau tekanan yang tinggi dari orang
            lain.
          </li>
          <li className='py-0.5 leading-8'>
            Tekanan ekonomi: Tekanan ekonomi dapat berupa kekurangan pendapatan,
            kekurangan pendanaan, atau kekurangan pendukung ekonomi.
          </li>
          <li className='py-0.5 leading-8'>
            Trauma masa kecil: Trauma masa kecil dapat berupa kekurangan
            pendukung, kekurangan pendukung emosional, atau kekurangan pendukung
            psikologis.
          </li>
          <li className='py-0.5 leading-8'>
            Kondisi biologis: Kondisi biologis dapat berupa gangguan pada otak,
            gangguan kimia pada otak, atau gangguan genetik.
          </li>
          <li className='py-0.5 leading-8'>
            Stres berkepanjangan: Stres berkepanjangan dapat berupa stres yang
            tidak terhenti atau stres yang tidak dihadapi.
          </li>
          <li className='py-0.5 leading-8'>
            Riwayat keluarga: Riwayat keluarga dapat berupa penyakit mental yang
            dialami oleh anak, ibu bapa, atau saudara.
          </li>
          <li className='py-0.5 leading-8'>
            Ketergantungan obat: Ketergantungan obat dapat berupa obat-obatan
            yang tidak teratur atau obat-obatan yang terlarang.
          </li>
          <li className='py-0.5 leading-8'>
            Pelecehan: Pelecehan dapat berupa kekerasan dalam rumah tangga atau
            bentuk pelecehan lainnya.
          </li>
          <li className='py-0.5 leading-8'>
            Masalah pada masa kanak-kanak: Masalah pada masa kanak-kanak dapat
            berupa masalah gaya hidup atau masalah yang tidak dihadapi.
          </li>
          <li className='py-0.5 leading-8'>
            Profesi yang memicu stres: Profesi yang memicu stres dapat berupa
            dokter, pengusaha, atau pekerjaan lainnya yang berat.
          </li>
        </ul>
      </div>
      <div className='mt-10 mb-8'>
        <h4 className='text-3xl font-semibold text-center'>Tips & Trik</h4>
        <ul className='list-disc mt-5 text-justify'>
          <li className='py-0.5 leading-8'>
            Tidur yang cukup: Tidur yang cukup merupakan salah satu langkah
            penting untuk menjaga kesehatan mental. Dapatkan tidur yang cukup
            dan teratur setiap hari.
          </li>
          <li className='py-0.5 leading-8'>
            Gunakan media sosial dengan bijak: Gunakan media sosial dengan bijak
            dan tidak lebih dari waktu yang tepat. Tidak gunakan media sosial
            untuk membaca atau menonton konten yang membuat kita merasa tidak
            baik.
          </li>
          <li className='py-0.5 leading-8'>
            Jalin hubungan baik dengan orang terdekat: Jalin hubungan baik
            dengan orang terdekat, seperti keluarga, teman, atau pasangan.
            Hubungan baik dapat membantu mengurangi stres dan membangun
            kesehatan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Memiliki kemampuan untuk mengatasi masalah: Memiliki kemampuan untuk
            mengatasi masalah dapat membantu mengurangi stres dan membangun
            kesehatan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Mencari bantuan profesional jika diperlukan: Jika kesehatan mental
            terganggu, maka mencari bantuan profesional, seperti psikoterapi,
            pengobatan obat, atau stimulasi otak, dapat membantu mengatasi
            gangguan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Menjaga hubungan baik dengan orang lain: Menjaga hubungan baik
            dengan orang lain dapat membantu mengurangi stres dan membangun
            kesehatan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Membantu orang lain dengan tulus: Membantu orang lain dengan tulus
            dapat membantu mengurangi stres dan membangun kesehatan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Memelihara pikiran yang positif: Memelihara pikiran yang positif
            dapat membantu mengurangi stres dan membangun kesehatan mental.
          </li>
          <li className='py-0.5 leading-8'>
            Menjaga kecukupan tidur dan istirahat: Menjaga kecukupan tidur dan
            istirahat dapat membantu mengurangi stres dan membangun kesehatan
            mental.
          </li>
          <li className='py-0.5 leading-8'>
            Membantu orang lain: Membantu orang lain dapat membantu mengurangi
            stres dan membangun kesehatan mental
          </li>
        </ul>
      </div>
    </div>
  );
}
