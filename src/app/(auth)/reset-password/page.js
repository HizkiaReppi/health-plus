'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

import Button from '@/components/utilities/Button';

import logo from '@/assets/icon/logo-icon.png';

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Alamat email tidak valid');
    } else {
      setErrorEmail('');
    }

    if (password && password.length < 6) {
      setErrorPassword('Password minimal 6 karakter');
    } else if (
      password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)
    ) {
      setErrorPassword(
        'Password setidaknya memiliki 1 huruf besar, 1 huruf kecil dan 1 angka'
      );
    } else if (confirmPassword && password !== confirmPassword) {
      setErrorPassword('Password dan Konfirmasi Password tidak sama');
    } else {
      setErrorPassword('');
    }
  }, [email, password, name, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorEmail === '' && !errorPassword === '') {
      return;
    }

    try {
      setLoading(true);

      router.push('/masuk');
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
        Masukan Password Baru yang akan digunakan di Health Plus.
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
                autoFocus
                required
              />
            </div>
            {errorEmail && (
              <p className='text-xs text-red-500 mt-1.5'>{errorEmail}</p>
            )}
          </div>
          <div className='w-full mt-3'>
            <label
              className='text-sm font-semibold mb-1.5 inline-block'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className={`block w-full border ${
                  errorPassword
                    ? 'border-red-500 focus:border-red-500 ring-red-500 focus:ring-red-500'
                    : 'border-gray-400 focus:border-gray-400 ring-gray-400 focus:ring-gray-400'
                } rounded py-3 px-5 placeholder:text-[#C7C7C7] placeholder:text-[15px]`}
                type={isPasswordVisible ? 'text' : 'password'}
                id='password'
                placeholder='******'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div onClick={() => setIsPasswordVisible((prev) => !prev)}>
                {isPasswordVisible ? (
                  <FaEyeSlash className='absolute top-4 right-7 text-lg cursor-pointer' />
                ) : (
                  <FaEye className='absolute top-4 right-7 text-lg cursor-pointer' />
                )}
              </div>
            </div>
            {errorPassword && (
              <p className='text-xs text-red-500 mt-1.5'>{errorPassword}</p>
            )}
          </div>
          <div className='w-full mt-3'>
            <label
              className='text-sm font-semibold mb-1.5 inline-block'
              htmlFor='confirm-password'
            >
              Konfirmasi Password
            </label>
            <div className='relative'>
              <input
                className={`block w-full border ${
                  errorPassword
                    ? 'border-red-500 focus:border-red-500 ring-red-500 focus:ring-red-500'
                    : 'border-gray-400 focus:border-gray-400 ring-gray-400 focus:ring-gray-400'
                } rounded py-3 px-5 placeholder:text-[#C7C7C7] placeholder:text-[15px]`}
                type={isPasswordVisible ? 'text' : 'password'}
                id='confirm-password'
                placeholder='******'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div onClick={() => setIsPasswordVisible((prev) => !prev)}>
                {isPasswordVisible ? (
                  <FaEyeSlash className='absolute top-4 right-7 text-lg cursor-pointer' />
                ) : (
                  <FaEye className='absolute top-4 right-7 text-lg cursor-pointer' />
                )}
              </div>
            </div>
          </div>
          <Button
            type='submit'
            className='mt-5 w-full disabled:bg-gray-100 flex justify-center items-center gap-3'
            disabled={loading}
          >
            {loading && (
              <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
            )}
            Simpan
          </Button>
        </form>
      </div>
    </section>
  );
}
