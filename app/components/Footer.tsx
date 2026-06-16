const links = {
  categories: ['DJs & MCs', 'Dancers', 'Musicians', 'Drama Trainers', 'Photographers', 'Comedians'],
  vendors: ['Become a Vendor', 'Dashboard', 'Pricing Plans', 'Resources'],
  support: ['Help Center', 'How to Book', 'Cancellation Policy', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Nexa<span className="text-primary-400">hub</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">Africa&apos;s premier entertainment marketplace.</p>
          </div>

          <div>
            <FooterColumn title="Categories" items={links.categories} />
          </div>

          <div>
            <FooterColumn title="For Vendors" items={links.vendors} />
          </div>

          <div>
            <FooterColumn title="Support" items={links.support} />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; 2026 Nexahub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://nexamarketplace-main.vercel.app" className="hover:text-primary-400 transition-colors">Privacy</a>
            <a href="https://nexamarketplace-main.vercel.app" className="hover:text-primary-400 transition-colors">Terms</a>
            <a href="https://nexamarketplace-main.vercel.app" className="hover:text-primary-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
