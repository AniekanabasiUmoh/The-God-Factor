import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { openModal } = useModal();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full lg:w-72 lg:fixed lg:h-screen z-50 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200 p-6 lg:p-10 flex flex-col justify-between shrink-0">
      <div className="flex flex-col gap-1 mb-8 lg:mb-0">
        <h1 className="text-primary text-2xl lg:text-3xl font-bold leading-none tracking-tighter font-display">THE GOD<br/>FACTOR.</h1>
        <p className="text-zinc-400 text-[10px] font-medium tracking-widest uppercase mt-2">Art & Influence</p>
      </div>
      
      <div className="flex flex-row lg:flex-col gap-1 lg:gap-6 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 items-center lg:items-start no-scrollbar">
        <Link to="/" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>home</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Home</span>
        </Link>
        <Link to="/distinguish" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/distinguish') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/distinguish') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>diamond</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Distinction</span>
        </Link>
        <Link to="/about" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/about') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/about') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>info</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">About</span>
        </Link>
        <Link to="/team" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/team') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/team') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>group</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Team</span>
        </Link>
        <Link to="/services" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/services') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/services') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>design_services</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Services</span>
        </Link>
        <Link to="/brands" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/brands') ? 'bg-zinc-50' : ''}`}>
          <span className={`material-symbols-outlined transition-colors ${isActive('/brands') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>verified</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Our Brands</span>
        </Link>
        <Link to="/insights" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/insights') ? 'bg-zinc-50' : ''}`}>
           <span className={`material-symbols-outlined transition-colors ${isActive('/insights') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>satellite_alt</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Insights</span>
        </Link>
        <Link to="/climate" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/climate') ? 'bg-zinc-50' : ''}`}>
           <span className={`material-symbols-outlined transition-colors ${isActive('/climate') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>public</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Climate</span>
        </Link>
        <Link to="/contact" className={`group flex items-center gap-4 px-4 py-3 rounded-full lg:rounded hover:bg-zinc-50 transition-all w-auto lg:w-full whitespace-nowrap ${isActive('/contact') ? 'bg-zinc-50' : ''}`}>
           <span className={`material-symbols-outlined transition-colors ${isActive('/contact') ? 'text-primary filled' : 'text-zinc-900 group-hover:text-primary'}`}>mail</span>
          <span className="text-sm font-medium tracking-wide font-display text-zinc-900">Contact Us</span>
        </Link>
      </div>

      <div className="hidden lg:flex flex-col gap-6">
        <div className="h-px w-12 bg-primary/30"></div>
        <p className="text-[10px] text-zinc-400 max-w-[150px] leading-relaxed font-display">
            © 2024 The God Factor.<br/>All rights reserved.
        </p>
        <button 
            onClick={openModal}
            className="flex w-full cursor-pointer items-center justify-center rounded h-12 px-6 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-red-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-display"
        >
            Inquire
        </button>
      </div>

      <button className="lg:hidden absolute top-6 right-6 text-primary">
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
    </nav>
  );
};

export default Sidebar;