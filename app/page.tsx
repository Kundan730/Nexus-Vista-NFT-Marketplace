import React from 'react';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';
import Banner from './components/Banner';
import Services from './components/Services/index';
import Features from './components/Features/index';
import Network from './components/Network/index';
import Why from './components/Why/index';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AOSInitializer from './components/AOSInitializer';

import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  if (user) redirect('/console');

  return (
    <div>
      <AOSInitializer />
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Features />
      <Network />
      <Why />
      <Newsletter />
      <Footer />
    </div>
  );
}
