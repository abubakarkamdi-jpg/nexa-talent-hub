'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AnimatedPromo from './components/AnimatedPromo';
import Footer from './components/Footer';
import HeroVisual from './components/HeroVisual';
import HowItWorks from './components/HowItWorks';
import MobileMenu from './components/MobileMenu';
import SearchIcon from './components/SearchIcon';
import SectionCTA from './components/SectionCTA';
import TrustSection from './components/TrustSection';

type Category = {
  title: string;
  desc: string;
  count: string;
  gradient: string;
  svgPath: string;
};

type Vendor = {
  name: string;
  title: string;
  initials: string;
  rating: string;
  reviews: number;
  rate: string;
  status: string;
  statusColor: string;
  emoji: string;
  tags: string[];
  imageUrl: string;
};

const categoriesData: Category[] = [
  {
    title: 'DJs',
    desc: 'Afrobeats, electronic, weddings',
    count: '2,500+ pros',
    gradient: 'from-purple-500 to-pink-600',
    svgPath: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z',
  },
  {
    title: 'MCs & Hosts',
    desc: 'Professional emcees',
    count: '1,800+ pros',
    gradient: 'from-cyan-500 to-blue-600',
    svgPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
  },
  {
    title: 'Dancers',
    desc: 'Troupes and soloists',
    count: '3,200+ pros',
    gradient: 'from-pink-500 to-rose-600',
    svgPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Musicians',
    desc: 'Bands and solo artists',
    count: '4,100+ pros',
    gradient: 'from-amber-500 to-orange-600',
    svgPath: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z',
  },
  {
    title: 'Drama Trainers',
    desc: 'Acting and presentation',
    count: '950+ pros',
    gradient: 'from-emerald-500 to-teal-600',
    svgPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: 'Photographers',
    desc: 'Event and portrait',
    count: '5,600+ pros',
    gradient: 'from-violet-500 to-purple-600',
    svgPath: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
  },
  {
    title: 'Videographers',
    desc: 'Cinematographers',
    count: '2,900+ pros',
    gradient: 'from-red-500 to-rose-600',
    svgPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: 'Comedians',
    desc: 'Stand-up and skit artists',
    count: '700+ pros',
    gradient: 'from-indigo-500 to-blue-600',
    svgPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const vendorsData: Vendor[] = [
  {
    name: 'DJ Spark',
    title: 'Afrobeats & Electronic DJ',
    initials: 'DJ',
    rating: '4.9',
    reviews: 250,
    rate: '$150/hr',
    status: 'busy',
    statusColor: 'bg-green-500',
    emoji: '🎧',
    tags: ['Weddings', 'Clubs', 'Corporate'],
    // Use external URL
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop',
  },
  {
    name: 'Tropical Dance Group',
    title: 'Traditional & Contemporary Dancers',
    initials: 'AK',
    rating: '4.8',
    reviews: 340,
    rate: '$500/event',
    status: 'Available',
    statusColor: 'bg-green-500',
    emoji: '💃',
    tags: ['Cultural Events', 'Weddings', 'Festivals'],
    // Use local image: add your image to public/images/ folder
    // imageUrl: '/images/afrokwame.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop',
  },
  {
    name: 'Drama Coach Joshua',
    title: 'Modern dance and acting trainer',
    initials: 'DT',
    rating: '5.0',
    reviews: 120,
    rate: '$80/hr',
    status: 'Busy',
    statusColor: 'bg-yellow-500',
    emoji: '🎭',
    tags: ['Dance', 'Choreography', 'Script Writing'],
    // Empty imageUrl shows emoji gradient fallback
    imageUrl: '/images/promo-banner.jpg',
  },
];

function CategoryIcon({ cat }: { cat: Category }) {
  return (
    <div
      className={`w-14 h-14 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center mb-4`}
      style={{ animation: 'float 3s ease-in-out infinite' }}
    >
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={cat.svgPath}
        />
      </svg>
    </div>
  );
}

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="card-hover bg-slate-900 rounded-2xl p-6 border border-gray-800">
      <CategoryIcon cat={cat} />
      <h3 className="text-white font-bold text-lg">{cat.title}</h3>
      <p className="text-gray-400 text-sm mt-1">{cat.desc}</p>
      <p className="text-primary-400 text-sm font-medium mt-3">{cat.count}</p>
    </div>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  const isExternalUrl = vendor.imageUrl.startsWith('http');
  
  const headerImage = vendor.imageUrl ? (
    <div className="h-48 relative overflow-hidden bg-slate-800">
      <Image
        src={vendor.imageUrl}
        alt={vendor.name}
        fill
        className="object-cover"
        unoptimized={isExternalUrl}
        priority={false}
      />
    </div>
  ) : (
    <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative flex items-center justify-center text-6xl">
      {vendor.emoji}
    </div>
  );

  return (
    <div className="card-hover bg-slate-900 rounded-2xl overflow-hidden border border-gray-800">
      <div className="relative">
        {headerImage}
        <div
          className={`absolute top-4 right-4 px-3 py-1 ${vendor.statusColor} text-white text-xs font-bold rounded-full`}
        >
          {vendor.status}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {vendor.initials}
          </div>
          <div>
            <h3 className="text-white font-bold">{vendor.name}</h3>
            <p className="text-gray-400 text-xs">{vendor.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="text-yellow-400">⭐ {vendor.rating}</span>
          <span className="text-gray-500">({vendor.reviews} reviews)</span>
          <span className="text-gray-500 ml-auto">{vendor.rate}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {vendor.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="https://nexamarketplace-main.vercel.app" className="block w-full py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold hover:from-primary-500 hover:to-purple-500 transition-all text-center">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [promoOpen, setPromoOpen] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Home
              </a>
              <a href="#categories" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Categories
              </a>
              <a href="#vendors" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Vendors
              </a>
              <a href="#promo" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Promotions
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                How It Works
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="https://nexamarketplace-main.vercel.app" className="text-gray-300 hover:text-white font-medium transition-colors">
                Sign In
              </a>
              <a href="https://nexamarketplace-main.vercel.app" className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/30">
                Join Now
              </a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  Africa&apos;s #1 Entertainment Marketplace
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Where <span className="gradient-text">Creativity</span> Meets Opportunity
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover thousands of world-class entertainers, creative professionals, and service providers. From drama trainers to DJs, dancers
                to MCs – your perfect entertainment is one click away.
              </p>
              <div className="glass-effect rounded-2xl p-2 max-w-2xl mx-auto lg:mx-0 mb-8">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Search for DJs, dancers, trainers..."
                      className="w-full pl-12 pr-4 py-4 bg-slate-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-700"
                    />
                  </div>
                  <a href="https://nexamarketplace-main.vercel.app" className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-bold hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/30 whitespace-nowrap inline-block">
                    Search Now
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>50,000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎤</span>
                  <span>15,000+ Verified Artists</span>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-bold text-sm tracking-wider uppercase">Browse Categories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Find Your Perfect <span className="gradient-text">Entertainment</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">DJs, dancers, musicians, drama trainers, MCs and more.</p>
          </div>
          <div id="categories-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData.map((cat) => (
              <CategoryCard key={cat.title} cat={cat} />
            ))}
          </div>
        </div>
      </section>

   <AnimatedPromo 
  open={promoOpen} 
  onClose={() => setPromoOpen(false)} 
  bgImage="/images/banner1.jpeg"
/>

      <section id="vendors" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-bold text-sm tracking-wider uppercase">Featured Artists</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Top-Rated <span className="gradient-text">Entertainers</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">Hand-picked professionals loved by thousands.</p>
          </div>
          <div id="vendors-container" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendorsData.map((vendor) => (
              <VendorCard key={vendor.name} vendor={vendor} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <TrustSection />

      <SectionCTA />

      <Footer />
    </>
  );
}
