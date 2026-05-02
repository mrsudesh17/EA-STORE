import React from 'react';
import { Shield, Zap, CheckCircle2 } from 'lucide-react';

const Recovery = () => {
  return (
    <div className="animate-fade-up min-h-[calc(100vh-64px)] flex items-center justify-center text-center px-[5%] py-[80px] bg-gradient-to-br from-[rgba(30,144,255,0.08)] to-[rgba(255,215,0,0.06)]">
      <div className="max-w-[640px] mx-auto">
        <div className="inline-flex items-center gap-2 bg-[rgba(30,144,255,0.1)] border border-[rgba(30,144,255,0.3)] text-[#1E90FF] text-[11px] font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-5">
          🔐 Account Recovery
        </div>
        
        <h1 className="font-heading text-[clamp(36px,6vw,68px)] font-bold tracking-[2px] leading-tight mb-5">
          BGMI Account <span className="text-gradient">Recovery</span>
        </h1>
        
        <p className="text-muted text-base mb-4 leading-relaxed">
          Lost access to your BGMI account? Our dedicated recovery service at <strong className="text-white">Maddy Recovery Hub</strong> specializes in getting your account back safely and quickly.
        </p>
        
        <p className="text-muted text-sm mb-10">
          Founded in 2019 · Over 2000+ Accounts Recovered · ₹30L+ Worth of BGMI Accounts Restored
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://www.maddyrecoveryhub.in" 
            target="_blank" 
            rel="noreferrer" 
            className="font-heading text-base font-bold tracking-[1px] px-11 py-4 rounded-lg bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all min-h-[44px] flex items-center gap-2"
          >
            🔐 Visit Maddy Recovery Hub →
          </a>
          <p className="text-muted text-xs">You'll be redirected to www.maddyrecoveryhub.in</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-12">
          <div className="bg-[rgba(30,144,255,0.07)] border border-[rgba(30,144,255,0.2)] rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2"><Shield size={28} className="text-[#1E90FF]" /></div>
            <div className="font-heading text-[15px] font-bold text-text">Safe Process</div>
            <p className="text-muted text-xs mt-1">Secure and verified recovery method</p>
          </div>
          
          <div className="bg-[rgba(30,144,255,0.07)] border border-[rgba(30,144,255,0.2)] rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2"><Zap size={28} className="text-yellow-500" /></div>
            <div className="font-heading text-[15px] font-bold text-text">Fast Recovery</div>
            <p className="text-muted text-xs mt-1">Quick turnaround time on all cases</p>
          </div>
          
          <div className="bg-[rgba(30,144,255,0.07)] border border-[rgba(30,144,255,0.2)] rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2"><CheckCircle2 size={28} className="text-green-500" /></div>
            <div className="font-heading text-[15px] font-bold text-text">High Success Rate</div>
            <p className="text-muted text-xs mt-1">2000+ accounts recovered since 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
