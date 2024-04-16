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

export default function DaftarPage() {
  const [manualLogin, setManualLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorName, setErrorName] = useState('');
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

    if (name && name.trim() === '') {
      setErrorName('Nama tidak boleh kosong');
    } else if (name && name.length < 3) {
      setErrorName('Nama minimal 3 karakter');
    } else if (name && !/^[a-zA-Z ]+$/.test(name)) {
      setErrorName('Nama hanya boleh huruf');
    } else {
      setErrorName('');
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
    if (!errorEmail === '' && !errorPassword === '' && !errorName === '') {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        'http://localhost:3001/api/v1/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.data.accessToken);

        router.push('/');
      } else {
        const errorData = await response.json();

        errorData?.data?.forEach((errorMessage) => {
          if (errorMessage.includes('name')) {
            setErrorName(errorMessage);
          }
          if (errorMessage.includes('email')) {
            setErrorEmail(errorMessage);
          }
          if (errorMessage.includes('password')) {
            setErrorPassword(errorMessage);
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
        Daftar ke <span className='text-[#8BD039] font-bold'>Health</span>
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
                placeholder='Alamat Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <>
              <div className='w-full mt-3'>
                <label
                  className='text-sm font-semibold mb-1.5 inline-block'
                  htmlFor='fullname'
                >
                  Nama Lengkap
                </label>
                <input
                  className={`block w-full border ${
                    errorName
                      ? 'border-red-500 focus:border-red-500 ring-red-500 focus:ring-red-500'
                      : 'border-gray-400 focus:border-gray-400 ring-gray-400 focus:ring-gray-400'
                  } rounded py-3 px-5 placeholder:text-[#C7C7C7] placeholder:text-[15px]`}
                  type='fullname'
                  id='fullname'
                  placeholder='Nama Lengkap'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errorName && (
                  <p className='text-xs text-red-500 mt-1.5'>{errorName}</p>
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
            </>
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
            <Button
              type='submit'
              className='mt-5 w-full disabled:bg-gray-100 flex justify-center items-center gap-3'
              disabled={loading}
            >
              {loading && (
                <div className='w-5 h-5 border-2 border-t-[#8BD039] rounded-full animate-spin'></div>
              )}
              Daftar Sekarang
            </Button>
          )}
          <p className='text-sm text-center mt-5'>
            Sudah memiliki akun?{' '}
            <Link href='/masuk' className='text-primary-500'>
              Masuk sekarang!
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
