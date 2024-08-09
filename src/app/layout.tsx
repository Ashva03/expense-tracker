import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/provider/provider';
import Footersection from './components/footerSection/footersection';
import Header from './components/header/header';
import Favicon from './components/favIcon';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Simplify Your Financial Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Favicon />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footersection />
        </AppProvider>
      </body>
    </html>
  );
}
