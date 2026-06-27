import { useEffect, useRef, useState } from 'react';
import { Zap, Package, CheckCircle, Clock, Home, Building2, ChevronRight, Phone, Layers, IndianRupee } from 'lucide-react';

interface ConcretePageProps {
  onNavigate: (page: string) => void;
}

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Ready Mix Concrete Transit Mixer Truck',
    label: 'Transit Mixer Fleet',
  },
  {
    src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Concrete Batching Plant',
    label: 'Batching Plant Operations',
  },
  {
    src: 'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Concrete Pouring at Construction',
    label: 'Concrete Delivery in Action',
  },
  {
    src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Construction Project with RMC',
    label: 'Infrastructure Projects',
  },
  {
    src: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Commercial Building Construction',
    label: 'Commercial Structures',
  },
  {
    src: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    alt: 'Construction Site Operations',
    label: 'Site Operations',
  },
];

const features = [
  {
    icon: Zap,
    title: 'High Strength Concrete',
    desc: 'Our concrete delivers exceptional compressive strength for all structural applications.',
    color: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600',
  },
  {
    icon: Package,
    title: 'Premium Materials',
    desc: 'We source only the finest aggregates, cement, and admixtures to guarantee quality.',
    color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    desc: 'Rigorous cube testing and batch monitoring ensures each delivery meets specifications.',
    color: 'bg-green-50 text-green-600 group-hover:bg-green-600',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'Our dispatch planning ensures concrete arrives fresh and on schedule every time.',
    color: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    desc: 'From foundations to slabs, we serve homebuilders with reliable and affordable concrete.',
    color: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    desc: 'High-volume supply with uninterrupted delivery for large-scale commercial construction.',
    color: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600',
  },
];

const concreteGrades = [
  { grade: 'M10', use: 'PCC, levelling, and non-structural mass concrete', strength: '10 MPa' },
  { grade: 'M15', use: 'Flooring, plastering, and light-duty slabs', strength: '15 MPa' },
  { grade: 'M20', use: 'Residential foundations, slabs, and beams', strength: '20 MPa' },
  { grade: 'M25', use: 'Standard structural RCC work for buildings', strength: '25 MPa' },
  { grade: 'M30', use: 'Heavy-duty floors and commercial structures', strength: '30 MPa' },
  { grade: 'M40', use: 'High-rise columns and bridge components', strength: '40 MPa' },
  { grade: 'M45', use: 'Pre-stressed concrete and heavy infrastructure', strength: '45 MPa' },
  { grade: 'M50', use: 'High-performance structural and seismic zones', strength: '50 MPa' },
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

export default function ConcretePage({ onNavigate }: ConcretePageProps) {
  const gradesSection = useInView(0.05);
  const gallerySection = useInView(0.05);
  const promoSection = useInView(0.1);
  const featuresSection = useInView(0.05);
  const [activeImg, setActiveImg] = useState<number | null>(null);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Concrete transportation"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-green-300 text-xs font-bold uppercase tracking-widest mb-4 bg-green-600/20 border border-green-500/30 px-4 py-1.5 rounded-full">
            Our Fleet & Products
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Concrete &{' '}
            <span className="text-green-400">Transportation</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            State-of-the-art ready mix concrete production and an advanced transportation fleet to deliver quality to your doorstep.
          </p>
        </div>
      </section>

      {/* Concrete Grades */}
      <section ref={gradesSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Concrete Grades</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Available Concrete Grades</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              We supply a complete range of ready mix concrete grades — from M10 to M50 — engineered for every type of construction requirement at affordable and competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {concreteGrades.map((item, i) => (
              <div
                key={item.grade}
                className={`relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${gradesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 bg-green-50 group-hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Layers className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 group-hover:bg-green-100 px-2.5 py-1 rounded-full">{item.strength}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{item.grade}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.use}</p>
              </div>
            ))}
          </div>

          {/* Affordable pricing banner */}
          <div className="mt-12 bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 sm:p-10 text-center shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <IndianRupee className="w-3.5 h-3.5" />
              Affordable Pricing
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Quality Concrete at Competitive Prices</h3>
            <p className="text-green-100 text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Get premium-grade ready mix concrete at the most affordable rates without compromising on strength, durability, or service quality.
            </p>
            <button
              onClick={() => handleNav('about')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-green-700 font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors shadow-lg group"
            >
              Request a Quote
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={gallerySection.ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Photo Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Fleet & Operations</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              A glimpse into our modern transit mixer fleet, batching plant, and active construction deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${gallerySection.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setActiveImg(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{img.label}</p>
                </div>
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImg !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <div className="max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[activeImg].src.replace('w=900', 'w=1600')}
              alt={galleryImages[activeImg].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-white text-center mt-3 font-medium">{galleryImages[activeImg].label}</p>
            <button
              onClick={() => setActiveImg(null)}
              className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-lg hover:bg-gray-100 shadow-lg"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Promo Text */}
      <section ref={promoSection.ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${promoSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-4 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">Our Promise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Quality Concrete You Can <span className="text-green-600">Depend On</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We provide high-quality concrete that delivers strength, durability, and reliability for every construction project. Our concrete is produced using premium materials and strict quality standards to ensure excellent performance and long-lasting results.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Whether it is for homes, commercial buildings, or infrastructure projects, we are committed to supplying good concrete and outstanding service to our customers. Choose us to build a stronger and better future.
              </p>
              <button
                onClick={() => handleNav('about')}
                className="px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 group shadow-lg"
              >
                About SSV Foundation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className={`transition-all duration-700 delay-200 ${promoSection.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Concrete Grades', value: 'M10 – M50' },
                  { label: 'Daily Capacity', value: '100+ m³' },
                  { label: 'Fleet Size', value: '7+ Vehicles' },
                  { label: 'Delivery Radius', value: '50+ km' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                    <div className="text-2xl lg:text-3xl font-extrabold text-green-600 mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresSection.ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-green-600 text-xs font-bold uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Service Highlights</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              From material sourcing to final delivery, every aspect of our operation is optimized for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${featuresSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${feature.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need Concrete for Your Project?</h2>
          <p className="text-green-100 text-base mb-8">
            Reach out today and our team will help you select the right grade and quantity for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918939757852"
              className="px-8 py-4 bg-white text-green-700 font-bold text-base rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <button
              onClick={() => handleNav('about')}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 group"
            >
              Learn More
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
