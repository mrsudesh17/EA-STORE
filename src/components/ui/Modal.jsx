import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, children, title }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-bg-2 border border-gold-borderAlt rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col pointer-events-auto overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-gold-borderAlt bg-gradient-to-br from-orange-dim to-gold-dim">
                <h3 className="font-heading text-lg font-bold text-text">{title}</h3>
                <button 
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-gold-dim border border-gold-border text-gold hover:bg-gold/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 md:p-5 overflow-y-auto custom-scrollbar">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
