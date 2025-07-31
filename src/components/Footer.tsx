import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="IndoForceTech Logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-bold text-white">IndoForceTech</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Solusi teknologi terdepan untuk transformasi digital bisnis Indonesia. 
              Menghadirkan inovasi dan keunggulan dalam setiap proyek.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/IndoForceTech" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/indoforcetech" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/IndoForceTech" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/indoforcetech" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in animation-delay-100">
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Infrastruktur IT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sistem Manajemen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Keamanan Siber</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in animation-delay-200">
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Proyek</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Karir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in animation-delay-300">
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">0818-0817-8118</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">info@indoforcetech.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">Jakarta Selatan, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm animate-fade-in animation-delay-400">
            © 2025 IndoForceTech. Semua hak cipta dilindungi.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm animate-fade-in animation-delay-500">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Syarat & Ketentuan</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Kebijakan Privasi</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;