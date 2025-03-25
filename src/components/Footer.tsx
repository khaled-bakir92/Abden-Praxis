
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-abdent-200  py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-dark">
              © {currentYear} <span className="font-bold">ZAHNARZT ABDEN</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <Link to="/datenschutz" className="text-dark hover:text-abdent-600 transition-colors mx-3 my-1 md:my-0">
              Datenschutzerklärung
            </Link>
            <Separator orientation="vertical" className="hidden md:block h-4 mx-2" />
            <Link to="/impressum" className="text-dark hover:text-abdent-600 transition-colors mx-3 my-1 md:my-0">
              Impressum
            </Link>
          </div>

          <SocialMedia className="mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
