import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const BrandsPage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-[#0f0505] text-[#181111] dark:text-[#f0f0f0] font-display selection:bg-primary selection:text-white">
            <Sidebar />
            <main className="flex-1 lg:ml-56 relative flex flex-col w-full pt-12 lg:pt-32 bg-white dark:bg-[#0f0505] min-h-screen">

                {/* Header / Parent Brand Section */}
                <section className="relative pt-24 pb-20 px-6 lg:px-20 border-b border-gray-100 dark:border-white/5">
                    <div className="max-w-5xl">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Corporate Structure</span>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#181111] dark:text-white mb-8 leading-[0.9]">
                            The God Factor
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-3xl">
                            The parent entity handling <span className="text-primary font-medium">end-to-end communication strategy</span>, brand architecture, consulting, and intelligence-driven solutions across political, corporate, social, and cultural sectors.
                        </p>
                    </div>
                </section>

                {/* Subsidiaries Grid */}
                <section className="flex-grow">
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

                        {/* Spotlights */}
                        <div className="group relative border-b md:border-b-0 border-r border-gray-100 dark:border-white/5 p-12 lg:p-20 flex flex-col justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-500">

                            <div className="relative z-10">
                                <div className="mb-12">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-[#181111] dark:text-white">Spotlights</h2>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Advertisement & Media Amplification Arm</p>
                                </div>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                        <span className="text-lg text-gray-700 dark:text-gray-300">Advertising campaigns</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                        <span className="text-lg text-gray-700 dark:text-gray-300">Media buying & placements</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                        <span className="text-lg text-gray-700 dark:text-gray-300">Promotional content distribution</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                        <span className="text-lg text-gray-700 dark:text-gray-300">Audience targeting & visibility strategies</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 relative z-10">
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-black dark:hover:text-white transition-colors">
                                    View Media Kit <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Akata Press */}
                        <div className="group relative border-b md:border-b-0 border-gray-100 dark:border-white/5 p-12 lg:p-20 flex flex-col justify-between bg-[#181111] text-white hover:bg-black transition-colors duration-500">

                            <div className="relative z-10">
                                <div className="mb-12">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">Akata Press</h2>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Crisis Management & Propaganda Intelligence</p>
                                </div>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">shield</span>
                                        <span className="text-lg text-gray-300">Crisis response & narrative control</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">shield</span>
                                        <span className="text-lg text-gray-300">Counter-propaganda operations</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">shield</span>
                                        <span className="text-lg text-gray-300">Strategic messaging during conflicts</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">shield</span>
                                        <span className="text-lg text-gray-300">Political & institutional reputation defense</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 relative z-10">
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">
                                    Secure Briefing <span className="material-symbols-outlined text-sm">lock</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="bg-gray-50 dark:bg-[#121212] px-6 lg:px-20 py-24 border-t border-gray-200 dark:border-white/10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="max-w-lg">
                            <h3 className="text-3xl font-serif font-bold mb-6 text-[#181111] dark:text-white">Partner & Affiliated Companies</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Our strategic alliances ensure seamless execution across physical and logistical domains. These partners support project execution, logistics, and infrastructural needs where required.
                            </p>
                            <div className="flex gap-4">
                                <span className="w-12 h-px bg-primary mt-3"></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Alliance Network</span>
                            </div>
                        </div>

                        <div className="grid gap-6 w-full max-w-md">
                            <div className="bg-white dark:bg-black p-8 border border-gray-200 dark:border-white/10 flex items-center gap-6 group hover:border-primary transition-colors">
                                <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 flex items-center justify-center rounded-sm">
                                    <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">construction</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#181111] dark:text-white">Standard Pro Construction</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Infrastructure & Execution</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-black p-8 border border-gray-200 dark:border-white/10 flex items-center gap-6 group hover:border-primary transition-colors">
                                <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 flex items-center justify-center rounded-sm">
                                    <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors">local_shipping</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#181111] dark:text-white">Send Okon Logistics</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">Supply Chain & Transport</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default BrandsPage;