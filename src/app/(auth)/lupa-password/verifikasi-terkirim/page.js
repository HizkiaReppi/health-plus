'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/utilities/Button';

import logo from '@/assets/icon/logo-icon.png';

export default function VerificationSendPage() {
  const [loading, setLoading] = useState(false);
  const [sendVerificationSuccess, setSendVerificationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      setTimeout(() => {
        setSendVerificationSuccess(true);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex flex-col justify-center items-center w-full h-screen mt-auto py-auto'>
      <Image src={logo} alt='Health Plus' className='w-32 object-cover mb-6' />
      <h1 className='text-4xl font-semibold'>Periksa Email Anda</h1>
      <p className='text-sm text-center my-3 w-[357px]'>
        Silahkan cek alamat email email@domain.com untuk instruksi reset
        password anda.
      </p>
      <div className='w-96'>
        <Button
          type='button'
          className='mt-5 w-full disabled:bg-gray-100 flex justify-center items-center gap-3'
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading && (
            <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
          )}
          Kirim Ulang Link Verifikasi
        </Button>
        {sendVerificationSuccess && (
          <p className='text-center mt-5 text-sm text-primary-500'>
            Verifikasi berhasil dikirim ulang
          </p>
        )}
      </div>
    </section>
  );
}
