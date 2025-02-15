'use client';

import Script from 'next/script';

// Define types for window.gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Analytics utility functions
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-X2LTV74SHD', {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-X2LTV74SHD"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2LTV74SHD', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}