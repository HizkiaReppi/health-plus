import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/utilities/Navbar';
import Footer from '@/components/utilities/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Health Plus',
  description: 'Health Plus',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
