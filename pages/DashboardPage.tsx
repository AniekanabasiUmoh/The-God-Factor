import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f9f9f9] text-[#1a1a1a] font-display">
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <header className="bg-white border-b border-zinc-100 px-6 lg:px-12 py-6 flex flex-wrap justify-between items-center gap-4">
            <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Client Briefing v4.0</span>
                <h2 className="text-xl font-serif font-bold mt-1">Strategic Impact Dashboard</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="text-right">
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Market Presence</p>
                    <p className="text-sm font-bold text-green-600">+14.2% YoY</p>
                </div>
                <div className="w-px h-8 bg-zinc-200"></div>
                <div className="text-right">
                     <p className="text-[10px] text-zinc-400 uppercase font-bold">Crisis Recovery</p>
                    <p className="text-sm font-bold">98.4% Efficiency</p>
                </div>
            </div>
        </header>

        <section className="p-6 lg:p-12 flex-grow">
            <div className="mb-8">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">The Mission</h3>
                <div className="bg-white border border-zinc-100 p-8 lg:p-12 rounded-sm shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-105">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB29F8ozYzjpSlhIr1RskkLpIhiuKlGvgZU2v4rZxe6BE5tKdOpZx5_uk5bpWZMU1Cd8bbDNvgZymw2UzhgU1-CkDWzjzxdwG5hwVE36uX473IDL2TqrbLEnTrjw8A1RAy0cZPkpmUSQ-UFL8pinEmv_UmEk3VmIIDQN5j5JHZtX21fVctK3ChF4YB7Hgc5zIYdsSRnJ7Y12lwvYkS9eIy5Y4P9b_iVY5nefMQTje3WPPQXj2LoAHC8i1ECYY1ehjON3SflxeGTl9k7" className="w-full h-full object-cover grayscale" alt="Texture"/>
                     </div>
                     <div className="relative z-10 max-w-3xl">
                        <h4 className="text-4xl lg:text-5xl font-serif font-bold text-black leading-[1.1] mb-6">
                            We Architect <span className="text-primary italic">Permanence</span> in a Volatile Attention Economy.
                        </h4>
                        <p className="text-lg text-zinc-600 font-serif leading-relaxed mb-8">
                             The God Factor isn't just a consultancy; it's a strategic foundry. We convert reputational risk into structural dominance through elite communication and avant-garde positioning.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border-l-2 border-primary pl-4">
                                <span className="block text-2xl font-bold font-serif">Defend.</span>
                                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Crisis Mitigation</span>
                            </div>
                             <div className="border-l-2 border-primary pl-4">
                                <span className="block text-2xl font-bold font-serif">Project.</span>
                                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Influence Design</span>
                            </div>
                             <div className="border-l-2 border-primary pl-4">
                                <span className="block text-2xl font-bold font-serif">Endure.</span>
                                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Legacy Archiving</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                     <div>
                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Service Architecture</h3>
                        <h4 className="text-3xl font-serif font-bold text-black">Strategic Capabilities</h4>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <button className="px-4 py-1.5 border border-primary bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-full">All Solutions</button>
                        <button className="px-4 py-1.5 border border-zinc-200 bg-white text-zinc-600 hover:border-primary text-xs font-bold tracking-widest uppercase rounded-full transition-colors">Protection</button>
                        <button className="px-4 py-1.5 border border-zinc-200 bg-white text-zinc-600 hover:border-primary text-xs font-bold tracking-widest uppercase rounded-full transition-colors">Growth</button>
                        <button className="px-4 py-1.5 border border-zinc-200 bg-white text-zinc-600 hover:border-primary text-xs font-bold tracking-widest uppercase rounded-full transition-colors">Legacy</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Capability Card 1 */}
                    <div className="group bg-white border border-zinc-100 p-8 hover:shadow-lg transition-all border-l-4 border-l-primary flex flex-col justify-between min-h-[220px]">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h5 className="text-xl font-bold font-serif text-black group-hover:text-primary transition-colors">Crisis Architecture</h5>
                                <span className="material-symbols-outlined text-zinc-300">shield</span>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                Immediate narrative stabilization for high-stakes volatility. Defensive positioning that solidifies under pressure.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="text-[11px] font-bold text-primary flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 2-HOUR RESPONSE READINESS
                                </li>
                                <li className="text-[11px] font-bold text-primary flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> ADVERSARIAL NARRATIVE DEFENSE
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                            Review Outcome Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>

                    {/* Capability Card 2 */}
                    <div className="group bg-white border border-zinc-100 p-8 hover:shadow-lg transition-all border-l-4 border-l-zinc-300 hover:border-l-primary flex flex-col justify-between min-h-[220px]">
                         <div>
                            <div className="flex justify-between items-start mb-4">
                                <h5 className="text-xl font-bold font-serif text-black group-hover:text-primary transition-colors">Strategic Alchemy</h5>
                                <span className="material-symbols-outlined text-zinc-300">transform</span>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                Converting raw corporate vision into premium market dominance. Structural alignment for elite executives.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> POSITIONING OPTIMIZATION
                                </li>
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> HIGH-NET-WORTH NETWORK BRIDGE
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                             View Roadmap <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>

                     {/* Capability Card 3 */}
                    <div className="group bg-white border border-zinc-100 p-8 hover:shadow-lg transition-all border-l-4 border-l-zinc-300 hover:border-l-primary flex flex-col justify-between min-h-[220px]">
                         <div>
                            <div className="flex justify-between items-start mb-4">
                                <h5 className="text-xl font-bold font-serif text-black group-hover:text-primary transition-colors">Public Resonance</h5>
                                <span className="material-symbols-outlined text-zinc-300">campaign</span>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                Cultural engineering to amplify voice and presence. We ensure your message echoes through key demographics.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> SELECTIVE MEDIA PLACEMENT
                                </li>
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> CULTURAL IMPACT METRICS
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                             Impact Case Studies <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>

                     {/* Capability Card 4 */}
                    <div className="group bg-white border border-zinc-100 p-8 hover:shadow-lg transition-all border-l-4 border-l-zinc-300 hover:border-l-primary flex flex-col justify-between min-h-[220px]">
                         <div>
                            <div className="flex justify-between items-start mb-4">
                                <h5 className="text-xl font-bold font-serif text-black group-hover:text-primary transition-colors">Digital Monuments</h5>
                                <span className="material-symbols-outlined text-zinc-300">foundation</span>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                Permanent, imposing digital legacies. Constructing a search-resilient presence that outlasts trends.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> SEO REPUTATION FORTRESS
                                </li>
                                <li className="text-[11px] font-bold text-zinc-600 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span> ALGORITHMIC DOMINANCE
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                             Legacy Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-black text-white p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-vkbrNX3qk6YktaAy7mrMeCTXTlA3Ko93HTJwfxbc7Ta0g1eBSpHNJgy05CFHG9yF3ou0cpd-jARCxXxIhgi_52SDoYpFFYrar6Dr9-EsvqQPQo4BE2RGRB8a2kT0zz_k5Hf3WAmneQbswwsZOolB7HGA9lQkHSpFazIZ3IQs5S8xjLuy0yb8W4BCM2J0U9aO7aV1VJ6YebpKCDirZ9r0yA4DbLhhHe8BkHivRkdFcZlSxdA-M2cmilaqoyN53SL5iB-75HG7ZWWS" className="w-full h-full object-cover grayscale" alt="Curator"/>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Executive Advisory is Now Open.</h2>
                    <p className="text-zinc-400 font-serif italic text-lg mb-0 leading-relaxed">
                        Access the private gallery of strategic influence. Commission your reputation architecture today.
                    </p>
                </div>
                <div className="shrink-0">
                    <button className="bg-primary text-white px-12 py-6 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-2xl">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default DashboardPage;