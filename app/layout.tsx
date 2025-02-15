import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional, if you want to reference it in your CSS
});

export const metadata = {
  title: 'rizvan.work',
  description: 'Portfolio!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}> {/* This will add the variable to your document */}
      <body>{children}</body>
      {/* <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  /> */}
      <GoogleAnalytics />
    </html>
  );
}