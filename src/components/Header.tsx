
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/', sectionId: 'hero' },
  { label: 'Leistungen', href: '/#leistungen', sectionId: 'leistungen' },
  { label: 'Team', href: '/#team', sectionId: 'team' },
  { label: 'Praxis', href: '/#praxis', sectionId: 'praxis' },
  { label: 'Kontakt', href: '/#kontakt', sectionId: 'kontakt' }, // Now points to Standort component
  { label: 'Karriere', href: '/karriere' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();

  // Define handleScroll outside useEffect to reuse it
  const handleScroll = () => {
    // Handle scrolled state for header background (always needed for UI)
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
    
    // Only track sections if we're on the homepage
    if (location.pathname !== '/' && location.pathname !== '/index.html') {
      return;
    }
    
    // Get all sections with their positions
    const sectionsWithPositions = navItems
      .filter(item => item.sectionId)
      .map(item => {
        const section = document.getElementById(item.sectionId as string);
        if (!section) return { id: item.sectionId, top: 0, position: Infinity };
        
        const rect = section.getBoundingClientRect();
        // Calculate position relative to viewport
        // The smaller this value, the closer to the top of the viewport
        const position = Math.abs(rect.top);
        
        return {
          id: item.sectionId,
          top: rect.top,
          position: position
        };
      });
    
    // Sort sections by position - the one closest to top of viewport comes first
    sectionsWithPositions.sort((a, b) => a.position - b.position);
    
    // Only consider sections that are in or near the viewport (top within -500px to 500px)
    const visibleSections = sectionsWithPositions.filter(
      section => section.top > -500 && section.top < 500
    );
    
    // If we have visible sections, set the closest one as active
    if (visibleSections.length > 0) {
      setActiveSection(visibleSections[0].id as string);
    } else if (sectionsWithPositions.length > 0) {
      // If no sections are visible, choose the first one if we're at the top of the page
      // or the last one if we're at the bottom
      const isAtTopOfPage = window.scrollY < 200;
      setActiveSection(isAtTopOfPage 
        ? sectionsWithPositions[0].id as string 
        : sectionsWithPositions[sectionsWithPositions.length - 1].id as string);
    }
  };

  // Set up scroll listener and watch for location changes
  useEffect(() => {
    // Throttle scroll events to improve performance
    let isThrottled = false;
    const throttledHandleScroll = () => {
      if (!isThrottled) {
        handleScroll();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 100); // Throttle to run at most once every 100ms
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    // Update active state when location changes
    if (location.pathname !== '/' && location.pathname !== '/index.html') {
      // Special case for service detail pages
      if (location.pathname.startsWith('/service/')) {
        // Set Leistungen as active for service detail pages
        setActiveSection('leistungen');
      } else {
        // If we're not on the homepage or service detail page, set the active item based on pathname
        const currentPage = navItems.find(item => item.href === location.pathname);
        if (currentPage) {
          // If it's a known page (like Karriere), clear the activeSection
          setActiveSection('');
        }
      }
    } else {
      // If we're on the homepage, call handleScroll to set the correct section
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [location.pathname]); // remove scrolled dependency to prevent re-runs

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out', 
        scrolled ? 'bg-abdent-300 backdrop-blur-md shadow-sm' : 'bg-abdent-200'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-dark hover:opacity-90 transition-opacity duration-300"
          >
            <img 
              src="/images/logo.png" 
              alt="ABDENT Logo" 
              className="h-10 md:h-12"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.label === 'Home' && (location.pathname === '/' || location.pathname === '/index.html') ? (
                <a
                  key={item.label}
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={cn(
                    'nav-link',
                    item.sectionId === activeSection ? 'active' : ''
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'nav-link',
                    // Homepage: activate based on visible section
                    (location.pathname === '/' || location.pathname === '/index.html')
                      ? (item.sectionId === activeSection ? 'active' : '')
                      : // Service detail pages: activate Leistungen
                      (location.pathname.startsWith('/service/') && item.sectionId === 'leistungen')
                        ? 'active'
                        : // Other pages: activate based on exact path match
                        (item.href === location.pathname ? 'active' : '')
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span 
              className={cn(
                "block w-6 h-0.5 bg-dark transition-transform duration-300 ease-in-out", 
                menuOpen && "rotate-45 translate-y-2"
              )} 
            />
            <span 
              className={cn(
                "block w-6 h-0.5 bg-dark transition-opacity duration-300 ease-in-out", 
                menuOpen && "opacity-0"
              )} 
            />
            <span 
              className={cn(
                "block w-6 h-0.5 bg-dark transition-transform duration-300 ease-in-out", 
                menuOpen && "-rotate-45 -translate-y-2"
              )} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen ? "max-h-74 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              item.label === 'Home' && (location.pathname === '/' || location.pathname === '/index.html') ? (
                <a
                  key={item.label}
                  href="#hero"
                  className={cn(
                    'py-2 px-4 text-dark block transition-colors duration-300 hover:text-abdent-500',
                    item.sectionId === activeSection ? 'text-abdent-600 font-medium' : ''
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'py-2 px-4 text-dark block transition-colors duration-300 hover:text-abdent-500',
                    // Homepage: activate based on visible section
                    (location.pathname === '/' || location.pathname === '/index.html')
                      ? (item.sectionId === activeSection ? 'text-abdent-600 font-medium' : '')
                      : // Service detail pages: activate Leistungen
                      (location.pathname.startsWith('/service/') && item.sectionId === 'leistungen')
                        ? 'text-abdent-600 font-medium'
                        : // Other pages: activate based on exact path match
                        (item.href === location.pathname ? 'text-abdent-600 font-medium' : '')
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
