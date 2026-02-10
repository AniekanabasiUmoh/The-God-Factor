import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import ClimatePage from './pages/ClimatePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import InsightsPage from './pages/InsightsPage';
import DistinguishPage from './pages/DistinguishPage';
import ContactPage from './pages/ContactPage';

const NavSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-lg p-2 flex flex-col gap-1 min-w-[200px] mb-2 animate-in slide-in-from-bottom-4 duration-200">
          <Link to="/" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/distinguish" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/distinguish' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Distinguish</Link>
          <Link to="/about" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/about' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/services' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/brands" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/brands' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Brands</Link>
          <Link to="/team" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/team' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/climate" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/climate' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Climate</Link>
          <Link to="/insights" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/insights' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Insights</Link>
          <Link to="/contact" className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 ${location.pathname === '/contact' ? 'text-primary' : 'text-zinc-600'}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors"
      >
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'grid_view'}</span>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <HashRouter>
        <ContactModal />
        <NavSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/distinguish" element={<DistinguishPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/climate" element={<ClimatePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
};

export default App;