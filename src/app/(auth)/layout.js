import { Inter } from 'next/font/google';
import { FaArrowLeft } from 'react-icons/fa';
import '@/styles/globals.css';
import Link from 'next/link';
import { AuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Health Plus',
    default: 'Health Plus',
  },
  description: 'Health Plus',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={`${inter.className} overflow-x-hidden relative`}>
        <Link
          href='/'
          className='absolute top-10 left-10 p-3 rounded-full border border-black hover:border-primary-500'
        >
          <FaArrowLeft />
        </Link>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
