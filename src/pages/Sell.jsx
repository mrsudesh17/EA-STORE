import React from 'react';
import { CONTACT } from '../config/contactConfig';

const Sell = () => {
  const sellMessage = encodeURIComponent("Hi, I want to sell my BGMI account");
  const sellLink = `${CONTACT.whatsappLink}?text=${sellMessage}`;

  return (
    <div className="animate-fade-up">
      <div className="pt-[60px] pb-[40px] px-[5%] text-center bg-gradient-to-b from-[rgba(34,197,94,0.05)] to-transparent border-b border-gold-borderAlt">
        <div className="inline-flex items-center gap-2 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] text-green-500 text-[11px] font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-3.5">
          💸 Sell Your Account
        </div>
        <h1 className="font-heading text-[clamp(34px,6vw,64px)] font-bold tracking-[2px] leading-tight">
          Turn Your Account into <span className="text-gradient">Cash</span>
        </h1>
        <p className="text-muted max-w-[520px] mx-auto mt-3.5 text-[15px]">
          Choose how you want to sell — wait for best value or get instant payment right now.
        </p>
      </div>

      <section className="px-[5%] py-[60px] max-w-7xl mx-auto">
        
        {/* OPTION 1: HOLD & SELL */}
        <div className="bg-card border border-gold-borderAlt rounded-2xl overflow-hidden mb-8">
          <div className="p-6 md:p-8 flex items-center gap-4 flex-wrap border-b border-gold-borderAlt">
            <span className="bg-gradient-to-br from-gold to-orange text-black font-heading text-[12px] font-bold tracking-[1.5px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
              🔒 Option 1
            </span>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-[1px] leading-tight">
                Hold & Sell <span className="text-muted text-base font-normal block sm:inline mt-1 sm:mt-0">(Maximum Value)</span>
              </h2>
              <p className="text-muted text-sm mt-2">Get the best possible price by listing your account with us. We handle everything — evaluation, listing, and transfer.</p>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <ol className="list-none space-y-4 counter-reset-step">
              {[
                { i: '🎥', t: 'Record a video of your account', s: "Show Inventory, Gun Labs, Supercars, Outfits, Rank — everything visible." },
                { i: '📝', t: 'Provide a detailed description', s: "X-Suits, Gun Labs, rare items, upgrades, etc. Don't know how? Just share login for evaluation." },
                { i: '📊', t: 'We evaluate at current market value', s: "Fair, transparent pricing based on real market rates — no lowballing." },
                { i: '📢', t: 'If you agree, we take over', s: "• Secure one login • List in our group & channels • Sell within 1–2 weeks" },
                { i: '💰', t: 'Get paid after sale', s: "Account is securely transferred to buyer. Payment released to you immediately." }
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
              👉 <strong className="text-gold">Best for</strong> getting maximum market price. Ideal if you're not in a rush.
            </div>
            
            <div className="mt-6">
              <a 
                href={sellLink} 
                target="_blank" 
                rel="noreferrer" 
                className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-6 py-3 rounded-lg flex items-center justify-center w-fit gap-2 bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all min-h-[44px]"
              >
                📤 Start Hold & Sell
              </a>
            </div>
          </div>
        </div>

        {/* OPTION 2: INSTANT SALE */}
        <div className="bg-card border border-gold-borderAlt rounded-2xl overflow-hidden mb-12">
          <div className="p-6 md:p-8 flex items-center gap-4 flex-wrap border-b border-gold-borderAlt">
            <span className="bg-gradient-to-br from-green-400 to-green-600 text-black font-heading text-[12px] font-bold tracking-[1.5px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
              ⚡ Option 2
            </span>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-[1px] leading-tight">
                Instant Sale <span className="text-muted text-base font-normal block sm:inline mt-1 sm:mt-0">(Quick Cash)</span>
              </h2>
              <p className="text-muted text-sm mt-2">Need cash fast? Sell your account immediately without waiting for a buyer. Price may be slightly lower than market value.</p>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <ol className="list-none space-y-4 counter-reset-step">
              {[
                { i: '🎥', t: 'Record a video of your account', s: "Show everything — Gun Labs, Outfits, Rank, Inventory." },
                { i: '📝', t: 'Share details or give login for evaluation', s: "We'll assess the account value quickly and fairly." },
                { i: '⚡', t: 'Get an instant price offer', s: "⚠️ May be slightly lower than market value — you're paying for speed and certainty." },
                { i: '✅', t: 'Accept and get paid instantly', s: "We secure the account • Payment released immediately after verification 💰" }
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="min-w-[32px] h-[32px] rounded-full bg-gradient-to-br from-green-400 to-green-600 text-black font-heading text-[15px] font-bold flex items-center justify-center mt-0.5 shadow-md shrink-0">
                    {idx + 1}
                  </div>
                  <div className="text-sm text-text leading-[1.6]">
                    {step.i} <strong>{step.t}</strong>
                    <span className="block text-muted text-[12px] mt-1">{step.s}</span>
                  </div>
                </li>
              ))}
            </ol>
            
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-[13px] text-muted">
              👉 <strong className="text-green-500">Best for</strong> fast cash without delay. Perfect when you need money quickly.
            </div>
            
            <div className="mt-6">
              <a 
                href={sellLink} 
                target="_blank" 
                rel="noreferrer" 
                className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-6 py-3 rounded-lg flex items-center justify-center w-fit gap-2 bg-green-500 text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(34,197,94,0.35)] transition-all min-h-[44px]"
              >
                ⚡ Sell Instantly Now
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Sell;
