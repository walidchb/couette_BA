import { Inter, Marhey } from 'next/font/google';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Head from 'next/head';
import Script from 'next/script'; // Import Script for Facebook Pixel

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
      <head>
        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '579677364522729');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=579677364522729&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={marhey.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
