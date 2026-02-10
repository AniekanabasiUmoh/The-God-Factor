import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';

const AboutPage: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-background-dark text-[#181111] dark:text-[#f0f0f0] font-display">
      <Sidebar />
      <main className="flex-1 lg:ml-72 relative bg-white dark:bg-background-dark min-h-screen">
        <section className="relative pt-20 pb-16 px-6 lg:px-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-10"></div>
            <div className="absolute top-20 left-1/2 w-px h-32 bg-primary/20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="inline-block mb-6 px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</div>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-primary mb-8 uppercase">
                    Segmented<br/>
                    <span className="text-[#181111] dark:text-white">Intelligence</span>
                </h1>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-8 relative">
                    <div className="absolute left-0 top-0 h-full w-32 bg-primary"></div>
                </div>
                <p className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-gray-600 dark:text-gray-300">
                    We dissect complex challenges into actionable strategies. Our services are the bridge between artistic vision and market dominance.
                </p>
            </div>
        </section>

        <section className="px-6 lg:px-20 pb-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 auto-rows-fr">
                <div className="group relative flex flex-col justify-between p-8 lg:p-12 border border-gray-100 dark:border-red-900/10 bg-white dark:bg-[#1f0f0f] hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out"></div>
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-gray-400 mb-2 block tracking-widest">SECTION A</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-[#181111] dark:text-white group-hover:text-primary transition-colors">Strategic Communication<br/>& Branding</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Crafting the core identity that defines your market existence. We don't just position brands; we elevate them to cultural icons.
                        </p>
                        <ul className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Brand Strategy & Architecture</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Market Positioning</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Cultural Advisory</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="group relative flex flex-col justify-between p-8 lg:p-12 border border-gray-100 dark:border-red-900/10 bg-white dark:bg-[#1f0f0f] hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl mt-0 md:mt-12">
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 rotate-45 group-hover:rotate-12 transition-all duration-700"></div>
                    <div className="absolute top-0 right-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out delay-75"></div>
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-gray-400 mb-2 block tracking-widest">SECTION B</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-[#181111] dark:text-white group-hover:text-primary transition-colors">PR & Media<br/>Management</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Curating your public narrative with surgical precision. We manage perception across all channels to ensure your story is heard exactly as intended.
                        </p>
                        <ul className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">PR Strategy & Execution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Reputation Management</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Political Communication</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="group relative flex flex-col justify-between p-8 lg:p-12 border border-gray-100 dark:border-red-900/10 bg-white dark:bg-[#1f0f0f] hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform skew-x-12"></div>
                    <div className="absolute bottom-0 right-0 h-2 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-gray-400 mb-2 block tracking-widest">SECTION C</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-[#181111] dark:text-white group-hover:text-primary transition-colors">Crisis & Propaganda<br/>Intelligence</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Navigating the storms of modern discourse. We offer rapid response and strategic foresight to recover and rebuild narratives.
                        </p>
                        <ul className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Counter-Propaganda Operations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Narrative Recovery</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Digital Risk Analysis</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="group relative flex flex-col justify-between p-8 lg:p-12 border border-gray-100 dark:border-red-900/10 bg-white dark:bg-[#1f0f0f] hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl mt-0 md:mt-12">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20 group-hover:border-primary group-hover:w-40 group-hover:h-40 transition-all duration-500 rounded-br-3xl"></div>
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-gray-400 mb-2 block tracking-widest">SECTION D</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-[#181111] dark:text-white group-hover:text-primary transition-colors">Creative &<br/>Production</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Visualizing the unseen. Our production house merges high art with commercial viability to produce content that lingers in the mind.
                        </p>
                        <ul className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Content Creation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Cinematic Videography</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
                                <span className="text-sm font-medium uppercase tracking-wide">Visual Identity Systems</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-2 mt-8">
                    <div className="relative flex flex-col md:flex-row items-center justify-between p-10 bg-[#fbfbfb] dark:bg-[#1a0b0b] border border-gray-200 dark:border-red-900/20 rounded-sm">
                        <div className="flex items-center gap-6 mb-6 md:mb-0">
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-full text-gray-400">
                                <span className="material-symbols-outlined text-3xl">lock</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#181111] dark:text-white">Life Coaching & Advisory</h3>
                                <p className="text-sm text-primary uppercase tracking-widest mt-1 font-bold">Exclusive Access</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Available to registered clients only</p>
                            <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors cursor-not-allowed" disabled>
                                Member Login Required
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-6 lg:px-20 pb-20">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
                <img alt="Red geometric abstract art representing structured chaos and strategic planning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtTkJmb-K77f-mF5JkmaxzLPVRpv_bP3FkP2VUtFV_TvQV9olJODihcCuOSEHD4-mMpIYePiaIBZK6tx8bCfgQCidfs0pkt9Lr-osaqI-gx6poSqmJdNaoV2YR6cbRtpL-rBBh6LBBVPQ9fBjLqBzDDmHr-LIRaTUNpnmayUKBSTDD2iwRK_66Q-3wQz-jhqKNvCZItKrj3yYwTo5QUPuAmdu4xi0ZN0rqg0hVoagMd2oAgfkQaiq2YUiVFdwb94sdBTHUOgcxAWf"/>
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/80 px-8 py-6 backdrop-blur-sm border-l-4 border-primary max-w-lg text-center">
                        <p className="text-lg font-medium italic text-gray-800 dark:text-gray-200">
                            "The art of strategy is knowing when to paint with broad strokes and when to define the finest details."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#181111] text-white px-6 lg:px-20 py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full filter blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-4xl relative z-10 mx-auto text-center">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-10 text-primary">
                    LET'S BUILD<br/><span className="text-white">INFLUENCE</span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-gray-400 mb-12 max-w-xl mx-auto">
                    Your narrative is waiting to be written. Let's craft your legacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button onClick={openModal} className="flex min-w-[240px] cursor-pointer items-center justify-center rounded h-16 px-8 bg-primary text-white text-lg font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-primary transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        Start a Project
                    </button>
                </div>
            </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;