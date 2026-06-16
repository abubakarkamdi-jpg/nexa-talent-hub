export default function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <div className="relative w-full aspect-square max-w-lg mx-auto">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl rotate-12 shadow-2xl shadow-pink-500/30" />
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-2xl shadow-purple-500/30" />
        <div className="absolute bottom-32 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl -rotate-6 shadow-2xl shadow-cyan-500/30" />
        <div className="absolute bottom-10 right-16 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl rotate-12 shadow-2xl shadow-amber-500/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white text-center mb-2">Verified Talent</h3>
          <p className="text-gray-400 text-sm text-center">Every artist is background-checked and verified for quality assurance. Book with confidence.</p>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx} className="text-yellow-400">
                ⭐
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
