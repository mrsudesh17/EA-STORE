import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialProducts = [
  {
    id: "BGMI-2026-001",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: "🌟 Account Level — 70\n🎀 Mythic Fashion — (35/50)\n👑 Pro Collector — (51)",
    title: "🇮🇳 BGMI Premium Account — Galadria Xsuit LvL 5",
    price: 59999,
    category: "premium",
    status: "available",
    tags: ["Rare Skin", "OG Account"],
    createdAt: Date.now()
  }
];

const initialReviews = [
  {
    id: "REV-101",
    name: "Arun Kumar",
    initials: "AK",
    color: "from-gold to-orange",
    date: "April 2026",
    stars: 5,
    description: "Got my account within 5 minutes of payment. Maddy bhai is 100% legit. Rare X-suit was there as promised. Will come back again!",
    createdAt: Date.now()
  }
];

export const useStore = create(
  persist(
    (set, get) => ({
      products: initialProducts,
      reviews: initialReviews,
      filters: {
        search: '',
        category: 'all',
        price: { min: 0, max: 1000000 },
        status: 'all'
      },
      adminSession: false,

      // Actions
      setAdminSession: (status) => set({ adminSession: status }),
      
      setFilters: (newFilters) => set((state) => ({ 
        filters: { ...state.filters, ...newFilters } 
      })),

      // Product Actions
      addProduct: (product) => {
        // Auto-increment logic
        const seqStr = localStorage.getItem('product_sequence') || '1';
        let seq = parseInt(seqStr, 10);
        seq++;
        localStorage.setItem('product_sequence', seq.toString());
        
        const paddedSeq = seq.toString().padStart(3, '0');
        const year = new Date().getFullYear();
        const id = `BGMI-${year}-${paddedSeq}`;
        
        const newProduct = { ...product, id, createdAt: Date.now() };
        set((state) => ({ products: [newProduct, ...state.products] }));
      },
      updateProduct: (id, updatedData) => set((state) => ({
        products: state.products.map(p => p.id === id ? { ...p, ...updatedData } : p)
      })),
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter(p => p.id !== id)
      })),

      // Review Actions
      addReview: (review) => set((state) => ({
        reviews: [{ ...review, id: `REV-${Date.now()}`, createdAt: Date.now() }, ...state.reviews]
      })),
      updateReview: (id, updatedData) => set((state) => ({
        reviews: state.reviews.map(r => r.id === id ? { ...r, ...updatedData } : r)
      })),
      deleteReview: (id) => set((state) => ({
        reviews: state.reviews.filter(r => r.id !== id)
      }))
    }),
    {
      name: 'bgmi-store-storage', // name of the item in the storage (must be unique)
    }
  )
);
