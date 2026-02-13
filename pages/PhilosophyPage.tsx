import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';

const PhilosophyPage: React.FC = () => {
    const { openModal } = useModal();
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white text-[#181111] font-display">
            <Sidebar />
            <main className="flex-1 lg:ml-56 relative bg-white min-h-screen">


                <section className="relative pt-20 pb-32 px-6 lg:px-20 overflow-hidden">
                    {/* Background Geometric Decorations */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-10"></div>
                    <div className="absolute top-40 left-[10%] w-64 h-64 rounded-full border border-primary/20 -z-10"></div>
                    <div className="absolute bottom-20 right-[20%] w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 items-center">
                        {/* Text Area */}
                        <div className="col-span-1 md:col-span-7 md:col-start-1 z-10 relative">
                            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-[#181111] mb-8">
                                ART & <br />
                                <span className="text-outline text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">INFLUENCE</span>
                            </h1>
                            <div className="w-24 h-2 bg-primary mb-8"></div>
                            <p className="text-lg md:text-xl font-normal leading-relaxed max-w-lg text-zinc-600">
                                Creative intelligence meets crisis management in a layout of red-tinted classical forms and modern geometry.
                            </p>
                            <div className="flex gap-4 mt-10">
                                <button className="group flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase border-b border-primary pb-1 hover:text-[#181111] hover:border-[#181111] transition-all">
                                    Explore Philosophy
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Image Area */}
                        <div className="col-span-1 md:col-span-6 md:col-start-7 row-start-1 md:row-start-1 relative mt-10 md:mt-0">
                            <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
                                <div className="absolute -top-6 -right-6 w-full h-full bg-primary z-0 hidden md:block"></div>
                                <div className="absolute inset-0 z-10 overflow-hidden bg-zinc-200">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtTkJmb-K77f-mF5JkmaxzLPVRpv_bP3FkP2VUtFV_TvQV9olJODihcCuOSEHD4-mMpIYePiaIBZK6tx8bCfgQCidfs0pkt9Lr-osaqI-gx6poSqmJdNaoV2YR6cbRtpL-rBBh6LBBVPQ9fBjLqBzDDmHr-LIRaTUNpnmayUKBSTDD2iwRK_66Q-3wQz-jhqKNvCZItKrj3yYwTo5QUPuAmdu4xi0ZN0rqg0hVoagMd2oAgfkQaiq2YUiVFdwb94sdBTHUOgcxAWf" alt="Abstract Art" className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none"></div>
                                </div>
                                <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 shadow-2xl max-w-[200px]">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-2">stars</span>
                                    <p className="text-xs font-bold uppercase tracking-wider">The God Factor</p>
                                    <p className="text-[10px] text-zinc-500 mt-1">Elevating brands to mythical status.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Midas Touch */}
                <section className="bg-zinc-50 px-6 py-24 lg:px-20 lg:py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-primary/20 pb-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-[#181111]">THE MIDAS TOUCH</h2>
                                <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase">Strategic Alchemy</p>
                            </div>
                            <div className="mt-8 md:mt-0 max-w-md text-right md:text-left">
                                <p className="text-zinc-600">Turning crisis into opportunity through the alchemy of art and high-stakes strategy.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
                            {/* Card 1 */}
                            <div className="group relative flex flex-col p-8 bg-white border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-red-600 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full mb-6 group-hover:border-white group-hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">change_history</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Strategic Alchemy</h3>
                                    <p className="text-sm text-zinc-500 group-hover:text-white/90 leading-relaxed transition-colors">
                                        Transforming raw challenges into golden narratives. We take the lead when others retreat.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group relative flex flex-col p-8 bg-white border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden md:mt-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-red-600 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full mb-6 group-hover:border-white group-hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">square</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Visual Authority</h3>
                                    <p className="text-sm text-zinc-500 group-hover:text-white/90 leading-relaxed transition-colors">
                                        Design that commands respect. We build visual languages that speak with absolute power.
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group relative flex flex-col p-8 bg-white border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden md:mt-24">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-red-600 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center border border-primary/30 rounded-full mb-6 group-hover:border-white group-hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">circle</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Creative Intelligence</h3>
                                    <p className="text-sm text-zinc-500 group-hover:text-white/90 leading-relaxed transition-colors">
                                        Fusing data with divine artistic intuition. The intersection where logic meets magic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Grid */}
                <section className="py-24 px-6 lg:px-20 bg-white relative">
                    <div className="absolute left-6 lg:left-20 top-0 h-full w-px bg-zinc-100 hidden md:block"></div>
                    <div className="max-w-7xl mx-auto pl-0 md:pl-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-zinc-100">
                            <div className="p-10 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-[#181111] mb-6 group-hover:text-primary transition-colors">chess_knight</span>
                                <h3 className="text-2xl font-bold mb-2">Brand Strategy</h3>
                                <p className="text-sm text-zinc-500">Long-term vision crafting.</p>
                                <a href="#" className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Discover</a>
                            </div>
                            <div className="p-10 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-[#181111] mb-6 group-hover:text-primary transition-colors">gpp_maybe</span>
                                <h3 className="text-2xl font-bold mb-2">Crisis Management</h3>
                                <p className="text-sm text-zinc-500">Protection when it matters most.</p>
                                <a href="#" className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Discover</a>
                            </div>
                            <div className="p-10 border-r border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-[#181111] mb-6 group-hover:text-primary transition-colors">palette</span>
                                <h3 className="text-2xl font-bold mb-2">Art Consultancy</h3>
                                <p className="text-sm text-zinc-500">Curating taste and influence.</p>
                                <a href="#" className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Discover</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 lg:px-20 pb-20">
                    <div className="relative w-full h-[400px] md:h-[600px] rounded overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtTkJmb-K77f-mF5JkmaxzLPVRpv_bP3FkP2VUtFV_TvQV9olJODihcCuOSEHD4-mMpIYePiaIBZK6tx8bCfgQCidfs0pkt9Lr-osaqI-gx6poSqmJdNaoV2YR6cbRtpL-rBBh6LBBVPQ9fBjLqBzDDmHr-LIRaTUNpnmayUKBSTDD2iwRK_66Q-3wQz-jhqKNvCZItKrj3yYwTo5QUPuAmdu4xi0ZN0rqg0hVoagMd2oAgfkQaiq2YUiVFdwb94sdBTHUOgcxAWf" alt="Abstract Art" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10 md:p-20">
                            <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
                                "Chaos is merely order waiting to be designed."
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="bg-[#181111] text-white px-6 lg:px-20 py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full filter blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="max-w-4xl relative z-10">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">
                            LET'S<br /><span className="text-primary">CREATE.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-zinc-400 mb-12 max-w-xl">
                            Ready to redefine your narrative with the God Factor? The canvas is waiting.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={openModal}
                                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded h-14 px-8 bg-primary text-white text-base font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-primary transition-colors"
                            >
                                Start a Project
                            </button>
                            <button
                                onClick={openModal}
                                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded h-14 px-8 border border-white/20 text-white text-base font-bold tracking-[0.15em] uppercase hover:border-white transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default PhilosophyPage;