'use client';

import Layout from './components/layout/Layout';
import MainContent from './components/MainContent';
import useScrollSmooth from './hooks/useScrollSmooth';

export default function Home() {
  // Use the custom hook for smooth scrolling
  useScrollSmooth();

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}
