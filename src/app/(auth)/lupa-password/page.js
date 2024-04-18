'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/utilities/Button';

import logo from '@/assets/icon/logo-icon.png';

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Alamat email tidak valid');
    } else {
      setErrorEmail('');
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorEmail === '') {
      return;
    }

    try {
      setLoading(true);

      setTimeout(() => {
        router.push('/lupa-password/verifikasi-terkirim');
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
      <h1 className='text-4xl font-semibold'>Reset Password Anda</h1>
      <p className='text-sm text-center my-3 w-[357px]'>
        Masukan alamat email anda yang terdaftar di Health Plus dan kami akan
        mengirimkan instruksi untuk membuat Password baru.
      </p>
      <div className='w-96'>
        <form className='mt-8 w-full' onSubmit={handleSubmit}>
          <div className='w-full'>
            <label
              className='text-sm font-semibold mb-1.5 inline-block'
              htmlFor='email'
            >
              Alamat Email
            </label>
            <div className='relative'>
              <input
                className={`block w-full border ${
                  errorEmail
                    ? 'border-red-500 focus:border-red-500 ring-red-500 focus:ring-red-500'
                    : 'border-gray-400 focus:border-gray-400 ring-gray-400 focus:ring-gray-400'
                } rounded py-3 px-5 placeholder:text-[#C7C7C7] placeholder:text-[15px]`}
                type='email'
                id='email'
                placeholder='Alamat Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleContinue();
                  }
                }}
                autoFocus
                required
              />
            </div>
            {errorEmail && (
              <p className='text-xs text-red-500 mt-1.5'>{errorEmail}</p>
            )}
          </div>
          <Button
            type='submit'
            className='mt-5 w-full disabled:bg-gray-100 flex justify-center items-center gap-3'
            disabled={loading}
          >
            {loading && (
              <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
            )}
            Lanjutkan
          </Button>
        </form>
      </div>
    </section>
  );
}
