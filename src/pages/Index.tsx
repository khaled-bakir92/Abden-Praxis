
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leistungen from '@/components/Leistungen';
import Team from '@/components/Team';
import Praxis from '@/components/Praxis';
import Standort from '@/components/Standort';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="ABDEN Zahnarztpraxis Lage | Ihre moderne Zahnarztpraxis"
        description="Willkommen bei ABDEN - Ihrer Zahnarztpraxis in Lage. Wir bieten professionelle Zahnreinigung, Implantologie und moderne Zahnbehandlungen in angenehmer Atmosphäre."
        canonicalUrl="/"
      />
      <LocalBusinessSchema />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Leistungen />
        <Team />
        <Praxis />
        <Standort />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
