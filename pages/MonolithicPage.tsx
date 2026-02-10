import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const MonolithicPage: React.FC = () => {
    const { openModal } = useModal();

    return (
        <div className="bg-[#0a0a0a] text-white font-display antialiased min-h-screen flex flex-col selection:bg-[#f20d0d] selection:text-white">
             <style>{`
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #000; 
                }
                ::-webkit-scrollbar-thumb {
                    background: #f20d0d; 
                }
                .text-stroke-red {
                    -webkit-text-stroke: 1px #f20d0d;
                    color: transparent;
                }
                .text-stroke-white {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.3);
                    color: transparent;
                }
            `}</style>
            {/* Header / Nav */}
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <nav className="pointer-events-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 flex items-center gap-8 shadow-2xl">
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-[#f20d0d] group-hover:text-white transition-colors">emergency_home</span>
                        <span className="font-bold uppercase text-sm tracking-widest hidden sm:block">God Factor</span>
                    </Link>
                    <div className="w-px h-4 bg-white/20"></div>
                    <div className="flex gap-6">
                        <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#f20d0d] transition-colors">Work</Link>
                        <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#f20d0d] transition-colors">Insights</Link>
                        <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#f20d0d] transition-colors">About</Link>
                        <button onClick={openModal} className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#f20d0d] transition-colors">Contact</button>
                    </div>
                </nav>
            </header>

            <main className="w-full">
                {/* Hero */}
                <section className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-[#0a0a0a] overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f20d0d]/30 via-[#0a0a0a] to-[#0a0a0a]"></div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
                        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            <span className="block text-white">Monolithic</span>
                            <span className="block text-[#f20d0d]">Narrative</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-body text-gray-400 max-w-xl font-light">
                            The art of strategy carved from chaos. Scroll to explore our latest case studies.
                        </p>
                        <div className="animate-bounce mt-12 text-[#f20d0d]">
                            <span className="material-symbols-outlined !text-4xl">arrow_downward</span>
                        </div>
                    </div>
                </section>
                
                {/* Case Study 01 */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Abstract red corporate structure" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyIySv0gZ0WlYXncC8XgQ3T16zjhiK2ToJC7mphx1Ht9pqaiF1YhopYE8LMgQCLWx9Lx16vx1-4SowjXUX3eRlyxZPehTtABqYDFaYv35gVm-E_mo4Z7fVrFiZCHtJgf-h_2YGRDaOM9vsTQrmV6HNHD34W4xMAzjaMvc0GWKy9P_si3S9cvK74rADG4hsRvSuueLUvvMDBxTmyM9kUMVBuDGPOmSKkPGNUFeJYbMnsqjKHRpF7mqF9tYUsnhbx9C9IFPmeFSuCMn"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start md:items-end justify-end h-full pb-20 md:pb-32 w-full">
                        <div className="backdrop-blur-md bg-white/5 border-l-4 border-[#f20d0d] p-8 md:p-12 max-w-2xl w-full">
                            <span className="text-[#f20d0d] font-mono text-sm tracking-widest mb-4 block">CASE STUDY 01 — CORPORATE</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6 text-white mix-blend-overlay">
                                Crisis<br/><span className="text-[#f20d0d] opacity-90">Mitigation</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 font-body leading-relaxed mb-8 border-l border-white/20 pl-4">
                                Restructuring public perception following a major data breach for Entity X. Turning a vulnerability into a demonstration of resilience.
                            </p>
                            <a className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-[#f20d0d] transition-colors group/link" href="#">
                                Explore Strategy <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Case Study 02 */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Blurred red lights political" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIWr0UHMM_dAPgTuLpcSf11vynntghYHVXJMJvNHfpd0ctJYGD6DhSCMzuUuHevYd0S1gZqaaQUFDQLzzjKX_i0k6OTC-17YwPY0LWoOwW9-uaMhloG4rV8uJtnQS-REDbFI_HbjdXlSicU68TS9QcsqU7olN38FNKFEtXzWzfEvAhzClsqXtfKiu7L57JXEB3bF33Ad_VXtvH804n3vnTXWIs_CXZyI4WG7j1wZgcGPeGboHXkzamC0OC_FbJR3RplCT3sKoKOV74"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/40"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start justify-end h-full pb-20 md:pb-32 w-full">
                        <div className="backdrop-blur-md bg-black/40 border-r-4 border-[#f20d0d] p-8 md:p-12 max-w-2xl w-full">
                            <span className="text-[#f20d0d] font-mono text-sm tracking-widest mb-4 block">CASE STUDY 02 — POLITICAL</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6 text-white mix-blend-overlay">
                                Election<br/><span className="text-stroke-red">Impact</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 font-body leading-relaxed mb-8 border-l border-white/20 pl-4">
                                Predictive modeling for voter sentiment shifts in swing states. Using chaos theory to map the political landscape.
                            </p>
                            <a className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-[#f20d0d] transition-colors group/link" href="#">
                                View Analysis <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Case Study 03 */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Sharp red architectural lines" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfYSKozHNfRT_BtsTEavqEffmGNHtpH3r41JJ8T_OnF0JxRHBssG29h8vLq0FULU4R_yvXFTgqxiTRdw9hPcnlVIY4m9taJoxl4vLYdHtiJnnW6bIWqVUpbM8LXRLTHwfJd8pue3srOedaRiKf_CzU3Lpc3CRFz1RFEUXZqbWoiW3L7c4vKHcEBRYbhR0YvxbZgciKj_N9tGOA_uH99TxPj5Dj2noYljtsJzJ1YPPu07O7JQuNJGv5IziTAXiVSfWqHqh9o59Gr3Mh"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full w-full">
                        <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 p-12 md:p-20 max-w-4xl w-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f20d0d] to-transparent"></div>
                            <span className="text-[#f20d0d] font-mono text-sm tracking-widest mb-6 block">CASE STUDY 03 — CULTURAL</span>
                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-8 text-white">
                                Narrative<br/><span className="text-[#f20d0d] italic">Shift</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-200 font-body font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                                Reclaiming heritage through avant-garde storytelling for Brand Y. A complete reinvention of the historical archive.
                            </p>
                            <a className="inline-block px-8 py-4 bg-[#f20d0d] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors" href="#">
                                Read Case Study
                            </a>
                        </div>
                    </div>
                </section>

                {/* Case Study 04 */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Red fluid abstract art" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MZjqqHCD-3yaM36DvT7mFdQ1tgd5dEGqB5Wk9dc5LdVSrb0D3EiRdgLpiklqTaYHjsmmpHw9KENw-al1fhtiLVPTO5oQ-LN4yoaNG4qC_vZvtAwaTmYmlzz72SESSgm6gYGgXenapjnJKkCL7pymNqC53Z3T_6JencVt0ubT-sHzRFdqbvqjWVkkyCG-3bHHmT12RZSWGlT5nVXvquri_oA3_SxfLjkt_H1FHNaR1A9s8cQLDOMx0j76oMseOIyjULKxiWvuoT54"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full w-full">
                        <div className="max-w-3xl w-full">
                            <span className="text-[#f20d0d] font-mono text-sm tracking-widest mb-4 block">CASE STUDY 04 — CULTURAL</span>
                            <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] mb-8 text-white">
                                Cultural<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f20d0d] to-white">Pivot</span>
                            </h2>
                            <div className="bg-black/50 backdrop-blur-sm p-8 border-l-2 border-[#f20d0d]">
                                <p className="text-lg md:text-xl text-gray-300 font-body leading-relaxed mb-6">
                                    Redefining the gallery space for the digital age at Museum Z. We merged physical sculpture with digital permanence.
                                </p>
                                <a className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#f20d0d] transition-colors flex items-center gap-2" href="#">
                                    View Exhibition <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study 05 */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img alt="Abstract red smoke" className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjp2h5xi8g5GUdG9L4wFzlOQBWP4uw_nvGizVjjfQTN3cjVDpBj4AvaE2mOyjVb5gvFGMeZeIKG0QDizyY_BiJ0AKQ1VIwSOQtcnKlri8Z6wqwLovp5HU_BmxENYFDF-GYbvIhOoDysNLFrev931L4qJ1uYT1OuidmFlpwdfL4i_-tT51XGmwOHQePrGcuzD6yLQKomxFIPur4c_jBtnY6tl9Nm-QSrV2tXe2lrig8y2XSvYP01YSMiTDTwHzd1Munte5UNzt4nS-"/>
                        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-end justify-center h-full w-full text-right">
                        <div className="max-w-3xl w-full">
                            <span className="text-[#f20d0d] font-mono text-sm tracking-widest mb-4 block">CASE STUDY 05 — ENVIRONMENTAL</span>
                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-8 text-white">
                                Eco<br/><span className="text-stroke-white">Alignment</span>
                            </h2>
                            <div className="bg-black/50 backdrop-blur-sm p-8 border-r-2 border-[#f20d0d] ml-auto">
                                <p className="text-lg md:text-xl text-gray-300 font-body leading-relaxed mb-6">
                                    Greenwashing defense and authentic eco-alignment strategies. Building trust through radical transparency.
                                </p>
                                <a className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#f20d0d] transition-colors flex items-center gap-2 justify-end" href="#">
                                    Read Report <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest Insights */}
                <section className="bg-white text-black py-32 px-6 md:px-12">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-6">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
                                Latest<br/>Insights
                            </h2>
                            <Link to="/insights" className="text-[#f20d0d] font-bold uppercase tracking-widest mt-6 md:mt-0 hover:text-black transition-colors flex items-center gap-2">
                                View Archive <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            <article className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden aspect-video bg-gray-100">
                                    <div className="w-full h-full bg-black group-hover:bg-[#f20d0d] transition-colors duration-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl opacity-20">history_edu</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-gray-500 mb-2 block">OCT 14, 2023</span>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#f20d0d] transition-colors mb-3">The Art of the Pivot</h3>
                                <p className="text-sm text-gray-600 font-body mb-4">Why traditional PR is dead and how abstract storytelling is taking its place in the modern arena.</p>
                                <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#f20d0d] transition-colors">Read Article</span>
                            </article>
                            <article className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden aspect-video bg-gray-100">
                                    <div className="w-full h-full bg-gray-900 group-hover:bg-[#f20d0d] transition-colors duration-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl opacity-20">theater_comedy</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-gray-500 mb-2 block">SEP 02, 2023</span>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#f20d0d] transition-colors mb-3">Consultancy as Art</h3>
                                <p className="text-sm text-gray-600 font-body mb-4">Treating corporate restructuring as a curated exhibition of power dynamics and visual hierarchy.</p>
                                <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#f20d0d] transition-colors">Read Article</span>
                            </article>
                            <article className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden aspect-video bg-gray-100">
                                    <div className="w-full h-full bg-gray-800 group-hover:bg-[#f20d0d] transition-colors duration-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl opacity-20">mic_off</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-gray-500 mb-2 block">AUG 28, 2023</span>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#f20d0d] transition-colors mb-3">Silence is Loud</h3>
                                <p className="text-sm text-gray-600 font-body mb-4">When saying nothing says everything: A guide to strategic silence in a noisy digital ecosystem.</p>
                                <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#f20d0d] transition-colors">Read Article</span>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/10">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-[#f20d0d]">emergency_home</span>
                            <h2 className="text-2xl font-bold tracking-widest uppercase">The God Factor</h2>
                        </div>
                        <p className="text-gray-400 max-w-sm font-body">
                            We don't just tell stories. We build monuments to your brand's future.
                        </p>
                    </div>
                    <div className="flex gap-12 flex-wrap">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Navigation</h4>
                            <Link to="/services" className="hover:text-[#f20d0d] transition-colors">Work</Link>
                            <Link to="/insights" className="hover:text-[#f20d0d] transition-colors">Insights</Link>
                            <Link to="/about" className="hover:text-[#f20d0d] transition-colors">About</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Social</h4>
                            <a href="#" className="hover:text-[#f20d0d] transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-[#f20d0d] transition-colors">Twitter</a>
                            <a href="#" className="hover:text-[#f20d0d] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>© 2024 The God Factor. All Rights Reserved.</p>
                    <p>Designed for Impact.</p>
                </div>
            </footer>
        </div>
    );
};

export default MonolithicPage;