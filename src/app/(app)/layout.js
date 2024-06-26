import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/utilities/Navbar';
import Footer from '@/components/utilities/Footer';
import { AuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Health Plus',
  description: 'Health Plus',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
