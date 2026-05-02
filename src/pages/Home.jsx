import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../config/contactConfig';
import { CheckCircle2, ShieldCheck, Zap, Star, Users, Send, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-up">
      {/* Ticker */}
      <div className="overflow-hidden bg-[rgba(255,215,0,0.05)] border-b border-gold-borderAlt py-2.5">
        <div className="flex w-max animate-tick">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-[11px] font-semibold text-gold tracking-[2px] uppercase whitespace-nowrap px-10">⚡ Safe & Verified Accounts</span>
              <span className="text-[11px] font-semibold text-gold tracking-[2px] uppercase whitespace-nowrap px-10">🏆 2000+ Happy Buyers</span>
              <span className="text-[11px] font-semibold text-gold tracking-[2px] uppercase whitespace-nowrap px-10">💰 ₹60 Lakhs+ Worth Sold</span>
              <span className="text-[11px] font-semibold text-gold tracking-[2px] uppercase whitespace-nowrap px-10">🔒 Secure Single Logins</span>
              <span className="text-[11px] font-semibold text-gold tracking-[2px] uppercase whitespace-nowrap px-10">📱 UPI · Bank · USDT · Cash</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-[5%] py-[80px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_20%,rgba(255,107,53,0.13)_0%,transparent_65%),radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(255,215,0,0.08)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_85%_85%,rgba(30,144,255,0.07)_0%,transparent_60%)]" />
        
        <div className="relative z-10 max-w-[820px] mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.28)] text-gold text-[11px] font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-7 animate-fade-up">
            🎮 India's #1 Trusted BGMI Account Marketplace
          </div>
          <h1 className="font-heading text-[clamp(42px,8vw,92px)] font-bold leading-[1.0] tracking-[2px] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your <span className="text-gradient">Dream BGMI</span><br />Account Awaits
          </h1>
          <p className="text-muted text-[clamp(14px,2vw,17px)] max-w-[560px] mx-auto mt-5 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Buy and sell verified BGMI accounts safely — budget to premium. Trusted by 2000+ players since 2019.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/buy" className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-8 py-3.5 rounded-lg bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all flex items-center gap-2 min-h-[44px]">
              🛒 Browse Accounts
            </Link>
            <Link to="/sell" className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-8 py-3.5 rounded-lg bg-transparent border border-white/20 text-text hover:border-gold hover:text-gold transition-all flex items-center gap-2 min-h-[44px]">
              💸 Sell My Account
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-center mt-9 pt-7 border-t border-gold-borderAlt w-full">
            <div className="flex items-center gap-1.5 text-[13px] text-muted"><CheckCircle2 size={16} className="text-green-500" /> Verified Accounts</div>
            <div className="flex items-center gap-1.5 text-[13px] text-muted"><Zap size={16} className="text-yellow-500" /> Fast Delivery</div>
            <div className="flex items-center gap-1.5 text-[13px] text-muted"><ShieldCheck size={16} className="text-blue-500" /> Safe Single Logins</div>
            <div className="flex items-center gap-1.5 text-[13px] text-muted"><Star size={16} className="text-gold" /> Since 2019</div>
            <div className="flex items-center gap-1.5 text-[13px] text-muted"><Users size={16} className="text-purple-500" /> 2000+ Buyers</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-bg-2 border-y border-gold-borderAlt">
        {[
          { n: '2000+', l: 'Happy Buyers' },
          { n: '₹60L+', l: 'Accounts Sold' },
          { n: '7 Yrs', l: 'Trusted Since 2019' },
          { n: '5 ★', l: 'Rated Service' }
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 border-r border-b md:border-b-0 border-gold-borderAlt last:border-r-0">
            <div className="font-heading text-3xl font-bold text-gold">{stat.n}</div>
            <div className="text-[11px] text-muted uppercase tracking-[1.5px] mt-1">{stat.l}</div>
          </div>
        ))}
      </div>

      {/* Connect with us */}
      <section className="px-[5%] py-[80px]">
        <div className="text-[11px] font-semibold text-orange tracking-[3px] uppercase mb-2.5">Connect With Us</div>
        <h2 className="font-heading text-[clamp(28px,4vw,48px)] font-bold tracking-[1px] leading-[1.05] mb-3.5">Find Us <span className="text-gradient">Everywhere</span></h2>
        <p className="text-muted max-w-[520px] mb-12">Join our official communities for latest listings, updates and deals.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
          <a href={CONTACT.whatsappGroup} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-4 md:p-5 bg-card border border-gold-borderAlt rounded-xl transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] min-h-[44px]">
            <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center bg-[#25D366]/15 border border-[#25D366]/30">
              <svg viewBox="0 0 24 24" fill="#25D366" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div><div className="font-heading text-[15px] font-bold text-text">WhatsApp Group</div><div className="text-[11px] text-muted">Official Community</div></div>
          </a>
          
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-4 md:p-5 bg-card border border-gold-borderAlt rounded-xl transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] min-h-[44px]">
            <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center bg-[#E1306C]/15 border border-[#E1306C]/30">
              <svg viewBox="0 0 24 24" fill="url(#ig)" width="24" height="24"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433"/><stop offset="50%" stopColor="#dc2743"/><stop offset="100%" stopColor="#bc1888"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div><div className="font-heading text-[15px] font-bold text-text">Instagram</div><div className="text-[11px] text-muted">@maddy_bgmistore</div></div>
          </a>

          <a href={CONTACT.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-3.5 p-4 md:p-5 bg-card border border-gold-borderAlt rounded-xl transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] min-h-[44px]">
            <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center bg-[#229ED9]/15 border border-[#229ED9]/30">
              <Send size={24} className="text-[#229ED9]" />
            </div>
            <div><div className="font-heading text-[15px] font-bold text-text">Telegram</div><div className="text-[11px] text-muted">@maddy_bgmistore</div></div>
          </a>
        </div>
      </section>

      {/* CTA section */}
      <section className="text-center px-[5%] py-[70px] bg-gradient-to-br from-[rgba(255,107,53,0.07)] to-[rgba(255,215,0,0.05)] border-y border-gold-borderAlt">
        <div className="text-[11px] font-semibold text-orange tracking-[3px] uppercase mb-2.5">Get Started</div>
        <h2 className="font-heading text-[clamp(28px,4vw,48px)] font-bold tracking-[1px] leading-[1.05] mb-3.5 mx-auto max-w-[480px]">Why Are You <span className="text-gradient">Waiting For?</span></h2>
        <p className="text-muted mb-9">Join 2000+ players who found their dream BGMI account.</p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link to="/buy" className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-8 py-3.5 rounded-lg bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all flex items-center gap-2 min-h-[44px]">
            🛒 Buy an Account
          </Link>
          <Link to="/sell" className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-8 py-3.5 rounded-lg bg-green-500 text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 min-h-[44px]">
            💸 Sell My Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
