import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="block mb-5 group">
              <div className="bg-white rounded-xl px-4 py-3 inline-flex items-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <img
                  src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                  alt="SSV Foundation Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </button>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Building Strength, Delivering Trust — Premium Ready Mix Concrete Solutions at Competitive Prices.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Concrete & Transport', page: 'concrete' },
                { label: 'About Us', page: 'about' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:bg-green-400 transition-colors flex-shrink-0"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Ready Mix Concrete (M10–M50)',
                'Concrete Transportation',
                'Mix Design Engineering',
                'Residential Projects',
                'Commercial Projects',
                'Infrastructure Projects',
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0"></span>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  SSV Foundation Plant,<br />
                  Kolapancheri, Chennai — 600072
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <div>
                  <a href="tel:+918939757852" className="text-sm text-gray-400 hover:text-green-400 transition-colors block">
                    8939757852
                  </a>
                  <span className="text-xs text-gray-600">Mr. Vijay</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="mailto:ssv_foundation@yahoo.co.in" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  ssv_foundation@yahoo.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg px-2 py-1">
              <img
                src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                alt="SSV Foundation"
                className="h-5 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} SSV Foundation. All rights reserved.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-400 transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
