import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional, if you want to reference it in your CSS
});

export const metadata = {
  title: 'Your Site Title',
  description: 'Your Site Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}> {/* This will add the variable to your document */}
      <body>{children}</body>
    </html>
  );
}