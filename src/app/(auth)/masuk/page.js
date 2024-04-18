'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

import Button from '@/components/utilities/Button';

import logo from '@/assets/icon/logo-icon.png';
import googleIcon from '@/assets/icon/google.svg';
import appleIcon from '@/assets/icon/apple.svg';

export default function MasukPage() {
  const [manualLogin, setManualLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    } else {
      setErrorPassword('');
    }
  }, [email, password]);

  const handleContinue = () => {
    if (email === '' || email.trim() === '') {
      setErrorEmail('Alamat email tidak boleh kosong');
      return;
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorEmail('Alamat email tidak valid');
      return;
    } else {
      setErrorEmail('');
    }

    setManualLogin(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorEmail === '' && !errorPassword === '') {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.data.accessToken);

        router.push('/');
      } else {
        const errorData = await response.json();

        errorData?.data?.forEach((errorMessage) => {
          if (errorMessage.includes('email')) {
            setErrorEmail(errorMessage);
          }
        });

        if (errorData?.error) {
          setErrorEmail(errorData.error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='flex flex-col justify-center items-center w-full h-screen mt-auto py-auto'>
      <Image src={logo} alt='Health Plus' className='w-32 object-cover mb-6' />
      <h1 className='text-4xl font-semibold'>
        Masuk ke <span className='text-[#8BD039] font-bold'>Health</span>
        <span className='text-[#70C3DE] font-bold'>Plus</span>
      </h1>
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
                name='email'
                placeholder='Alamat Email'
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                readOnly={manualLogin}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleContinue();
                  }
                }}
                autoFocus
                required
              />
              {manualLogin && (
                <button
                  type='button'
                  onClick={() => setManualLogin(false)}
                  className='absolute top-4 right-5 text-primary-500 text-sm'
                >
                  Edit
                </button>
              )}
            </div>
            {errorEmail && (
              <p className='text-xs text-red-500 mt-1.5'>{errorEmail}</p>
            )}
          </div>
          {manualLogin && (
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
          )}
          {!manualLogin && (
            <Button
              type='button'
              onClick={handleContinue}
              className='mt-5 w-full'
            >
              Lanjutkan
            </Button>
          )}
          {manualLogin && (
            <>
              <Link
                href='/lupa-password'
                className='text-primary-500 text-sm inline-block mt-3'
              >
                Lupa Password?
              </Link>
              <Button
                type='submit'
                className='mt-5 w-full disabled:bg-gray-100 flex justify-center items-center gap-3'
                disabled={loading}
              >
                {loading && (
                  <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
                )}
                Masuk Sekarang
              </Button>
            </>
          )}
          <p className='text-sm text-center mt-5'>
            Belum memiliki akun?{' '}
            <Link href='/daftar' className='text-primary-500'>
              Daftar sekarang!
            </Link>
          </p>
          {!manualLogin && (
            <>
              <div className='flex justify-center items-center mt-5'>
                <div className='flex-1 h-[1px] bg-black'></div>
                <p className='text-sm mx-3'>atau</p>
                <div className='flex-1 h-[1px] bg-black'></div>
              </div>
              <div className='mt-8 w-full'>
                <Button className='w-full' outline={true}>
                  <Link
                    href='#'
                    className='inline-flex items-center gap-5 w-full'
                  >
                    <Image src={googleIcon} alt='Google' />
                    Masuk dengan Google
                  </Link>
                </Button>
                <Button className='w-full mt-3' outline={true}>
                  <Link
                    href='#'
                    className='inline-flex items-center gap-5 w-full'
                  >
                    <Image src={appleIcon} alt='Apple' />
                    Masuk dengan Apple
                  </Link>
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
