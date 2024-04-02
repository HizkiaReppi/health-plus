import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/utilities/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Health Plus',
  description: 'Health Plus',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
