import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const location = useLocation();

  // Track active section on scroll
  React.useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['beranda', 'layanan', 'solusi', 'kontak'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const smoothScroll = (targetId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleProjectClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating to projects page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating to home page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  const isActive = (path: string) => location.pathname === path;
  const isSectionActive = (section: string) => {
    if (location.pathname !== '/') return false;
    return activeSection === section;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleHomeClick} className="flex items-center animate-fade-in">
            <img src="/logo.png" alt="IndoForceTech Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold text-gray-900">IndoForceTech</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/"
                onClick={handleHomeClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/') && isSectionActive('beranda') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Beranda
              </Link>
              <button 
                onClick={() => smoothScroll('layanan')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isSectionActive('layanan') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => smoothScroll('solusi')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isSectionActive('solusi') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Solusi
              </button>
              <Link 
                to="/projects"
                onClick={handleProjectClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/projects') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Proyek
              </Link>
              <button 
                onClick={() => smoothScroll('kontak')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isSectionActive('kontak') ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Kontak
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg rounded-b-lg">
              <Link 
                to="/"
                onClick={handleHomeClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/') && isSectionActive('beranda') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Beranda
              </Link>
              <button 
                onClick={() => smoothScroll('layanan')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isSectionActive('layanan') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => smoothScroll('solusi')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isSectionActive('solusi') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Solusi
              </button>
              <Link 
                to="/projects"
                onClick={handleProjectClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/projects') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Proyek
              </Link>
              <button 
                onClick={() => smoothScroll('kontak')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isSectionActive('kontak') ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;