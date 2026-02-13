import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Menu Button - Top Right as requested (or Left if preferred, using Right based on feedback "or top right") */}
      {/* User said "Can we switch to regular top left... or top right". I'll stick to top-left as per plan, but move to right if needed.  */}
      {/* Actually "regular top left" was the first request. I'll put it Top Left. */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-white/90 backdrop-blur rounded-md shadow-sm border border-zinc-200 text-primary hover:bg-zinc-50 transition-all"
      >
        <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-[40] lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar / Drawer */}
      <nav className={`
        fixed top-0 left-0 bottom-0 h-full z-[50]
        w-64 lg:w-56 
        bg-white border-r border-zinc-200 
        flex flex-col justify-between shrink-0 
        overflow-y-auto no-scrollbar
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        p-6 lg:p-10
      `}>

        <div className="flex flex-col gap-1 mb-8 pt-8 lg:pt-0">
          <h1 className="text-primary text-2xl lg:text-3xl font-bold leading-none tracking-tighter font-display">THE GOD<br />FACTOR.</h1>
          <p className="text-zinc-400 text-[10px] font-medium tracking-widest uppercase mt-2">Art & Influence</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>home</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Home</span>
          </Link>
          <Link to="/about" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/about') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/about') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>info</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">About</span>
          </Link>
          <Link to="/team" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/team') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/team') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>group</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Team</span>
          </Link>
          <Link to="/philosophy" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/philosophy') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/philosophy') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>psychology</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Philosophy</span>
          </Link>
          <Link to="/distinguish" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/distinguish') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/distinguish') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>diamond</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Distinction</span>
          </Link>
          <Link to="/services" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/services') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/services') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>design_services</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Services</span>
          </Link>
          <Link to="/expertise" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/expertise') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/expertise') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>workspace_premium</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Expertise</span>
          </Link>
          <Link to="/brands" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/brands') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/brands') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>verified</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Our Brands</span>
          </Link>

          <Link to="/climate" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/climate') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/climate') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>public</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Climate</span>
          </Link>
          <Link to="/insights" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/insights') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/insights') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>satellite_alt</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Insights</span>
          </Link>
          <Link to="/dashboard" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/dashboard') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/dashboard') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>dashboard</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Dashboard</span>
          </Link>
          <Link to="/contact" className={`group flex items-center gap-4 px-4 py-3 rounded hover:bg-zinc-50 transition-all w-full whitespace-nowrap ${isActive('/contact') ? 'bg-zinc-50' : ''}`}>
            <span className={`material-symbols-outlined transition-colors ${isActive('/contact') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>mail</span>
            <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Contact Us</span>
          </Link>
        </div>

        <div className="hidden lg:flex flex-col gap-6 mt-8">
          <div className="h-px w-12 bg-primary/30"></div>
          <p className="text-[10px] text-zinc-400 max-w-[150px] leading-relaxed font-display">
            © 2024 The God Factor.<br />All rights reserved.
          </p>
          <button
            onClick={openModal}
            className="flex w-full cursor-pointer items-center justify-center rounded h-12 px-6 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-red-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-display"
          >
            Inquire
          </button>
        </div>

      </nav>
    </>
  );
};

export default Sidebar;