import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';

const HomePage: React.FC = () => {
    const { openModal } = useModal();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-[#0f0505] text-[#181111] dark:text-white font-display selection:bg-primary selection:text-white">
            <Sidebar />
            <main className="flex-1 lg:ml-56 relative">

                {/* Hero */}
                <section className="relative h-screen min-h-[800px] flex flex-col justify-between p-6 lg:p-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 clip-path-slant"></div>

                    {/* Background Art */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 dark:opacity-20 pointer-events-none">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8MUPDVAGIbP7UjQ7QmXfiO5n1HOqp3kq6s_LJFO0yi2YvjDApXLaU1IVnfd3w1J6533Bc17s0NZ0WIOMC-c3MKr_qV-u6_n0i369VluMq9DN11C7qC4D51Nh9-uORrLXfu9dbEItoxWqNvLPiZuMK2gGJ_IsU8jjFu64hAzuoQQon8fgLU8Oh3p0bBjuF4JP8mIE_jm4TtcvbnwFu7yFq8tWGUmQZ1cJnkEUXtIvnaokqjLjh9aZrOxn5r9WbYinrs8L4CSums71m" alt="Statue" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-luminosity grayscale contrast-125" />
                    </div>

                    <header className="flex justify-between items-start">
                        <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase border-b border-primary pb-2">Est. 2024</span>
                        <div className="flex gap-8 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase hidden md:flex">
                            <span>London</span>
                            <span>New York</span>
                            <span>Zurich</span>
                        </div>
                    </header>

                    <div className="max-w-4xl z-10 mt-12 md:mt-0">
                        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-8 text-black dark:text-white">
                            THE GOD<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-900 italic pr-4">FACTOR.</span>
                        </h1>
                        <div className="h-1 w-32 bg-primary mb-8"></div>
                        <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                            We architect permanence in a volatile world. An avant-garde consultancy for those who shape history.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
                        <div className="flex gap-6">
                            <Link to="/services" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                Explore Work
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <button onClick={openModal} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                                Inquire
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">call_made</span>
                            </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-400 max-w-xs text-right hidden md:block">
                            Reputation Management • Crisis Calculus • Strategic Influence
                        </p>
                    </div>
                </section>

                {/* Introduction / Manifesto */}
                <section className="bg-[#181111] text-white py-24 px-6 lg:px-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 border border-primary/30 rounded-full animate-spin-slow"></div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyIySv0gZ0WlYXncC8XgQ3T16zjhiK2ToJC7mphx1Ht9pqaiF1YhopYE8LMgQCLWx9Lx16vx1-4SowjXUX3eRlyxZPehTtABqYDFaYv35gVm-E_mo4Z7fVrFiZCHtJgf-h_2YGRDaOM9vsTQrmV6HNHD34W4xMAzjaMvc0GWKy9P_si3S9cvK74rADG4hsRvSuueLUvvMDBxTmyM9kUMVBuDGPOmSKkPGNUFeJYbMnsqjKHRpF7mqF9tYUsnhbx9C9IFPmeFSuCMn" alt="Abstract Red Shape" className="w-full max-w-md mx-auto relative z-10" />
                        </div>
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">The Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                We don't just manage reputations. <br />
                                <span className="italic text-zinc-500">We sculpt legacies.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                                In an age of infinite noise, silence is a luxury and precision is a weapon. The God Factor operates at the intersection of data intelligence and high art, crafting narratives that are immune to market volatility.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-24 px-6 lg:px-20 bg-zinc-50 dark:bg-[#120a0a]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white">Intelligence Sectors</h2>
                            <Link to="/services" className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 mt-4 md:mt-0">View All Capabilities</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <Link to="/team" className="group bg-white dark:bg-[#1a1111] p-12 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity text-primary">
                                    <span className="material-symbols-outlined text-4xl">group</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-primary transition-colors">The Architects</h3>
                                <p className="text-zinc-500 text-sm mb-6">Meet the minds behind the influence.</p>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">Meet Team <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                            </Link>

                            <Link to="/climate" className="group bg-white dark:bg-[#1a1111] p-12 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity text-primary">
                                    <span className="material-symbols-outlined text-4xl">public</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-primary transition-colors">Global Impact</h3>
                                <p className="text-zinc-500 text-sm mb-6">ESG and climate narrative strategies.</p>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default HomePage;