import { useEffect, useRef, useState } from 'react';
import {
  FlaskConical, Settings, Truck, ShieldCheck, Home, Building2,
  Phone, Mail, MapPin, ChevronRight, Users, Star, Layers,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const featureCards = [
  {
    icon: FlaskConical,
    title: 'Expert Mix Proportion Design',
    desc: 'Our experienced engineers design precise concrete mix proportions tailored to achieve specific strength, workability, and durability requirements for each project.',
    accent: 'border-green-200 bg-green-50',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    icon: Settings,
    title: 'Professional Plant Management',
    desc: 'Our skilled plant in-charge and operations team oversee every batch to ensure consistent quality and production efficiency at our batching plant.',
    accent: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Truck,
    title: 'Advanced Transportation Fleet',
    desc: 'We operate a modern fleet of transit mixers equipped for safe and timely delivery of ready mix concrete to construction sites of all sizes.',
    accent: 'border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control Standards',
    desc: 'Every batch undergoes rigorous testing – cube tests, slump tests, and batch records – to meet and exceed industry quality standards.',
    accent: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Home,
    title: 'Residential Construction Solutions',
    desc: 'From individual homes to housing complexes, we provide perfectly graded concrete solutions to ensure strong foundations and lasting structures.',
    accent: 'border-rose-200 bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Building2,
    title: 'Commercial Construction Solutions',
    desc: 'High-capacity, uninterrupted concrete supply for offices, malls, apartments, and large-scale infrastructure projects requiring premium performance.',
    accent: 'border-teal-200 bg-teal-50',
    iconBg: 'bg-teal-100 text-teal-700',
  },
];

const values = [
  { icon: Star, label: 'Quality First', desc: 'No compromise on raw materials or mix standards.' },
  { icon: Users, label: 'Customer Focus', desc: 'Your project success is our primary goal.' },
  { icon: Layers, label: 'Technical Expertise', desc: 'Backed by engineering knowledge and experience.' },
  { icon: ShieldCheck, label: 'Reliability', desc: 'Consistent supply and dependable service every time.' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const introSection = useInView(0.1);
  const valuesSection = useInView(0.1);
  const cardsSection = useInView(0.05);
  const contactSection = useInView(0.1);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Construction"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-green-300 text-xs font-bold uppercase tracking-widest mb-4 bg-green-600/20 border border-green-500/30 px-4 py-1.5 rounded-full">
            Company Profile
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            About <span className="text-green-400">SSV Foundation</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Committed to delivering premium-quality concrete solutions with technical excellence and outstanding service.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section ref={introSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className={`transition-all duration-700 ${introSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                    alt="SSV Foundation Plant"
                    className="w-full h-80 lg:h-[440px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-4 bg-green-600 text-white rounded-2xl p-5 shadow-2xl">
                  <div className="text-3xl font-extrabold leading-none">5+</div>
                  <div className="text-green-100 text-xs font-semibold mt-1">Years of Excellence</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Quality Certified</p>
                      <p className="text-xs text-gray-400">ISO Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={`transition-all duration-700 delay-200 ${introSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-4 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Building Stronger Structures,{' '}
                <span className="text-green-600">One Batch at a Time</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  SSV Foundation is committed to delivering premium-quality concrete solutions for residential, commercial, and infrastructure projects. Our advanced vehicles and transportation services ensure timely and safe delivery of concrete to every site.
                </p>
                <p>
                  We take pride in having one of the most reliable transport systems in the industry, ensuring uninterrupted service for our customers. Our experienced managers and skilled plant in-charge carefully design the perfect mix proportions to achieve superior strength and durability.
                </p>
                <p>
                  Every batch of concrete is produced with strict quality control and premium raw materials. Whether you are building a home, apartment, office, or commercial complex, our concrete is engineered for outstanding performance.
                </p>
                <p>
                  We focus on creating ultra-strong structures that stand the test of time. Customer satisfaction, quality, and reliability are the foundations of our work. With professional service and technical expertise, we support your project from start to finish.
                </p>
              </div>
              <button
                onClick={() => handleNav('concrete')}
                className="mt-8 px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 group shadow-lg"
              >
                View Our Concrete
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Message */}
      <section className="py-16 bg-green-50 border-y border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-white px-4 py-1.5 rounded-full border border-green-200">Message from the Managing Director</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">A Word from Mr. Krishna</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-8 sm:p-10 relative">
            <div className="text-6xl text-green-200 font-serif leading-none absolute top-6 left-8 select-none">"</div>
            <div className="relative z-10 pt-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 italic">
                At SSV Foundation, our commitment goes beyond supplying concrete — we are building the foundation of your trust. Every batch we produce is a promise of strength, precision, and reliability. We understand that the structures you build today must stand strong for generations, and that is why we never compromise on quality.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                Our team works tirelessly to ensure on-time delivery, technical excellence, and the highest standards of customer service. I personally oversee our operations to make sure every customer receives the best ready mix concrete at competitive prices. Your project's success is our greatest achievement.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-green-100">
                <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold text-xl">K</span>
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900">Mr. Krishna</p>
                  <p className="text-sm text-green-600 font-semibold">Managing Director, SSV Foundation</p>
                  <p className="text-xs text-gray-400 mt-0.5">Kolapancheri, Chennai — 600072</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesSection.ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Our core values shape every decision we make — from material selection to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.label}
                  className={`bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${valuesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{val.label}</h3>
                  <p className="text-sm text-gray-500">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section ref={cardsSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Expert Service Areas</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Comprehensive concrete services backed by engineering knowledge and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`rounded-2xl p-7 border ${card.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${cardsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactSection.ref} className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Contact SSV Foundation</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Reach out to us for quotes, project consultations, or any inquiry about our concrete services.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 ${contactSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mr. Krishna card — navigates to Concrete & Vehicles page */}
            <button
              onClick={() => handleNav('concrete')}
              className={`bg-white rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group block w-full ${contactSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <Phone className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Plant Manager</h3>
              <p className="text-base font-semibold text-gray-900 mb-1">Mr. Vijay</p>
              <p className="text-sm text-gray-400">Mr. Vijay — Plant Manager — Mon–Sat, 8am–6pm</p>
            </button>

            <a
              href="mailto:ssv_foundation@yahoo.co.in"
              className={`bg-white rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group block ${contactSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '120ms' }}
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <Mail className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Email Us</h3>
              <p className="text-base font-semibold text-gray-900 mb-1">ssv_foundation@yahoo.co.in</p>
              <p className="text-sm text-gray-400">We reply within 24 hours</p>
            </a>

            <a
              href="#"
              className={`bg-white rounded-2xl p-7 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group block ${contactSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '240ms' }}
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <MapPin className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Visit Us</h3>
              <p className="text-base font-semibold text-gray-900 mb-1">SSV Foundation Plant</p>
              <p className="text-sm text-gray-400">Kolapancheri, Chennai — 600072</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Choose SSV Foundation for Your Next Project
          </h2>
          <p className="text-green-100 text-base mb-8 max-w-xl mx-auto">
            Build stronger, safer, and longer-lasting structures with our premium ready mix concrete solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ssv_foundation@yahoo.co.in"
              className="px-8 py-4 bg-white text-green-700 font-bold text-base rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Mr. Vijay
            </a>
            <button
              onClick={() => handleNav('concrete')}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 group"
            >
              Our Concrete Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
