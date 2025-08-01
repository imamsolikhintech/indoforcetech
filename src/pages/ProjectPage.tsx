import React, { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Cloud,
  CheckCircle,
  ArrowLeft,
  Filter,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  client: string;
  duration: string;
  team: number;
  status: 'completed' | 'ongoing' | 'planning';
  features: string[];
  results: string[];
  link?: string;
}

const ProjectPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistem ERP Terintegrasi PT Maju Bersama",
      description: "Pengembangan sistem Enterprise Resource Planning (ERP) komprehensif yang mengintegrasikan seluruh divisi perusahaan manufaktur dengan 500+ karyawan.",
      category: "ERP System",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      image: "/thumbnails/erp-system.svg",
      client: "PT Maju Bersama",
      duration: "8 bulan",
      team: 12,
      status: "completed",
      features: [
        "Manajemen Inventori Real-time",
        "Sistem Payroll Otomatis",
        "Dashboard Analytics",
        "Mobile App untuk Manager",
        "Integrasi dengan Bank"
      ],
      results: [
        "Efisiensi operasional meningkat 75%",
        "Pengurangan biaya administrasi 40%",
        "Waktu proses laporan berkurang 80%",
        "ROI tercapai dalam 6 bulan"
      ]
    },
    {
      id: 2,
      title: "Platform E-Commerce B2B Nusantara",
      description: "Membangun platform e-commerce B2B yang menghubungkan supplier dan retailer di seluruh Indonesia dengan fitur marketplace yang canggih.",
      category: "E-Commerce",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
      image: "/thumbnails/e-commerce.svg",
      client: "PT Nusantara Digital",
      duration: "10 bulan",
      team: 15,
      status: "completed",
      features: [
        "Multi-vendor Marketplace",
        "Sistem Pembayaran Terintegrasi",
        "Logistik & Tracking",
        "AI-powered Recommendation",
        "Mobile App iOS & Android"
      ],
      results: [
        "1000+ vendor terdaftar",
        "Transaksi Rp 50M+ per bulan",
        "Rating kepuasan 4.8/5",
        "Ekspansi ke 15 kota"
      ]
    },
    {
      id: 3,
      title: "Aplikasi Mobile Banking BankTech",
      description: "Pengembangan aplikasi mobile banking dengan fitur keamanan tingkat enterprise dan user experience yang intuitif untuk nasabah korporat.",
      category: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Biometric Auth"],
      image: "/thumbnails/mobile-app.svg",
      client: "BankTech Indonesia",
      duration: "6 bulan",
      team: 8,
      status: "completed",
      features: [
        "Biometric Authentication",
        "Real-time Transaction",
        "QR Code Payment",
        "Investment Portfolio",
        "24/7 Customer Support Chat"
      ],
      results: [
        "500K+ downloads dalam 3 bulan",
        "99.9% uptime reliability",
        "Transaksi harian 10K+",
        "Security audit AAA rating"
      ]
    },
    {
      id: 4,
      title: "Smart City Dashboard Jakarta Selatan",
      description: "Sistem monitoring dan manajemen kota pintar yang mengintegrasikan data dari berbagai sensor IoT untuk optimalisasi layanan publik.",
      category: "IoT System",
      technologies: ["Angular", "Python", "InfluxDB", "Grafana", "IoT Sensors"],
      image: "/thumbnails/iot-system.svg",
      client: "Pemda Jakarta Selatan",
      duration: "12 bulan",
      team: 20,
      status: "ongoing",
      features: [
        "Traffic Monitoring System",
        "Air Quality Sensors",
        "Smart Lighting Control",
        "Waste Management Tracking",
        "Emergency Response System"
      ],
      results: [
        "Pengurangan kemacetan 30%",
        "Efisiensi energi 25%",
        "Response time emergency 50% lebih cepat",
        "Kepuasan warga meningkat 40%"
      ]
    },
    {
      id: 5,
      title: "Sistem Keamanan Siber Enterprise",
      description: "Implementasi solusi keamanan siber komprehensif untuk perusahaan multinasional dengan 10,000+ endpoint dan data sensitif.",
      category: "Cybersecurity",
      technologies: ["SIEM", "EDR", "Firewall", "VPN", "Threat Intelligence"],
      image: "/thumbnails/cybersecurity.svg",
      client: "PT Global Secure",
      duration: "4 bulan",
      team: 6,
      status: "completed",
      features: [
        "24/7 SOC Monitoring",
        "Advanced Threat Detection",
        "Incident Response Automation",
        "Compliance Reporting",
        "Employee Security Training"
      ],
      results: [
        "Zero successful cyber attacks",
        "99.99% threat detection rate",
        "Compliance certification achieved",
        "Security awareness 95%"
      ]
    },
    {
      id: 6,
      title: "Cloud Migration & Modernization",
      description: "Migrasi infrastruktur legacy ke cloud AWS dengan modernisasi aplikasi menggunakan microservices architecture.",
      category: "Cloud Computing",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      image: "/thumbnails/cloud-computing.svg",
      client: "PT Teknologi Masa Depan",
      duration: "7 bulan",
      team: 10,
      status: "completed",
      features: [
        "Microservices Architecture",
        "Auto-scaling Infrastructure",
        "DevOps Pipeline",
        "Disaster Recovery",
        "Cost Optimization"
      ],
      results: [
        "Biaya infrastruktur turun 60%",
        "Performance meningkat 300%",
        "Deployment time 90% lebih cepat",
        "99.99% availability"
      ]
    },
    {
      id: 7,
      title: "Sistem ERP Manufaktur PT Industri Nusantara",
      description: "Implementasi sistem ERP khusus untuk industri manufaktur dengan fokus pada production planning dan quality control.",
      category: "ERP System",
      technologies: ["Angular", "Spring Boot", "Oracle", "Kubernetes", "Jenkins"],
      image: "/thumbnails/erp-system.svg",
      client: "PT Industri Nusantara",
      duration: "10 bulan",
      team: 14,
      status: "completed",
      features: [
        "Production Planning Module",
        "Quality Control System",
        "Supply Chain Management",
        "Financial Reporting",
        "HR Management System"
      ],
      results: [
        "Produktivitas meningkat 65%",
        "Waste reduction 35%",
        "Quality score 98%",
        "Cost saving 45%"
      ]
    },
    {
      id: 8,
      title: "ERP Healthcare Management System",
      description: "Sistem ERP terintegrasi untuk rumah sakit dengan manajemen pasien, inventori medis, dan billing system.",
      category: "ERP System",
      technologies: ["React", "Django", "PostgreSQL", "Redis", "Docker"],
      image: "/thumbnails/erp-system.svg",
      client: "RS Sehat Sentosa",
      duration: "9 bulan",
      team: 16,
      status: "ongoing",
      features: [
        "Patient Management System",
        "Medical Inventory Control",
        "Electronic Health Records",
        "Billing & Insurance",
        "Staff Scheduling"
      ],
      results: [
        "Patient wait time -50%",
        "Administrative cost -30%",
        "Data accuracy 99.5%",
        "Staff efficiency +40%"
      ]
    },
    {
      id: 9,
      title: "Marketplace Fashion Indonesia",
      description: "Platform e-commerce khusus fashion lokal dengan fitur virtual try-on dan personalized recommendation.",
      category: "E-Commerce",
      technologies: ["Next.js", "Express.js", "MongoDB", "AI/ML", "WebRTC"],
      image: "/thumbnails/e-commerce.svg",
      client: "Fashion Hub Indonesia",
      duration: "8 bulan",
      team: 12,
      status: "completed",
      features: [
        "Virtual Try-On Technology",
        "AI Fashion Recommendation",
        "Social Commerce Features",
        "Multi-payment Gateway",
        "Influencer Partnership Program"
      ],
      results: [
        "2000+ brand partners",
        "Monthly GMV Rp 75M+",
        "User engagement +85%",
        "Return rate -60%"
      ]
    },
    {
      id: 10,
      title: "Grocery Delivery Platform",
      description: "Aplikasi e-commerce untuk delivery groceries dengan real-time tracking dan inventory management.",
      category: "E-Commerce",
      technologies: ["React Native", "Node.js", "MySQL", "Socket.io", "Google Maps API"],
      image: "/thumbnails/e-commerce.svg",
      client: "FreshMart Digital",
      duration: "6 bulan",
      team: 10,
      status: "completed",
      features: [
        "Real-time Order Tracking",
        "Smart Inventory System",
        "Multiple Store Integration",
        "Scheduled Delivery",
        "Loyalty Program"
      ],
      results: [
        "50K+ active users",
        "Average delivery 45 minutes",
        "Customer satisfaction 4.7/5",
        "Monthly orders 100K+"
      ]
    },
    {
      id: 11,
      title: "B2B Wholesale E-Commerce",
      description: "Platform e-commerce B2B untuk distributor dan retailer dengan sistem kredit dan bulk ordering.",
      category: "E-Commerce",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Elasticsearch", "RabbitMQ"],
      image: "/thumbnails/e-commerce.svg",
      client: "Wholesale Connect",
      duration: "12 bulan",
      team: 18,
      status: "ongoing",
      features: [
        "Bulk Order Management",
        "Credit Limit System",
        "Price Negotiation Tool",
        "Inventory Sync",
        "Advanced Analytics"
      ],
      results: [
        "500+ distributors onboard",
        "Monthly transaction Rp 200M+",
        "Order processing time -70%",
        "Payment collection +90%"
      ]
    },
    {
      id: 12,
      title: "Fintech Mobile Wallet",
      description: "Aplikasi mobile wallet dengan fitur pembayaran digital, transfer, dan investasi mikro.",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Blockchain"],
      image: "/thumbnails/mobile-app.svg",
      client: "DigitalPay Indonesia",
      duration: "7 bulan",
      team: 11,
      status: "completed",
      features: [
        "Digital Wallet",
        "QR Code Payment",
        "Micro Investment",
        "Bill Payment",
        "Peer-to-Peer Transfer"
      ],
      results: [
        "1M+ downloads",
        "Daily transactions 50K+",
        "Transaction value Rp 10B+/month",
        "User retention 85%"
      ]
    },
    {
      id: 13,
      title: "Healthcare Mobile App",
      description: "Aplikasi mobile untuk konsultasi dokter online, booking appointment, dan medical records.",
      category: "Mobile App",
      technologies: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "AWS"],
      image: "/thumbnails/mobile-app.svg",
      client: "HealthCare Digital",
      duration: "5 bulan",
      team: 9,
      status: "completed",
      features: [
        "Video Consultation",
        "Appointment Booking",
        "Digital Prescription",
        "Health Records",
        "Medicine Delivery"
      ],
      results: [
        "200+ doctors registered",
        "10K+ consultations/month",
        "Patient satisfaction 4.8/5",
        "Response time <2 minutes"
      ]
    },
    {
      id: 14,
      title: "Education Learning Mobile App",
      description: "Platform pembelajaran online mobile dengan fitur live streaming, quiz interaktif, dan progress tracking.",
      category: "Mobile App",
      technologies: ["Flutter", "Django", "PostgreSQL", "WebRTC", "AI/ML"],
      image: "/thumbnails/mobile-app.svg",
      client: "EduTech Indonesia",
      duration: "8 bulan",
      team: 13,
      status: "ongoing",
      features: [
        "Live Streaming Classes",
        "Interactive Quizzes",
        "Progress Analytics",
        "Offline Content",
        "AI-powered Recommendations"
      ],
      results: [
        "100K+ students enrolled",
        "500+ courses available",
        "Completion rate 78%",
        "Student satisfaction 4.6/5"
      ]
    },
    {
      id: 15,
      title: "Smart Agriculture IoT Platform",
      description: "Sistem IoT untuk monitoring pertanian pintar dengan sensor kelembaban, suhu, dan otomasi irigasi.",
      category: "IoT System",
      technologies: ["React", "Python", "InfluxDB", "MQTT", "LoRaWAN"],
      image: "/thumbnails/iot-system.svg",
      client: "AgriTech Solutions",
      duration: "6 bulan",
      team: 8,
      status: "completed",
      features: [
        "Soil Moisture Monitoring",
        "Weather Station Integration",
        "Automated Irrigation",
        "Crop Health Analytics",
        "Mobile Dashboard"
      ],
      results: [
        "Water usage -40%",
        "Crop yield +35%",
        "Labor cost -50%",
        "ROI achieved in 8 months"
      ]
    },
    {
      id: 16,
      title: "Industrial IoT Monitoring System",
      description: "Platform IoT untuk monitoring mesin industri dengan predictive maintenance dan real-time alerts.",
      category: "IoT System",
      technologies: ["Angular", "Node.js", "TimescaleDB", "Grafana", "Edge Computing"],
      image: "/thumbnails/iot-system.svg",
      client: "PT Manufaktur Maju",
      duration: "9 bulan",
      team: 12,
      status: "completed",
      features: [
        "Machine Health Monitoring",
        "Predictive Maintenance",
        "Energy Consumption Tracking",
        "Production Analytics",
        "Alert Management System"
      ],
      results: [
        "Downtime reduction 60%",
        "Maintenance cost -45%",
        "Energy efficiency +25%",
        "Production output +20%"
      ]
    },
    {
      id: 17,
      title: "Smart Building Management IoT",
      description: "Sistem IoT untuk manajemen gedung pintar dengan kontrol HVAC, lighting, dan security terintegrasi.",
      category: "IoT System",
      technologies: ["Vue.js", "Python", "InfluxDB", "Zigbee", "BACnet"],
      image: "/thumbnails/iot-system.svg",
      client: "Smart Building Corp",
      duration: "10 bulan",
      team: 15,
      status: "ongoing",
      features: [
        "HVAC Automation",
        "Smart Lighting Control",
        "Access Control System",
        "Energy Management",
        "Occupancy Analytics"
      ],
      results: [
        "Energy consumption -35%",
        "Operational cost -30%",
        "Tenant satisfaction +50%",
        "Security incidents -80%"
      ]
    },
    {
      id: 18,
      title: "Enterprise Security Operations Center",
      description: "Implementasi SOC (Security Operations Center) dengan SIEM, threat hunting, dan incident response.",
      category: "Cybersecurity",
      technologies: ["Splunk", "Phantom", "CrowdStrike", "Nessus", "Python"],
      image: "/thumbnails/cybersecurity.svg",
      client: "PT Secure Enterprise",
      duration: "5 bulan",
      team: 7,
      status: "completed",
      features: [
        "24/7 Security Monitoring",
        "Threat Intelligence Integration",
        "Automated Incident Response",
        "Vulnerability Management",
        "Security Awareness Training"
      ],
      results: [
        "Mean detection time <5 minutes",
        "False positive rate <2%",
        "Incident response time -75%",
        "Security posture score 95%"
      ]
    },
    {
      id: 19,
      title: "Banking Cybersecurity Framework",
      description: "Implementasi framework keamanan siber komprehensif untuk institusi perbankan sesuai standar OJK.",
      category: "Cybersecurity",
      technologies: ["IBM QRadar", "Fortinet", "CyberArk", "Varonis", "Rapid7"],
      image: "/thumbnails/cybersecurity.svg",
      client: "Bank Digital Indonesia",
      duration: "8 bulan",
      team: 10,
      status: "completed",
      features: [
        "Multi-factor Authentication",
        "Data Loss Prevention",
        "Privileged Access Management",
        "Network Segmentation",
        "Compliance Reporting"
      ],
      results: [
        "Zero security breaches",
        "OJK compliance achieved",
        "Security audit score A+",
        "Customer trust +60%"
      ]
    },
    {
      id: 20,
      title: "Government Cybersecurity Infrastructure",
      description: "Pembangunan infrastruktur keamanan siber untuk instansi pemerintah dengan standar keamanan nasional.",
      category: "Cybersecurity",
      technologies: ["Elastic SIEM", "Palo Alto", "Trend Micro", "Symantec", "Custom SOC"],
      image: "/thumbnails/cybersecurity.svg",
      client: "Kementerian Digital",
      duration: "12 bulan",
      team: 20,
      status: "ongoing",
      features: [
        "National Cyber Threat Center",
        "Government Network Security",
        "Digital Identity Management",
        "Cyber Incident Response",
        "Security Policy Framework"
      ],
      results: [
        "National security level +80%",
        "Cyber attack prevention 99%",
        "Government data protection 100%",
        "Inter-agency collaboration +90%"
      ]
    },
    {
      id: 21,
      title: "Multi-Cloud Infrastructure Migration",
      description: "Migrasi dan optimasi infrastruktur ke multi-cloud environment dengan disaster recovery dan high availability.",
      category: "Cloud Computing",
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Ansible"],
      image: "/thumbnails/cloud-computing.svg",
      client: "PT Tech Innovator",
      duration: "6 bulan",
      team: 8,
      status: "completed",
      features: [
        "Multi-cloud Architecture",
        "Disaster Recovery Setup",
        "Auto-scaling Configuration",
        "Cost Optimization",
        "Security Compliance"
      ],
      results: [
        "99.99% uptime achieved",
        "Infrastructure cost -55%",
        "Deployment speed +400%",
        "Disaster recovery RTO <1 hour"
      ]
    },
    {
      id: 22,
      title: "Serverless Application Platform",
      description: "Pembangunan platform aplikasi serverless dengan microservices architecture dan event-driven design.",
      category: "Cloud Computing",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge", "CloudFormation"],
      image: "/thumbnails/cloud-computing.svg",
      client: "StartupTech Indonesia",
      duration: "4 bulan",
      team: 6,
      status: "completed",
      features: [
        "Serverless Microservices",
        "Event-driven Architecture",
        "Auto-scaling Functions",
        "Pay-per-use Model",
        "Real-time Analytics"
      ],
      results: [
        "Operating cost -70%",
        "Scalability unlimited",
        "Development speed +300%",
        "Time to market -80%"
      ]
    },
    {
      id: 23,
      title: "Enterprise Cloud Data Platform",
      description: "Implementasi data platform cloud untuk big data analytics dengan machine learning dan real-time processing.",
      category: "Cloud Computing",
      technologies: ["AWS", "Snowflake", "Apache Spark", "Airflow", "MLflow"],
      image: "/thumbnails/cloud-computing.svg",
      client: "Data Analytics Corp",
      duration: "9 bulan",
      team: 14,
      status: "ongoing",
      features: [
        "Data Lake Architecture",
        "Real-time Stream Processing",
        "ML Model Deployment",
        "Data Governance",
        "Self-service Analytics"
      ],
      results: [
        "Data processing speed +500%",
        "Analytics insights real-time",
        "ML model accuracy 95%+",
        "Business decision speed +200%"
      ]
    }
  ];

  const categories = ['all', 'ERP System', 'E-Commerce', 'Mobile App', 'IoT System', 'Cybersecurity', 'Cloud Computing'];

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

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Selesai';
      case 'ongoing': return 'Berlangsung';
      case 'planning': return 'Perencanaan';
      default: return status;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ERP System': return <Database className="h-5 w-5" />;
      case 'E-Commerce': return <Globe className="h-5 w-5" />;
      case 'Mobile App': return <Smartphone className="h-5 w-5" />;
      case 'IoT System': return <Code className="h-5 w-5" />;
      case 'Cybersecurity': return <Shield className="h-5 w-5" />;
      case 'Cloud Computing': return <Cloud className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Portfolio Proyek Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Koleksi proyek teknologi yang telah berhasil kami selesaikan untuk berbagai klien 
              di Indonesia. Setiap proyek mencerminkan komitmen kami terhadap inovasi dan kualitas.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari proyek atau teknologi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Semua' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada proyek yang ditemukan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:scale-105 ${
                    isVisible[`project-${project.id}`] ? 'opacity-100 translate-y-0' : 'opacity-1 translate-y-10'
                  }`}
                  data-animate
                  id={`project-${project.id}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {getStatusText(project.status)}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {project.team} orang
                      </div>
                      <div className="text-gray-500 font-medium">
                        {project.client}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Teknologi:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-gray-500 italic">
                            +{project.features.length - 3} fitur lainnya
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Hasil & Dampak:</h4>
                      <ul className="space-y-2">
                        {project.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      >
                        Lihat Detail
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mari diskusikan bagaimana kami dapat membantu mewujudkan visi teknologi perusahaan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#kontak"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Konsultasi Gratis
            </Link>
            <a
              href="https://wa.me/6281808178118?text=Halo%20IndoForceTech%2C%20saya%20tertarik%20untuk%20memulai%20proyek%20teknologi"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;