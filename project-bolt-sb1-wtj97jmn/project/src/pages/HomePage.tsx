import { useEffect, useRef, useState } from 'react';
import {
  Award, Truck, FlaskConical, Shield, ChevronRight, Phone, Star, CheckCircle2,
  MessageSquare, Info,
} from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import AboutModal from '../components/AboutModal';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const highlights = [
  {
    icon: Award,
    title: 'Premium Quality Concrete',
    desc: 'Engineered for superior strength and durability with strict quality control at every batch.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Reliable on-time delivery fleet ensuring your project never faces delays.',
  },
  {
    icon: FlaskConical,
    title: 'Expert Mix Design',
    desc: 'Precise mix proportions designed by experienced engineers for every project type.',
  },
  {
    icon: Shield,
    title: 'Reliable Transportation',
    desc: 'Advanced transit mixer fleet with real-time tracking for safe concrete delivery.',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '7+', label: 'Vehicles' },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function HomePage({ onNavigate }: HomeProps) {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const statsSection = useInView(0.2);
  const highlightsSection = useInView(0.1);
  const introSection = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Modals */}
      {showQuote && <QuoteModal onClose={() => setShowQuote(false)} />}
      {showAbout && (
        <AboutModal
          onClose={() => setShowAbout(false)}
          onNavigateAbout={() => handleNav('about')}
        />
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Ready Mix Concrete Plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/88 via-gray-900/75 to-green-900/65" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* 1. Logo */}
          <div className="flex justify-center mb-7">
            <div className="relative group">
              <div className="absolute -inset-3 bg-white/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-2xl shadow-black/30 hover:shadow-black/50 transition-all duration-300 border border-white/30">
                <img
                  src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                  alt="SSV Foundation Logo"
                  className="h-20 sm:h-24 lg:h-28 w-auto object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* 2. Company Name */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5" />
            Trusted Ready Mix Concrete Supplier
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-5 leading-none tracking-tight">
            SSV <span className="text-green-400">FOUNDATION</span>
          </h1>

          {/* 3. Tagline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-medium max-w-3xl mx-auto mb-9 leading-relaxed">
            Building Strength, Delivering Trust —{' '}
            <span className="text-green-300">Premium Ready Mix Concrete Solutions</span> at Competitive Prices.
          </p>

          {/* 4. Three CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap">
            <button
              onClick={() => setShowQuote(true)}
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5" />
              Get Quote
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setShowAbout(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Info className="w-5 h-5" />
              About Us
            </button>
            <a
              href="tel:+918939757852"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsSection.ref} className="bg-green-700 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-green-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section ref={highlightsSection.ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Key Strengths</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              We deliver excellence at every stage – from mix design to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${highlightsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-green-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={introSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={`transition-all duration-700 ${introSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">About SSV Foundation</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner for{' '}
                <span className="text-green-600">Premium Concrete</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                SSV FOUNDATION is a trusted provider of premium-quality ready mix concrete solutions for residential, commercial, and infrastructure projects. We combine quality materials, expert engineering, and reliable delivery services to help customers build stronger and safer structures.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Strict quality control on every batch',
                  'Expert mix proportion design for every project',
                  'Advanced transit mixer fleet for on-time delivery',
                  'Serving residential, commercial & infrastructure projects',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => handleNav('about')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-xl transition-colors flex items-center gap-2 group"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleNav('concrete')}
                  className="px-6 py-3 border border-green-200 text-green-700 font-semibold text-sm rounded-xl hover:bg-green-50 transition-colors"
                >
                  Our Products
                </button>
              </div>
            </div>

            {/* Image with subtle logo watermark */}
            <div className={`transition-all duration-700 delay-200 ${introSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="Construction site"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                {/* Subtle logo watermark */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-xl p-2">
                  <img
                    src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                    alt="SSV Foundation"
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Premium Quality Certified</p>
                      <p className="text-xs text-gray-500">Superior-grade concrete for every project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo in CTA */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
              <img
                src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                alt="SSV Foundation"
                className="h-10 w-auto object-contain opacity-95"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
            Contact SSV Foundation today and get a competitive quote for your next construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuote(true)}
              className="px-8 py-4 bg-white text-green-700 font-bold text-base rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5" />
              Get a Free Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+918939757852"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Mr. Vijay — 8939757852
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
