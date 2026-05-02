import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { WhatsAppFloat, StickyMobileCTA } from './components/layout/MobileCTA';
import { ToastProvider } from './components/ui/Toast';
import { SkeletonLoader } from './components/ui/SkeletonLoader';

const Home = lazy(() => import('./pages/Home'));
const Buy = lazy(() => import('./pages/Buy'));
const Sell = lazy(() => import('./pages/Sell'));
const Recovery = lazy(() => import('./pages/Recovery'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Admin = lazy(() => import('./pages/Admin'));

const PageLoader = () => (
  <div className="pt-[100px] px-[5%] min-h-screen">
    <SkeletonLoader type="account" />
    <SkeletonLoader type="account" />
  </div>
);

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-1 mt-16 relative">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/recovery" element={<Recovery />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <WhatsAppFloat />
          <StickyMobileCTA />
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
