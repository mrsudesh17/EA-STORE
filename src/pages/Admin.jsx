import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { productService } from '../services/productService';
import { reviewService } from '../services/reviewService';
import { useToast } from '../components/ui/Toast';
import { Plus, Trash2, Edit2, LogOut } from 'lucide-react';

const Admin = () => {
  const { adminSession, setAdminSession, products, reviews } = useStore();
  const { addToast } = useToast();
  
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'reviews'
  
  // New Product Form State
  const [newProduct, setNewProduct] = useState({
    title: '', description: '', price: '', videoUrl: '', category: 'budget', status: 'available'
  });
  
  // New Review Form State
  const [newReview, setNewReview] = useState({
    name: '', image: '', stars: 5, description: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'maddy2026') { // Mock secure password
      setAdminSession(true);
      addToast('Logged in successfully', 'success');
    } else {
      addToast('Invalid credentials', 'error');
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    productService.addProduct({
      ...newProduct,
      price: Number(newProduct.price),
      tags: []
    });
    setNewProduct({ title: '', description: '', price: '', videoUrl: '', category: 'budget', status: 'available' });
    addToast('Product added successfully', 'success');
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      productService.deleteProduct(id);
      addToast('Product deleted', 'info');
    }
  };

  const handleToggleStatus = (id, currentStatus) => {
    productService.updateProduct(id, { 
      status: currentStatus === 'available' ? 'sold' : 'available' 
    });
    addToast(`Status updated to ${currentStatus === 'available' ? 'sold' : 'available'}`, 'success');
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.description) {
      addToast('Please fill required fields', 'error');
      return;
    }
    
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    reviewService.addReview({
      ...newReview,
      stars: Number(newReview.stars),
      date: dateStr,
      initials: newReview.name.substring(0, 2).toUpperCase()
    });
    setNewReview({ name: '', image: '', stars: 5, description: '' });
    addToast('Review added successfully', 'success');
  };

  const handleDeleteReview = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      reviewService.deleteReview(id);
      addToast('Review deleted', 'info');
    }
  };

  if (!adminSession) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-card border border-gold-borderAlt rounded-2xl p-8 w-full max-w-md">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center text-gold">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter password"
            className="w-full bg-bg border border-gold-borderAlt rounded-lg px-4 py-3 mb-4 text-text focus:outline-none focus:border-gold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full font-heading font-bold uppercase tracking-[1.5px] py-3 rounded-lg bg-gradient-to-br from-gold to-orange text-black">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="animate-fade-up max-w-7xl mx-auto px-[5%] py-[40px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="font-heading text-3xl font-bold">Admin <span className="text-gradient">Dashboard</span></h1>
        <button 
          onClick={() => setAdminSession(false)}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 w-fit"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gold-borderAlt pb-2 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-6 py-2.5 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-colors whitespace-nowrap ${
            activeTab === 'products' ? 'bg-gold-dim text-gold border border-gold-border' : 'text-muted hover:text-text'
          }`}
        >
          Manage Products
        </button>
        <button 
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-2.5 rounded-lg font-heading font-bold uppercase tracking-wider text-sm transition-colors whitespace-nowrap ${
            activeTab === 'reviews' ? 'bg-gold-dim text-gold border border-gold-border' : 'text-muted hover:text-text'
          }`}
        >
          Manage Reviews
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Product Form */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-gold-borderAlt rounded-xl p-5 sticky top-24">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2"><Plus size={20} className="text-gold"/> Add New Account</h3>
              <form onSubmit={handleAddProduct} className="flex flex-col gap-3">
                <input required type="text" placeholder="Title" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                  value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} />
                <textarea required placeholder="Description details..." rows="4" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold custom-scrollbar"
                  value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} />
                <input required type="number" placeholder="Price (INR)" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                  value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                <input required type="url" placeholder="YouTube Embed URL" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                  value={newProduct.videoUrl} onChange={e => setNewProduct({...newProduct, videoUrl: e.target.value})} />
                
                <div className="flex gap-2">
                  <select className="flex-1 bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                    value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value="budget">Budget</option>
                    <option value="mid">Mid Range</option>
                    <option value="premium">Premium</option>
                  </select>
                  <select className="flex-1 bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                    value={newProduct.status} onChange={e => setNewProduct({...newProduct, status: e.target.value})}>
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>

                <button type="submit" className="w-full font-heading font-bold uppercase tracking-[1px] py-2.5 mt-2 rounded-lg bg-green-500 text-black">
                  Save Account
                </button>
              </form>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-gold-borderAlt rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-bg-2 border-b border-gold-borderAlt">
                    <tr>
                      <th className="px-4 py-3 font-heading font-bold text-gold">ID / Title</th>
                      <th className="px-4 py-3 font-heading font-bold text-gold">Price</th>
                      <th className="px-4 py-3 font-heading font-bold text-gold">Status</th>
                      <th className="px-4 py-3 font-heading font-bold text-gold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr><td colSpan="4" className="px-4 py-8 text-center text-muted">No products listed.</td></tr>
                    ) : products.map(p => (
                      <tr key={p.id} className="border-b border-border last:border-0 hover:bg-bg/50">
                        <td className="px-4 py-3">
                          <div className="font-bold text-text">{p.id}</div>
                          <div className="text-xs text-muted truncate max-w-[200px]">{p.title}</div>
                        </td>
                        <td className="px-4 py-3">₹{p.price}</td>
                        <td className="px-4 py-3">
                          <button 
                            onClick={() => handleToggleStatus(p.id, p.status)}
                            className={`px-2 py-1 text-xs rounded-md ${p.status === 'available' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}
                          >
                            {p.status}
                          </button>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button onClick={() => handleDeleteProduct(p.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded ml-2">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Review Form */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-gold-borderAlt rounded-xl p-5 sticky top-24">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2"><Plus size={20} className="text-gold"/> Add New Review</h3>
              <form onSubmit={handleAddReview} className="flex flex-col gap-3">
                <input required type="text" placeholder="Buyer Name" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                  value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} />
                <input type="url" placeholder="Image Proof URL (Optional)" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                  value={newReview.image} onChange={e => setNewReview({...newReview, image: e.target.value})} />
                <textarea required placeholder="Review text..." rows="4" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold custom-scrollbar"
                  value={newReview.description} onChange={e => setNewReview({...newReview, description: e.target.value})} />
                
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-muted whitespace-nowrap">Stars:</span>
                  <input required type="number" min="1" max="5" placeholder="5" className="w-full bg-bg border border-gold-borderAlt rounded-lg px-3 py-2 text-sm focus:border-gold"
                    value={newReview.stars} onChange={e => setNewReview({...newReview, stars: e.target.value})} />
                </div>

                <button type="submit" className="w-full font-heading font-bold uppercase tracking-[1px] py-2.5 mt-2 rounded-lg bg-green-500 text-black">
                  Save Review
                </button>
              </form>
            </div>
          </div>

          {/* Review List */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-gold-borderAlt rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-bg-2 border-b border-gold-borderAlt">
                    <tr>
                      <th className="px-4 py-3 font-heading font-bold text-gold">Review</th>
                      <th className="px-4 py-3 font-heading font-bold text-gold">Stars</th>
                      <th className="px-4 py-3 font-heading font-bold text-gold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.length === 0 ? (
                      <tr><td colSpan="3" className="px-4 py-8 text-center text-muted">No reviews listed.</td></tr>
                    ) : reviews.map(r => (
                      <tr key={r.id} className="border-b border-border last:border-0 hover:bg-bg/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gold-dim flex items-center justify-center overflow-hidden shrink-0 text-black bg-gradient-to-br from-gold to-orange">
                              {r.image ? (
                                <>
                                  <img 
                                    src={r.image} 
                                    alt="proof" 
                                    className="w-full h-full object-cover" 
                                    onError={(e) => { 
                                      e.target.style.display = 'none'; 
                                      if(e.target.nextSibling) e.target.nextSibling.style.display = 'flex'; 
                                    }} 
                                  />
                                  <span className="hidden font-bold text-[10px] items-center justify-center w-full h-full">{r.initials}</span>
                                </>
                              ) : (
                                <span className="font-bold text-[10px]">{r.initials}</span>
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-text">{r.name}</div>
                              <div className="text-xs text-muted truncate max-w-[200px]">{r.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gold">{'★'.repeat(r.stars)}</td>
                        <td className="px-4 py-3 text-right">
                          <button onClick={() => handleDeleteReview(r.id)} className="p-1.5 text-red-500 hover:bg-red-500/10 rounded ml-2">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Admin;
