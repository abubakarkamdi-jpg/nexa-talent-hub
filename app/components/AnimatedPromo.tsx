'use client';

export default function AnimatedPromo({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <section
      id="promo"
      className="py-12 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-12 z-10 w-8 h-8 bg-black/40 hover:bg-black/70 text-white/80 hover:text-white rounded-full flex items-center justify-center transition-all focus:outline-none"
          title="Dismiss Offer"
        >
          ✕
        </button>

        <div className="relative bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-600 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-bold mb-4">
                Launch Promotion: 50% OFF Booking Fees
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Big Moments, <br /> For Less
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Limited-time offer for first-time bookings. Book a DJ, trainer, dancer or any entertainer with half-off service fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://nexamarketplace-main.vercel.app" className="px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg inline-block">
                  Claim Offer
                </a>
                <a href="https://nexamarketplace-main.vercel.app" className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all inline-block">
                  Learn More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Benefit icon="🎧" title="50% OFF" subtitle="Booking Fees" />
              <Benefit icon="🎵" title="FREE" subtitle="Consultation" />
              <Benefit icon="⭐" title="VIP" subtitle="Priority Support" />
              <Benefit icon="🏆" title="TOP" subtitle="Rated Artists" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-white font-bold text-lg">{title}</div>
      <div className="text-white/70 text-sm">{subtitle}</div>
    </div>
  );
}
