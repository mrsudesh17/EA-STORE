import React, { useState } from 'react';
import { CONTACT } from '../../config/contactConfig';
import { Play } from 'lucide-react';

export const VideoCard = ({ account }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from embed URL
  const videoIdMatch = account.videoUrl.match(/embed\/([^?]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  // Generate dynamic WhatsApp message with encoded URI
  const message = `Hi, I'm interested in ${account.id} (₹${account.price})`;
  const waLink = `${CONTACT.whatsappLink}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-bg-2 border border-gold-borderAlt rounded-2xl overflow-hidden mb-6">
      <div className="p-5 md:p-6 bg-gradient-to-br from-orange-dim to-gold-dim border-b border-gold-borderAlt">
        <div className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-orange text-black font-heading text-lg font-bold px-5 py-2 rounded-full mb-3.5">
          💎 ₹{account.price.toLocaleString('en-IN')} INR
        </div>
        <div className="font-heading text-[15px] font-semibold text-text leading-relaxed mb-3">
          {account.title}
        </div>
        <div className="flex gap-2 flex-wrap mt-2.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-[0.5px] bg-[rgba(0,0,0,0.6)] border border-white/20 text-white">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            X (Twitter) Login
          </span>
          {account.status === 'available' ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.5px] bg-green-500/15 border border-green-500/30 text-green-500">
              🔐 Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.5px] bg-red-500/15 border border-red-500/30 text-red-500">
              ❌ Sold
            </span>
          )}
          {account.category === 'premium' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.5px] bg-gold-dim border border-gold-borderAlt text-gold">
              🌟 Premium
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 md:p-6">
        <div className="text-[13px] text-muted leading-[1.9] max-h-[280px] overflow-y-auto pr-1 custom-scrollbar whitespace-pre-wrap">
          {account.description}
        </div>
        
        <div className="mt-5 mb-5">
          <div className="text-[11px] font-semibold text-orange tracking-[3px] uppercase mb-3">📹 Video Preview</div>
          <div className="rounded-xl overflow-hidden border border-gold-borderAlt aspect-video w-full bg-black relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {!isPlaying && videoId ? (
              <>
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={`${account.videoUrl}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                title="Maddy BGMI Store Preview"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-3 flex-wrap">
          <a 
            href={waLink} 
            target="_blank" 
            rel="noreferrer" 
            className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-6 py-3 rounded-lg flex items-center gap-2 bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all min-h-[44px]"
          >
            💬 Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
