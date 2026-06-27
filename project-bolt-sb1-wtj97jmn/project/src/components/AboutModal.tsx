import { X, User, Phone as PhoneIcon, Mail, Building2 } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
  onNavigateAbout: () => void;
}

export default function AboutModal({ onClose, onNavigateAbout }: AboutModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-t-3xl px-7 pt-7 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <Building2 className="w-3 h-3" />
                Company Profile
              </div>
              <h2 className="text-2xl font-extrabold text-white">About SSV Foundation</h2>
              <p className="text-green-100 text-sm mt-1">Premium Ready Mix Concrete Supplier</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-7 py-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
              <img
                src="/WhatsApp_Image_2026-06-27_at_12.12.01_PM_(1).jpeg"
                alt="SSV Foundation Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          {/* Intro text */}
          <div className="bg-green-50 rounded-2xl p-5 mb-6 border border-green-100">
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              SSV FOUNDATION is dedicated to delivering high-quality ready mix concrete solutions with reliability, professional service, and customer satisfaction at the core of every project.
            </p>
          </div>

          {/* Representative */}
          <div className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm">
            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">Company Representative</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-gray-900">Mr. Krishna</p>
                <p className="text-gray-500 text-sm">Managing Director, SSV Foundation</p>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-3 mb-6">
            <a
              href="tel:+918939757852"
              className="flex items-center gap-4 bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-4 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-green-600 group-hover:bg-green-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                <p className="text-base font-bold text-gray-900">8939757852</p>
              </div>
            </a>

            <a
              href="mailto:ssv_foundation@yahoo.co.in"
              className="flex items-center gap-4 bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-4 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                <p className="text-base font-bold text-gray-900">ssv_foundation@yahoo.co.in</p>
              </div>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href="mailto:ssv_foundation@yahoo.co.in"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-3.5 rounded-2xl transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Contact Mr. Krishna
            </a>
            <button
              onClick={() => { onClose(); onNavigateAbout(); }}
              className="flex-1 flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold text-sm py-3.5 rounded-2xl transition-colors"
            >
              Full Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
