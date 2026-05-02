import React from 'react';

export const SkeletonLoader = ({ type = 'account' }) => {
  if (type === 'account') {
    return (
      <div className="bg-bg-2 border border-gold-borderAlt rounded-2xl overflow-hidden mb-6 animate-pulse">
        <div className="p-5 md:p-6 bg-gradient-to-br from-orange-dim to-gold-dim border-b border-gold-borderAlt">
          <div className="w-32 h-8 bg-gold-border rounded-full mb-3.5"></div>
          <div className="w-full h-5 bg-border rounded mt-2"></div>
          <div className="w-3/4 h-5 bg-border rounded mt-2"></div>
          <div className="flex gap-2 mt-3">
            <div className="w-24 h-6 bg-border rounded-full"></div>
            <div className="w-24 h-6 bg-border rounded-full"></div>
          </div>
        </div>
        <div className="p-5 md:p-6">
          <div className="w-full aspect-video bg-bg rounded-xl border border-gold-borderAlt mb-4"></div>
          <div className="w-full h-4 bg-border rounded mt-2"></div>
          <div className="w-5/6 h-4 bg-border rounded mt-2"></div>
          <div className="w-4/6 h-4 bg-border rounded mt-2"></div>
        </div>
      </div>
    );
  }

  if (type === 'review') {
    return (
      <div className="bg-card border border-gold-borderAlt rounded-2xl p-5 animate-pulse">
        <div className="flex items-center gap-3 mb-3.5">
          <div className="w-10 h-10 rounded-full bg-gold-border shrink-0"></div>
          <div className="flex flex-col gap-1 w-full">
            <div className="w-24 h-4 bg-border rounded"></div>
            <div className="w-16 h-3 bg-border rounded"></div>
          </div>
        </div>
        <div className="w-20 h-4 bg-border rounded mb-2"></div>
        <div className="w-full h-3 bg-border rounded mt-1"></div>
        <div className="w-full h-3 bg-border rounded mt-1"></div>
        <div className="w-3/4 h-3 bg-border rounded mt-1"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-10 bg-border rounded animate-pulse"></div>
  );
};
