import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './GoogleAnalytics'
import ErrorBoundary from './components/shared/ErrorBoundary'
import { SEO_CONFIG, ANALYTICS_CONFIG } from './config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords.join(', '),
  authors: [{ name: 'Rizvan Hawaldar' }],
  creator: 'Rizvan Hawaldar',
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: 'Rizvan Hawaldar Portfolio',
    images: [
      {
        url: SEO_CONFIG.defaultImage,
        width: 1200,
        height: 630,
        alt: 'Rizvan Hawaldar - Mobile & Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultImage],
    creator: SEO_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
      </head>
      
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        
        {/* Analytics */}
        {ANALYTICS_CONFIG.googleAnalytics.enabled && (
          <GoogleAnalytics />
        )}
        
        {/* Simple Analytics (optional) */}
        {ANALYTICS_CONFIG.simpleAnalytics.enabled && (
          <Script 
            src={ANALYTICS_CONFIG.simpleAnalytics.scriptUrl}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}