import { Inter, Marhey } from 'next/font/google';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Head from 'next/head';

import { NextIntlClientProvider } from 'next-intl';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const marhey = Marhey({ subsets: ['arabic'] });

export const metadata = {
  title: 'Belle Aiguille',
};

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'ar' }];
}

export default async function RootLayout({ children, params: { locale } }) {
  setRequestLocale('ar'); // Replace 'en' with your desired locale

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="en" className="bg-white">
      <body className={marhey.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
