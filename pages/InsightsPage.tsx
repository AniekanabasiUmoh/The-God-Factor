import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const InsightsPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black font-display selection:bg-primary selection:text-white">
            <Sidebar />
            <main className="flex-1 lg:ml-56 min-h-screen bg-zinc-50 relative flex flex-col">

                <style>{`
            .tech-grid {
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
                background-size: 4rem 4rem;
            }
            .no-scrollbar::-webkit-scrollbar {
                display: none;
            }
            .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            .archive-card-hover {
                transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .archive-card-hover:hover {
                transform: translateY(-4px);
                box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
            }
            .archive-card-hover:hover .card-image {
                transform: scale(1.03);
                filter: grayscale(100%);
            }
        `}</style>

                {/* Filter Protocol Bar - Sticky */}
                <div className="border-b border-zinc-200 bg-white sticky top-0 z-20 flex overflow-x-auto no-scrollbar items-center">
                    <div className="px-6 py-4 border-r border-zinc-200 bg-white text-black flex items-center gap-2 shrink-0">
                        <span className="material-symbols-outlined text-sm text-primary">filter_list</span>
                        <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
                    </div>
                    <div className="flex items-center">
                        <button className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary bg-zinc-50 transition-colors whitespace-nowrap">All Data</button>
                        <button className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors whitespace-nowrap">Political</button>
                        <button className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors whitespace-nowrap">Corporate</button>
                        <button className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors whitespace-nowrap">Cultural</button>
                        <button className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors whitespace-nowrap">Environmental</button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 tech-grid">

                    {/* Article 1 - Large Feature */}
                    <article className="lg:col-span-2 group relative h-[80vh] bg-white overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 overflow-hidden">
                            <img alt="Abstract red and white geometric shapes" className="card-image h-full w-full object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyIySv0gZ0WlYXncC8XgQ3T16zjhiK2ToJC7mphx1Ht9pqaiF1YhopYE8LMgQCLWx9Lx16vx1-4SowjXUX3eRlyxZPehTtABqYDFaYv35gVm-E_mo4Z7fVrFiZCHtJgf-h_2YGRDaOM9vsTQrmV6HNHD34W4xMAzjaMvc0GWKy9P_si3S9cvK74rADG4hsRvSuueLUvvMDBxTmyM9kUMVBuDGPOmSKkPGNUFeJYbMnsqjKHRpF7mqF9tYUsnhbx9C9IFPmeFSuCMn" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>

                        <div className="absolute top-6 left-6 z-20 flex gap-2">
                            <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Analysis</span>
                            <span className="bg-primary/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Critical</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <div className="max-w-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <p className="text-primary font-mono text-xs tracking-widest uppercase">Sector: Corporate</p>
                                </div>
                                <h3 className="text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tighter mb-6">
                                    Crisis Mitigation<br /><span className="text-transparent stroke-white text-outline font-light" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Protocol</span>
                                </h3>
                                <p className="text-gray-300 font-body text-base md:text-lg leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                    Restructuring public perception following a major data breach for Entity X. Utilizing algorithmic suppression and narrative reconstruction.
                                </p>
                                <div className="mt-8 flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                    Access File <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article className="group relative h-[60vh] bg-white overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 overflow-hidden">
                            <img alt="Blurred red lights" className="card-image h-full w-full object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIWr0UHMM_dAPgTuLpcSf11vynntghYHVXJMJvNHfpd0ctJYGD6DhSCMzuUuHevYd0S1gZqaaQUFDQLzzjKX_i0k6OTC-17YwPY0LWoOwW9-uaMhloG4rV8uJtnQS-REDbFI_HbjdXlSicU68TS9QcsqU7olN38FNKFEtXzWzfEvAhzClsqXtfKiu7L57JXEB3bF33Ad_VXtvH804n3vnTXWIs_CXZyI4WG7j1wZgcGPeGboHXkzamC0OC_FbJR3RplCT3sKoKOV74" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        <div className="absolute top-6 left-6 z-20">
                            <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Forecast</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                            <p className="text-primary font-mono text-xs mb-2 tracking-widest uppercase">Political // National</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase leading-none tracking-tight mb-4 group-hover:text-primary transition-colors">
                                Election Impact
                            </h3>
                            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm line-clamp-2 group-hover:text-white transition-colors">
                                Predictive modeling for voter sentiment shifts in swing states. Hyper-local targeting vectors deployed.
                            </p>
                        </div>
                    </article>

                    {/* Article 3 */}
                    <article className="group relative h-[60vh] bg-white overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 overflow-hidden">
                            <img alt="Sharp red architectural lines" className="card-image h-full w-full object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfYSKozHNfRT_BtsTEavqEffmGNHtpH3r41JJ8T_OnF0JxRHBssG29h8vLq0FULU4R_yvXFTgqxiTRdw9hPcnlVIY4m9taJoxl4vLYdHtiJnnW6bIWqVUpbM8LXRLTHwfJd8pue3srOedaRiKf_CzU3Lpc3CRFz1RFEUXZqbWoiW3L7c4vKHcEBRYbhR0YvxbZgciKj_N9tGOA_uH99TxPj5Dj2noYljtsJzJ1YPPu07O7JQuNJGv5IziTAXiVSfWqHqh9o59Gr3Mh" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        <div className="absolute top-6 left-6 z-20">
                            <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Strategy</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                            <p className="text-primary font-mono text-xs mb-2 tracking-widest uppercase">Cultural // Rebrand</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase leading-none tracking-tight mb-4 group-hover:text-primary transition-colors">
                                Narrative Shift
                            </h3>
                            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm line-clamp-2 group-hover:text-white transition-colors">
                                Realigning heritage brand values with modern consumer expectations through architectural storytelling.
                            </p>
                        </div>
                    </article>

                    {/* Article 4 - Text Heavy */}
                    <article className="group relative h-[50vh] bg-white p-8 md:p-12 flex flex-col justify-between hover:bg-zinc-50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Case Study</span>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Public Relations</span>
                            </div>
                            <span className="material-symbols-outlined text-4xl text-zinc-200 group-hover:text-primary transition-colors">description</span>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-black uppercase leading-none tracking-tight mb-6">
                                The Psychology<br />of <span className="text-primary">Silence</span>
                            </h3>
                            <p className="text-zinc-500 font-body text-sm leading-relaxed max-w-md mb-8">
                                Why strategic silence is often more powerful than noise in crisis management. An analysis of the "Zero Signal" approach during the 2023 financial quarter.
                            </p>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-primary transition-colors border-b border-black group-hover:border-primary pb-1">
                                Read Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </article>

                    {/* Article 5 */}
                    <article className="group relative h-[50vh] bg-white overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 overflow-hidden">
                            <img alt="Red fluid abstract art" className="card-image h-full w-full object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MZjqqHCD-3yaM36DvT7mFdQ1tgd5dEGqB5Wk9dc5LdVSrb0D3EiRdgLpiklqTaYHjsmmpHw9KENw-al1fhtiLVPTO5oQ-LN4yoaNG4qC_vZvtAwaTmYmlzz72SESSgm6gYGgXenapjnJKkCL7pymNqC53Z3T_6JencVt0ubT-sHzRFdqbvqjWVkkyCG-3bHHmT12RZSWGlT5nVXvquri_oA3_SxfLjkt_H1FHNaR1A9s8cQLDOMx0j76oMseOIyjULKxiWvuoT54" />
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                        </div>
                        <div className="absolute top-6 left-6 z-20">
                            <span className="bg-black/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Pivot</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                            <p className="text-white/70 font-mono text-xs mb-2 tracking-widest uppercase">Cultural // Museum Z</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase leading-none tracking-tight">
                                Cultural Pivot
                            </h3>
                        </div>
                    </article>
                </div>

                {/* Intelligence Feed - Clean Version */}
                <section className="bg-zinc-100 border-t border-zinc-200 py-16 px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="material-symbols-outlined text-primary">satellite_alt</span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black">Latest Archives</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <article className="group cursor-pointer">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                <span className="font-mono text-[10px] text-zinc-400">10.14.23</span>
                            </div>
                            <h4 className="text-lg font-bold text-black uppercase leading-tight mb-2 group-hover:text-primary transition-colors">The Art of the Pivot</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">Analysis of abstract storytelling vectors in the 2024 media landscape.</p>
                        </article>
                        <article className="group cursor-pointer">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="size-1.5 rounded-full bg-zinc-300"></span>
                                <span className="font-mono text-[10px] text-zinc-400">09.02.23</span>
                            </div>
                            <h4 className="text-lg font-bold text-black uppercase leading-tight mb-2 group-hover:text-primary transition-colors">Performance Consultancy</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">Treating corporate restructuring as a curated exhibition of power dynamics.</p>
                        </article>
                        <article className="group cursor-pointer">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="size-1.5 rounded-full bg-zinc-300"></span>
                                <span className="font-mono text-[10px] text-zinc-400">08.28.23</span>
                            </div>
                            <h4 className="text-lg font-bold text-black uppercase leading-tight mb-2 group-hover:text-primary transition-colors">Strategic Silence</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">Managing PR vacuums in high-volatility markets. When zero signal is the strongest signal.</p>
                        </article>

                        <div className="bg-white border border-zinc-200 p-6 flex flex-col justify-center">
                            <h4 className="text-sm font-bold uppercase mb-4">Subscribe to Intel</h4>
                            <div className="flex border-b border-black pb-2">
                                <input className="bg-transparent border-none text-black text-xs w-full focus:ring-0 font-mono placeholder-zinc-400 outline-none" placeholder="ENTER_EMAIL_ID" type="email" />
                                <button className="text-primary hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Replaced Footer */}
                <Footer />
            </main>
        </div>
    );
};

export default InsightsPage;