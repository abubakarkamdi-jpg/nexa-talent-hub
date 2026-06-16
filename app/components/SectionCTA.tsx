export default function SectionCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center overflow-hidden border border-gray-800">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="gradient-text">Book or Sell?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Create unforgettable events or grow your audience. Nexahub connects you to both.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://nexamarketplace-main.vercel.app" className="px-10 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/30 inline-block">
                Book Entertainment
              </a>
              <a href="https://nexamarketplace-main.vercel.app" className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block">
                Become a Vendor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
