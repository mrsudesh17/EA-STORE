import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT } from '../../config/contactConfig';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Recovery', path: '/recovery' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-16 glass-nav border-b border-gold-borderAlt">
        <Link to="/" className="font-heading text-xl font-bold text-gold tracking-[2px] no-underline flex items-center gap-2 cursor-pointer">
          <em className="text-white not-italic">MADDY</em> BGMI STORE
        </Link>
        
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`text-[12px] font-semibold tracking-[1.5px] uppercase px-3.5 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                  location.pathname === link.path ? 'text-gold bg-gold-dim' : 'text-muted hover:text-gold hover:bg-gold-dim'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href={CONTACT.whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="bg-gold text-black font-bold px-[18px] py-2 flex items-center gap-1.5 rounded-lg text-[12px] uppercase tracking-[1.5px] transition-colors hover:bg-white ml-2"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </li>
        </ul>

        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-gold w-6 h-6" /> : <Menu className="text-gold w-6 h-6" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-[rgba(8,10,15,0.98)] backdrop-blur-xl p-4 border-b border-gold-borderAlt flex-col gap-1 ${isOpen ? 'flex' : 'hidden'}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path} 
            className={`text-[14px] font-semibold tracking-[1.5px] uppercase px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 min-h-[44px] flex items-center ${
              location.pathname === link.path ? 'text-gold bg-gold-dim' : 'text-muted hover:text-gold hover:bg-gold-dim'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href={CONTACT.whatsappLink} 
          target="_blank" 
          rel="noreferrer" 
          className="text-[14px] font-semibold tracking-[1.5px] uppercase px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 min-h-[44px] flex items-center text-green-500 hover:bg-green-500/10"
        >
          💬 WhatsApp Us
        </a>
      </div>
    </>
  );
};

export default Navbar;
