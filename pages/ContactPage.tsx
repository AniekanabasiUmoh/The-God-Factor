import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col md:flex-row overflow-hidden relative selection:bg-primary selection:text-white">
      <style>{`
        .scrolling-panel::-webkit-scrollbar {
            width: 6px
        }
        .scrolling-panel::-webkit-scrollbar-track {
            background: rgba(242, 13, 13, 0.05)
        }
        .scrolling-panel::-webkit-scrollbar-thumb {
            background: rgba(242, 13, 13, 0.2);
            border-radius: 4px
        }
        .input-group {
            transition: all 0.3s ease-in-out
        }
        input::placeholder, textarea::placeholder {
            color: rgba(242, 13, 13, 0.4)
        }
        select {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCwZ-3sIxlamNjaHJetmaVoDd6x_gIP2iOcWl78gPXtIjcjKj7A9wvUXiIZqE_5nPvZyyVlpFHJ09tA-pIVR76dwo6TKQWAIbH9j9GatCBTGhXttM_Oyc5q0VIhCzrGG3GWV83YMxfXZo7CMtigG_7CYFcJa03KRdDscDfz26mhedXKAjwpc3G0aa09h-cQk1CaLikPv9PTMycWlUeiAy9dudCSgbAK7Kf7J8szTtV91OyNmsBlGHCFXfvHZ4SqjZY1oxV1RwPtc_7P);
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
        }
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
      `}</style>

      <Link to="/" className="absolute top-6 right-6 z-50 text-primary md:text-primary bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 transition-colors duration-200 border border-primary/10 shadow-sm">
        <span className="material-symbols-outlined text-2xl">close</span>
      </Link>

      <div className="w-full md:w-5/12 lg:w-1/2 bg-primary relative flex flex-col justify-center items-center p-8 md:p-16 h-[40vh] md:h-screen order-2 md:order-1 overflow-hidden">
        <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="size-6 text-white">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
            </div>
            <span className="text-white font-bold tracking-tight text-sm uppercase">The God Factor</span>
        </div>
        <div className="flex flex-col items-center max-w-md text-center z-10">
            <div className="w-64 h-64 md:w-96 md:h-96 mb-8 relative group">
                <img alt="Thinking head sculpture" className="w-full h-full object-contain drop-shadow-2xl opacity-100 transition-transform duration-[20s] ease-linear hover:scale-105 brightness-110 contrast-125 saturate-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCVlSZ09-_5FEJxZK7sraEJiNujKQZJGMs_5Y0QZAx0A9r74RbsBg7nPGBEClPnfgmb_eXyCVl_tOX15AndYRji0ERp79zKwvT5NbFerzgWoRQrEyJ8VbLRRRpvk94bOTHK_7SgThu4-glAGxAha56kaV97d6lBjMBvikTsZ_bmW33qDwpbMKBFRBylzw2vglmIOxTr-DfZ2dMvpd__QVpTWGj9anHH911tm9goYp9IwEFMHMUol-QsGJRS4rS0RrP26tAVJJuO3NA"/>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full -z-10 scale-90 blur-3xl"></div>
            </div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 drop-shadow-md">
                Strategy begins with a conversation.
            </h1>
            <p className="text-white/80 text-lg font-light">
                Let us refine your raw ideas.
            </p>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-0"></div>
      </div>

      <div className="w-full md:w-7/12 lg:w-1/2 bg-white flex flex-col h-[60vh] md:h-screen order-1 md:order-2 shadow-[0_0_50px_rgba(0,0,0,0.1)] z-20">
        <div className="h-full flex flex-col max-w-2xl mx-auto w-full px-8 md:px-16 py-12 md:py-20 scrolling-panel overflow-y-auto">
            <div className="mb-12 sticky top-0 bg-white z-30 pt-4 pb-4">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase">Sculpting Your Strategy</span>
                    <span className="text-primary text-sm font-medium">Step 1 of 3</span>
                </div>
                <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 rounded-full shadow-[0_0_10px_rgba(242,13,13,0.3)]"></div>
                </div>
            </div>

            <form className="flex-grow flex flex-col gap-10">
                <section className="space-y-6 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-primary text-xs font-bold bg-primary/5">1</span>
                    <h2 className="text-black text-xl font-bold tracking-tight uppercase">Identity</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="input-group flex flex-col gap-2">
                    <label className="text-primary text-xs font-bold uppercase tracking-wider ml-1" htmlFor="name">Full Name</label>
                    <input className="bg-transparent border border-primary/20 text-black text-sm rounded focus:ring-0 focus:border-primary focus:bg-primary/5 placeholder:text-primary/40 h-12 w-full transition-colors" id="name" placeholder="Enter your name" type="text"/>
                    </div>
                    <div className="input-group flex flex-col gap-2">
                    <label className="text-primary text-xs font-bold uppercase tracking-wider ml-1" htmlFor="role">Current Role</label>
                    <input className="bg-transparent border border-primary/20 text-black text-sm rounded focus:ring-0 focus:border-primary focus:bg-primary/5 placeholder:text-primary/40 h-12 w-full transition-colors" id="role" placeholder="e.g. Director" type="text"/>
                    </div>
                    </div>
                    <div className="input-group flex flex-col gap-2">
                    <label className="text-primary text-xs font-bold uppercase tracking-wider ml-1" htmlFor="org">Organization</label>
                    <input className="bg-transparent border border-primary/20 text-black text-sm rounded focus:ring-0 focus:border-primary focus:bg-primary/5 placeholder:text-primary/40 h-12 w-full transition-colors" id="org" placeholder="Company or Institution Name" type="text"/>
                    </div>
                </section>
                <hr className="border-primary/10"/>
                <section className="space-y-6 opacity-90 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-primary text-xs font-bold bg-primary/5">2</span>
                    <h2 className="text-black text-xl font-bold tracking-tight uppercase">The Objective</h2>
                    </div>
                    <div className="input-group flex flex-col gap-2 relative">
                    <label className="text-primary text-xs font-bold uppercase tracking-wider ml-1" htmlFor="objective">Primary Focus</label>
                    <div className="relative">
                    <select className="appearance-none bg-transparent border border-primary/20 text-black text-sm rounded focus:ring-0 focus:border-primary focus:bg-primary/5 h-12 w-full px-4 pr-10 cursor-pointer transition-colors" id="objective">
                    <option className="text-gray-800" value="">Select a strategic focus...</option>
                    <option className="text-gray-800" value="brand">Brand Strategy &amp; Identity</option>
                    <option className="text-gray-800" value="crisis">Crisis Management</option>
                    <option className="text-gray-800" value="media">Media Intelligence</option>
                    <option className="text-gray-800" value="art">Art Direction &amp; Curation</option>
                    <option className="text-gray-800" value="other">Other / Confidential</option>
                    </select>
                    </div>
                    </div>
                </section>
                <hr className="border-primary/10"/>
                <section className="space-y-6 opacity-90 hover:opacity-100 transition-opacity pb-8">
                    <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-primary text-xs font-bold bg-primary/5">3</span>
                    <h2 className="text-black text-xl font-bold tracking-tight uppercase">Logistics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 rounded p-4 border border-primary/10 text-primary">
                    <div className="flex items-center justify-between mb-4 border-b border-primary/10 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Preferred Date</span>
                    <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-primary/60 font-medium">
                    <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
                    <div className="p-1 text-gray-400">28</div>
                    <div className="p-1 text-gray-400">29</div>
                    <div className="p-1 text-gray-400">30</div>
                    <div className="p-1 hover:bg-primary/10 cursor-pointer rounded text-black">1</div>
                    <div className="p-1 hover:bg-primary/10 cursor-pointer rounded text-black">2</div>
                    <div className="p-1 bg-primary text-white rounded shadow-sm cursor-pointer">3</div>
                    <div className="p-1 hover:bg-primary/10 cursor-pointer rounded text-black">4</div>
                    </div>
                    <div className="mt-4 pt-2 border-t border-primary/10">
                    <label className="text-xs font-bold uppercase tracking-wider block mb-1">Time</label>
                    <select className="w-full border-none bg-white text-sm font-bold text-primary rounded py-1 px-2 focus:ring-0 shadow-sm">
                    <option>10:00 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                    </select>
                    </div>
                    </div>
                    <div className="input-group flex flex-col gap-2 h-full">
                    <label className="text-primary text-xs font-bold uppercase tracking-wider ml-1" htmlFor="situation">The Situation</label>
                    <textarea className="bg-transparent border border-primary/20 text-black text-sm rounded focus:ring-0 focus:border-primary focus:bg-primary/5 placeholder:text-primary/40 w-full h-full min-h-[160px] p-4 resize-none transition-colors" id="situation" placeholder="Briefly describe the context..."></textarea>
                    </div>
                    </div>
                </section>
                <div className="pt-4 pb-12">
                    <button className="group relative w-full bg-primary hover:bg-primary/90 text-white font-black text-lg tracking-widest uppercase py-5 rounded shadow-[0_4px_20px_rgba(242,13,13,0.2)] hover:shadow-[0_4px_30px_rgba(242,13,13,0.4)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden" type="button">
                    <span className="relative z-10">Submit Dossier</span>
                    <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                    </button>
                    <p className="text-center text-primary/40 text-xs mt-4">By submitting, you agree to our confidentiality protocols.</p>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;