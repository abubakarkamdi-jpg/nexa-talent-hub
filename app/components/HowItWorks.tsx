const steps = [
  {
    title: 'Browse & Discover',
    body: 'Search by category, price, date and location. Browse verified profiles.',
    gradient: 'from-primary-500 to-purple-600',
    arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  },
  {
    title: 'Book Instantly',
    body: 'Choose your preferred artist, check availability and book securely.',
    gradient: 'from-purple-500 to-cyan-600',
    arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  },
  {
    title: 'Enjoy the Show',
    body: 'Sit back and enjoy. Rate your experience after the event.',
    gradient: 'from-cyan-500 to-blue-600',
    arrow: '',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-bold text-sm tracking-wider uppercase">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Step key={step.title} step={step} index={idx} hasArrow={!!step.arrow} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
  hasArrow,
}: {
  step: typeof steps[number];
  index: number;
  hasArrow: boolean;
}) {
  return (
    <div className={`relative text-center p-8 ${index > 0 ? 'md:col-start-auto' : ''}`}>
      <div
        className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
        style={{ boxShadow: `0 10px 15px -3px ${step.gradient.includes('primary') ? 'rgba(217,70,239,0.3)' : 'rgba(99,102,241,0.3)'}` }}
      >
        <span className="text-3xl font-bold text-white">{index + 1}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
      <p className="text-gray-400">{step.body}</p>
      {hasArrow && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.arrow} />
          </svg>
        </div>
      )}
    </div>
  );
}
