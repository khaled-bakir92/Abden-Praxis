import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        heroRef.current.style.opacity = `${1 - scrollPosition * 0.002}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("/images/praxis.png")'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center pt-8 items-start h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-block text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">Herzlich willkommen in der</span>
        </div>
        
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-3 sm:mb-4">
            ABDEN Zahnarztpraxis! 
          </h1>
        </div>
        
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-dark max-w-2xl mb-6 sm:mb-8">
          Ihre Zahngesundheit liegt uns am Herzen.
          </p>
        </div>
        
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <Link
            to="#kontakt"
            className="cta-button"
          >
            Kontakt
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Hero;