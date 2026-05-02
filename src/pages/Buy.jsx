import React, { useMemo, useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import { VideoCard } from '../components/ui/VideoCard';
import { SkeletonLoader } from '../components/ui/SkeletonLoader';
import { CONTACT } from '../config/contactConfig';
import { Search, Filter, AlertCircle } from 'lucide-react';

const Buy = () => {
  const { products, filters, setFilters } = useStore();
  const [loading, setLoading] = useState(true);

  // Auto-refresh simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate network latency

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchSearch = product.id.toLowerCase().includes(filters.search.toLowerCase()) || 
                          product.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchCategory = filters.category === 'all' || product.category === filters.category;
      const matchStatus = filters.status === 'all' || product.status === filters.status;
      const matchPrice = product.price >= filters.price.min && product.price <= filters.price.max;
      
      return matchSearch && matchCategory && matchStatus && matchPrice;
    });
  }, [products, filters]);

  return (
    <div className="animate-fade-up">
      <div className="pt-[60px] pb-[40px] px-[5%] text-center bg-gradient-to-b from-[rgba(255,107,53,0.07)] to-transparent border-b border-gold-borderAlt">
        <div className="inline-flex items-center gap-2 bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.28)] text-gold text-[11px] font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-3.5">
          🛒 Buy BGMI Accounts
        </div>
        <h1 className="font-heading text-[clamp(34px,6vw,64px)] font-bold tracking-[2px] leading-tight">
          Choose Your <span className="text-gradient">Account</span>
        </h1>
        <p className="text-muted max-w-[520px] mx-auto mt-3.5 text-[15px]">
          Custom-built for your preferences or ready to purchase instantly — we have both.
        </p>
      </div>

      <section className="px-[5%] py-[60px] max-w-7xl mx-auto">
        
        {/* FILTERS */}
        <div className="bg-bg-2 border border-gold-borderAlt rounded-xl p-4 md:p-5 mb-8 flex flex-col md:flex-row gap-4 items-center flex-wrap">
          <div className="relative flex-1 min-w-[200px] w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search ID, skins, guns..."
              className="w-full bg-bg border border-gold-borderAlt rounded-lg pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:border-gold transition-colors"
              value={filters.search}
              onChange={(e) => setFilters({ search: e.target.value })}
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto flex-wrap">
            <select 
              className="bg-bg border border-gold-borderAlt rounded-lg px-4 py-2.5 text-sm text-text focus:outline-none focus:border-gold cursor-pointer flex-1 md:flex-none min-h-[44px]"
              value={filters.category}
              onChange={(e) => setFilters({ category: e.target.value })}
            >
              <option value="all">All Categories</option>
              <option value="budget">Budget</option>
              <option value="mid">Mid Range</option>
              <option value="premium">Premium</option>
            </select>
            
            <select 
              className="bg-bg border border-gold-borderAlt rounded-lg px-4 py-2.5 text-sm text-text focus:outline-none focus:border-gold cursor-pointer flex-1 md:flex-none min-h-[44px]"
              value={filters.status}
              onChange={(e) => setFilters({ status: e.target.value })}
            >
              <option value="all">All Status</option>
              <option value="available">Available Only</option>
              <option value="sold">Sold Out</option>
            </select>
          </div>
        </div>

        {/* READY ACCOUNTS */}
        <div className="bg-card border border-gold-borderAlt rounded-2xl overflow-hidden mb-8">
          <div className="p-6 md:p-8 flex items-center gap-4 flex-wrap border-b border-gold-borderAlt">
            <span className="bg-gradient-to-br from-[#1E90FF] to-[#00BFFF] text-black font-heading text-[12px] font-bold tracking-[1.5px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
              ⭐ Option 1
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-[1px]">
              Ready Secured Accounts <span className="text-muted text-base font-normal">(Buy Instantly)</span>
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-muted text-sm mb-6">Browse from our already available premium accounts. New listings posted regularly on our official channels.</p>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkeletonLoader type="account" />
                <SkeletonLoader type="account" />
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(account => (
                  <VideoCard key={account.id} account={account} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 bg-bg rounded-xl border border-border text-center">
                <AlertCircle className="w-12 h-12 text-muted mb-4" />
                <h3 className="font-heading text-xl font-bold text-text mb-2">No accounts found</h3>
                <p className="text-muted text-sm">We couldn't find any accounts matching your filters.</p>
                <button 
                  onClick={() => setFilters({ search: '', category: 'all', status: 'all' })}
                  className="mt-6 text-gold text-sm font-semibold hover:underline min-h-[44px] px-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CUSTOM ACCOUNTS */}
        <div className="bg-card border border-gold-borderAlt rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8 flex items-center gap-4 flex-wrap border-b border-gold-borderAlt">
            <span className="bg-gradient-to-br from-gold to-orange text-black font-heading text-[12px] font-bold tracking-[1.5px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
              🔥 Option 2
            </span>
            <h2 className="font-heading text-2xl font-bold tracking-[1px]">
              Custom Requirement Account <span className="text-muted text-base font-normal">(Made For You)</span>
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-muted text-sm mb-6">Get a personalized BGMI account based on your exact budget and requirements. Perfect if you want specific skins, gun labs, or premium combinations.</p>
            
            <ol className="list-none space-y-4 counter-reset-step">
              {[
                { i: '💬', t: 'Share your budget', s: "E.g., ₹10,000 – ₹50,000 — we'll work within it." },
                { i: '🎯', t: 'Tell us your requirements', s: "X-Suits, Gun Labs, Cars, Outfits, Rank, etc. — be as specific as you want." },
                { i: '💰', t: 'Complete the payment', s: "UPI / Bank Transfer / USDT / Liquid Cash — your choice." },
                { i: '✅', t: 'Receive your account', s: "Safe, secure, ready-to-use credentials delivered after confirmation." }
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="min-w-[32px] h-[32px] rounded-full bg-gradient-to-br from-gold to-orange text-black font-heading text-[15px] font-bold flex items-center justify-center mt-0.5 shadow-md shrink-0">
                    {idx + 1}
                  </div>
                  <div className="text-sm text-text leading-[1.6]">
                    {step.i} <strong>{step.t}</strong>
                    <span className="block text-muted text-[12px] mt-1">{step.s}</span>
                  </div>
                </li>
              ))}
            </ol>
            
            <div className="mt-6 p-4 bg-gold-dim border border-gold-borderAlt rounded-lg text-[13px] text-muted">
              👉 <strong className="text-gold">Best for users</strong> who want specific skins or premium combinations tailored to their taste.
            </div>
            
            <div className="mt-6">
              <a 
                href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Hi Maddy! I want a custom BGMI account. My budget is ₹")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-6 py-3 rounded-lg flex items-center justify-center w-fit gap-2 bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all min-h-[44px]"
              >
                💬 Request Custom Account
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Buy;
