import React from 'react';

export const ReviewCard = ({ review, onClickImage }) => {
  return (
    <div className="bg-card border border-gold-borderAlt rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-3 mb-3.5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-base font-bold text-black shrink-0 overflow-hidden bg-gradient-to-br ${review.color || 'from-gold to-orange'}`}>
          {review.image ? (
            <img 
              src={review.image} 
              alt="Proof" 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => onClickImage && onClickImage(review.image)}
            />
          ) : (
            review.initials || 'User'
          )}
        </div>
        <div>
          <div className="font-heading text-base font-bold text-text">{review.name}</div>
          <div className="text-[11px] text-muted">{review.date}</div>
        </div>
      </div>
      <div className="text-gold text-[13px] mb-2.5">
        {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
      </div>
      <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-wrap">
        {review.description}
      </p>
      <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/25 text-green-500 text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full mt-2.5">
        ✅ Sold Proof Verified
      </div>
    </div>
  );
};
