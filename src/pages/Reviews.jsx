import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { ReviewCard } from '../components/ui/ReviewCard';
import { Modal } from '../components/ui/Modal';
import { CONTACT } from '../config/contactConfig';

const Reviews = () => {
  const { reviews } = useStore();
  const [selectedImage, setSelectedImage] = useState(null);

  // Separate reviews into featured and standard if needed, or by year
  // For now we'll just display them all in a grid

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="animate-fade-up">
      <div className="pt-[60px] pb-[40px] px-[5%] text-center bg-gradient-to-b from-[rgba(255,107,53,0.07)] to-transparent border-b border-gold-borderAlt">
        <div className="inline-flex items-center gap-2 bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.28)] text-gold text-[11px] font-semibold tracking-[2px] uppercase px-5 py-2 rounded-full mb-3.5">
          ⭐ Reviews & Sold Proofs
        </div>
        <h1 className="font-heading text-[clamp(34px,6vw,64px)] font-bold tracking-[2px] leading-tight">
          What Our <span className="text-gradient">Buyers Say</span>
        </h1>
        <p className="text-muted max-w-[520px] mx-auto mt-3.5 text-[15px]">
          Real reviews from real buyers. Every deal verified and completed successfully.
        </p>
      </div>

      <section className="px-[5%] py-[60px] max-w-7xl mx-auto">
        
        {/* REVIEWS GRID */}
        <div className="mb-12">
          <div className="inline-block bg-gradient-to-br from-gold to-orange text-black font-heading text-[13px] font-bold tracking-[2px] uppercase px-5 py-1.5 rounded-full mb-7">
            ⭐ Verified Reviews
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reviews.map(review => (
              <ReviewCard 
                key={review.id} 
                review={review} 
                onClickImage={handleImageClick}
              />
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-borderAlt to-transparent my-10"></div>

        {/* CTA */}
        <div className="text-center p-10 bg-card border border-gold-borderAlt rounded-2xl max-w-3xl mx-auto">
          <div className="text-[11px] font-semibold text-orange tracking-[3px] uppercase mb-2">Share Your Experience</div>
          <h3 className="font-heading text-[26px] font-bold mt-2 mb-3">Already a <span className="text-gradient">Happy Buyer?</span></h3>
          <p className="text-muted text-[14px] mb-6">Your review helps other players trust the platform and make safe decisions.</p>
          
          <a 
            href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Hi! I want to submit my review for Maddy BGMI Store.")}`}
            target="_blank" 
            rel="noreferrer" 
            className="font-heading text-[14px] font-bold tracking-[1.5px] uppercase px-6 py-3 rounded-lg flex items-center justify-center w-fit mx-auto gap-2 bg-gradient-to-br from-gold to-orange text-black hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,107,53,0.35)] transition-all min-h-[44px]"
          >
            ⭐ Submit Your Review
          </a>
        </div>
      </section>

      {/* Image Preview Modal */}
      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        title="Sold Proof"
      >
        {selectedImage && (
          <img src={selectedImage} alt="Sold Proof Enlarge" className="w-full h-auto rounded-lg" />
        )}
      </Modal>
    </div>
  );
};

export default Reviews;
