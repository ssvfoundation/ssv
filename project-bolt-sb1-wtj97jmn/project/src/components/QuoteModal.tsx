import { X, MessageSquare, User, Phone as PhoneIcon } from 'lucide-react';

const grades = ['M10', 'M15', 'M20', 'M25', 'M30', 'M40', 'M45', 'M50'];

interface QuoteModalProps {
  onClose: () => void;
}

export default function QuoteModal({ onClose }: QuoteModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-t-3xl px-7 pt-7 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <MessageSquare className="w-3 h-3" />
                Get a Price Quote
              </div>
              <h2 className="text-2xl font-extrabold text-white">Available Concrete Grades</h2>
              <p className="text-green-100 text-sm mt-1">Premium Ready Mix Concrete for every project</p>
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
          {/* Grades grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {grades.map((grade) => (
              <div
                key={grade}
                className="bg-green-50 border border-green-200 rounded-xl py-3 text-center group hover:bg-green-600 hover:border-green-600 transition-all duration-200 cursor-default"
              >
                <span className="block text-xs font-semibold text-green-500 group-hover:text-green-100 transition-colors">Grade</span>
                <span className="block text-lg font-extrabold text-green-700 group-hover:text-white transition-colors leading-tight">{grade}</span>
              </div>
            ))}
          </div>

          {/* Promo text */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
            <p className="text-gray-700 text-sm leading-relaxed text-center font-medium">
              We supply premium-quality concrete grades for residential, commercial, and industrial projects at affordable and competitive prices. Our expert team ensures the perfect mix design to deliver superior strength, durability, and long-lasting performance for every construction project.
            </p>
          </div>

          {/* Contact info */}
          <div className="bg-green-50 rounded-2xl p-5 mb-6 border border-green-100">
            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">Contact for Pricing</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Mr. Vijay</p>
                <p className="text-gray-500 text-xs">Plant Manager</p>
              </div>
              <a
                href="tel:+918939757852"
                className="ml-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="tel:+918939757852"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-green-500/30"
          >
            <PhoneIcon className="w-5 h-5" />
            Request Price Quote — 8939757852
          </a>
        </div>
      </div>
    </div>
  );
}
