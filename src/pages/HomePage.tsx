import React, { useEffect, useState } from 'react';
import { 
  Code, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Server,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Monitor
} from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [pesan, setPesan] = useState("");

  const handleKirimPesan = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Nama Lengkap: ${nama}\nEmail: ${email}\nPerusahaan: ${perusahaan}\nPesan: ${pesan}`;
    const waUrl = `https://wa.me/6281808178118?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Transformasi Digital 
                <span className="text-blue-600 animate-pulse"> Terdepan</span> untuk 
                <span className="text-green-600 animate-bounce"> Masa Depan</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
                Kami menghadirkan solusi teknologi inovatif dan sistem terintegrasi untuk mengoptimalkan 
                operasional bisnis Anda. Dari konsep hingga implementasi, IndoForceTech adalah mitra 
                terpercaya dalam perjalanan digitalisasi perusahaan.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button 
                  onClick={() => smoothScroll('kontak')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl group"
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => window.location.href = '/projects'}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Lihat Portfolio
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Technology Solutions IndoForceTech" 
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-bounce-slow hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full animate-pulse">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">500+ Proyek</p>
                      <p className="text-sm text-gray-600">Berhasil Diselesaikan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center transition-all duration-1000 ${
              isVisible['services-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            id="services-header"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Unggulan Kami</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi teknologi komprehensif yang dirancang khusus untuk kebutuhan bisnis modern
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible['service-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="service-1"
            >
              <div className="bg-blue-600 p-3 rounded-full w-fit animate-bounce-slow hover:rotate-12 transition-transform duration-300">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Infrastruktur IT</h3>
              <p className="mt-4 text-gray-600">
                Desain, implementasi, dan maintenance infrastruktur IT yang robust dan scalable 
                untuk mendukung pertumbuhan bisnis jangka panjang.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Server & Network Setup
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Cloud Migration
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  24/7 Monitoring
                </li>
              </ul>
            </div>

            <div 
              className={`bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible['service-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="service-2"
            >
              <div className="bg-green-600 p-3 rounded-full w-fit animate-bounce-slow hover:rotate-12 transition-transform duration-300">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Sistem Manajemen</h3>
              <p className="mt-4 text-gray-600">
                Pengembangan sistem manajemen terintegrasi yang mengotomatisasi proses bisnis 
                dan meningkatkan efisiensi operasional perusahaan.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  ERP Implementation
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Custom Software
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Data Integration
                </li>
              </ul>
            </div>

            <div 
              className={`bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible['service-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="service-3"
            >
              <div className="bg-orange-600 p-3 rounded-full w-fit animate-bounce-slow hover:rotate-12 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Keamanan Siber</h3>
              <p className="mt-4 text-gray-600">
                Perlindungan menyeluruh untuk aset digital perusahaan dengan teknologi keamanan 
                terdepan dan strategi risk management yang komprehensif.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-100">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Security Assessment
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-200">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Firewall & Antivirus
                </li>
                <li className="flex items-center text-sm text-gray-600 animate-fade-in animation-delay-300">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Data Backup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solusi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center transition-all duration-1000 ${
              isVisible['solutions-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            id="solutions-header"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Solusi Teknologi Terpadu</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Platform dan teknologi modern yang mengintegrasikan seluruh aspek bisnis digital
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-1000 ${
                isVisible['solutions-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              data-animate
              id="solutions-content"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformasi Digital Menyeluruh</h3>
              <div className="space-y-6">
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Cloud className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Cloud Computing</h4>
                    <p className="text-gray-600">Migrasi ke cloud dengan AWS, Azure, atau Google Cloud untuk skalabilitas maksimal</p>
                  </div>
                </div>
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="bg-green-100 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Mobile Solutions</h4>
                    <p className="text-gray-600">Aplikasi mobile native dan hybrid untuk iOS dan Android</p>
                  </div>
                </div>
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="bg-orange-100 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Web Development</h4>
                    <p className="text-gray-600">Website dan web app responsif dengan teknologi terkini</p>
                  </div>
                </div>
                <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="bg-purple-100 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Monitor className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">System Integration</h4>
                    <p className="text-gray-600">Integrasi sistem legacy dengan platform modern</p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className={`transition-all duration-1000 ${
                isVisible['solutions-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              data-animate
              id="solutions-image"
            >
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Digital Solutions IndoForceTech" 
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center transition-all duration-1000 ${
              isVisible['why-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-animate
            id="why-header"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mengapa Memilih IndoForceTech?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan kompetitif yang membuat kami menjadi pilihan utama untuk transformasi digital
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className={`text-center group hover:scale-110 transition-all duration-500 ${
                isVisible['why-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="why-1"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Tim Ahli</h3>
              <p className="mt-2 text-gray-600">Developer dan engineer berpengalaman 10+ tahun</p>
            </div>
            <div 
              className={`text-center group hover:scale-110 transition-all duration-500 ${
                isVisible['why-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="why-2"
            >
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Delivery Cepat</h3>
              <p className="mt-2 text-gray-600">Metodologi Agile untuk hasil optimal dan tepat waktu</p>
            </div>
            <div 
              className={`text-center group hover:scale-110 transition-all duration-500 ${
                isVisible['why-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="why-3"
            >
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Terpercaya</h3>
              <p className="mt-2 text-gray-600">Sertifikasi ISO dan track record solid 8 tahun</p>
            </div>
            <div 
              className={`text-center group hover:scale-110 transition-all duration-500 ${
                isVisible['why-4'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-animate
              id="why-4"
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Support 24/7</h3>
              <p className="mt-2 text-gray-600">Dukungan teknis berkelanjutan dan maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section 
        className={`py-20 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-1000 ${
          isVisible['testimonial'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        data-animate
        id="testimonial"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed animate-fade-in-up">
            "IndoForceTech telah mentransformasi operasional kami secara menyeluruh. 
            Sistem ERP yang mereka kembangkan meningkatkan efisiensi hingga 75% 
            dan menghemat biaya operasional secara signifikan."
          </blockquote>
          <div className="mt-8 animate-fade-in-up animation-delay-300">
            <p className="text-xl font-semibold text-white">Budi Santoso</p>
            <p className="text-blue-100">CEO, PT Maju Bersama</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-1000 ${
                isVisible['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              data-animate
              id="contact-info"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Siap Memulai Transformasi Digital?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami. 
                Dapatkan analisis mendalam dan rekomendasi solusi terbaik.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-white">0818-0817-8118</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-white">info@indoforcetech.com</span>
                </div>
                <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-white">Jakarta Selatan, Indonesia</span>
                </div>
              </div>
            </div>

            <div 
              className={`bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 ${
                isVisible['contact-form'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              data-animate
              id="contact-form"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h3>
              <form className="space-y-4" onSubmit={handleKirimPesan}>
                <div className="animate-fade-in animation-delay-100">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text"
                    value={nama}
                    onChange={e => setNama(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div className="animate-fade-in animation-delay-200">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="nama@perusahaan.com"
                    required
                  />
                </div>
                <div className="animate-fade-in animation-delay-300">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Perusahaan</label>
                  <input 
                    type="text"
                    value={perusahaan}
                    onChange={e => setPerusahaan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="Nama perusahaan"
                  />
                </div>
                <div className="animate-fade-in animation-delay-400">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    rows={4}
                    value={pesan}
                    onChange={e => setPesan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    placeholder="Ceritakan kebutuhan teknologi Anda..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in animation-delay-500"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;