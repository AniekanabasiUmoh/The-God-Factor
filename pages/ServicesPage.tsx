import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';

const ServicesPage: React.FC = () => {
  const { openModal } = useModal();

  return (
    <>
      <style>{`
        .sculptural-card {
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .sculptural-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 30px 60px -15px rgba(139, 0, 0, 0.15);
        }
        .catalog-line::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 1px;
            background-color: #b30000;
            transition: width 0.4s ease;
        }
        .group:hover .catalog-line::after {
            width: 100%;
        }
      `}</style>
      
      {/* Main App Shell Layout with Sidebar */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-background-light dark:bg-background-dark text-[#181111] dark:text-[#f0f0f0] font-body antialiased selection:bg-primary selection:text-white">
        <Sidebar />

        <main className="flex-1 lg:ml-72 relative flex flex-col w-full">
          <div className="flex-grow w-full max-w-[1600px] mx-auto px-6 md:px-16 py-12">
            
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center gap-8 mb-24 pt-12 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
              <h1 className="font-serif text-primary dark:text-red-600 text-6xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase mix-blend-multiply dark:mix-blend-normal">
                  Intelligence<br/>In Action
              </h1>
              <p className="font-display text-gray-600 dark:text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-xl mt-6 uppercase border-t border-primary pt-6">
                  Deconstructing narratives. Sculpting strategy.
              </p>
            </section>

            {/* Filters */}
            <section className="flex justify-center mb-20">
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                <button className="text-sm font-serif italic text-primary border-b border-primary pb-1">All Sculptures</button>
                <button className="text-sm font-serif text-gray-400 hover:text-primary transition-colors pb-1">Political</button>
                <button className="text-sm font-serif text-gray-400 hover:text-primary transition-colors pb-1">Corporate</button>
                <button className="text-sm font-serif text-gray-400 hover:text-primary transition-colors pb-1">Cultural</button>
                <button className="text-sm font-serif text-gray-400 hover:text-primary transition-colors pb-1">Environmental</button>
              </div>
            </section>

            <div className="flex flex-col xl:flex-row gap-20">
              {/* Main Content Column */}
              <div className="xl:w-3/4 w-full flex flex-col gap-24">
                
                {/* Card 1 */}
                <article className="sculptural-card group relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-[#0f0303] shadow-sculpture overflow-hidden rounded-sm">
                  <div className="relative h-[500px] md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img alt="Abstract red fluid art resembling a sculpted hand" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MZjqqHCD-3yaM36DvT7mFdQ1tgd5dEGqB5Wk9dc5LdVSrb0D3EiRdgLpiklqTaYHjsmmpHw9KENw-al1fhtiLVPTO5oQ-LN4yoaNG4qC_vZvtAwaTmYmlzz72SESSgm6gYGgXenapjnJKkCL7pymNqC53Z3T_6JencVt0ubT-sHzRFdqbvqjWVkkyCG-3bHHmT12RZSWGlT5nVXvquri_oA3_SxfLjkt_H1FHNaR1A9s8cQLDOMx0j76oMseOIyjULKxiWvuoT54"/>
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-between border-l border-stone-100 dark:border-white/5 bg-off-white dark:bg-transparent relative">
                    <div className="absolute top-6 right-6 text-primary/20 text-9xl font-serif font-black leading-none -z-10 select-none">01</div>
                    <div>
                      <span className="inline-block py-1 px-3 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Cultural Pivot</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white leading-tight mb-6">
                          The Gallery<br/>Reimagined
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed mb-8">
                          For Museum Z, we sculpted a digital-first narrative, transforming the static gallery space into a fluid, interactive dialogue with the audience. The "Hand of the Artist" became our central motif.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 group/btn cursor-pointer">
                      <div className="h-px w-12 bg-primary transition-all duration-300 group-hover/btn:w-20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">View Dossier</span>
                    </div>
                  </div>
                </article>

                {/* Card 2 */}
                <article className="sculptural-card group relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-[#0f0303] shadow-sculpture overflow-hidden md:flex-row-reverse rounded-sm">
                  <div className="p-12 md:p-16 flex flex-col justify-between border-r border-stone-100 dark:border-white/5 bg-off-white dark:bg-transparent relative order-2 md:order-1">
                    <div className="absolute top-6 left-6 text-primary/20 text-9xl font-serif font-black leading-none -z-10 select-none">02</div>
                    <div>
                      <span className="inline-block py-1 px-3 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Corporate Defense</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white leading-tight mb-6">
                          The Shield of<br/>Integrity
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed mb-8">
                          Restructuring public perception for Entity X following a data breach. We built a narrative shield, turning vulnerability into a display of radical transparency and strength.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 group/btn cursor-pointer">
                      <div className="h-px w-12 bg-primary transition-all duration-300 group-hover/btn:w-20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">View Dossier</span>
                    </div>
                  </div>
                  <div className="relative h-[500px] md:h-auto overflow-hidden order-1 md:order-2">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img alt="Red geometric shape resembling a shield" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeyIySv0gZ0WlYXncC8XgQ3T16zjhiK2ToJC7mphx1Ht9pqaiF1YhopYE8LMgQCLWx9Lx16vx1-4SowjXUX3eRlyxZPehTtABqYDFaYv35gVm-E_mo4Z7fVrFiZCHtJgf-h_2YGRDaOM9vsTQrmV6HNHD34W4xMAzjaMvc0GWKy9P_si3S9cvK74rADG4hsRvSuueLUvvMDBxTmyM9kUMVBuDGPOmSKkPGNUFeJYbMnsqjKHRpF7mqF9tYUsnhbx9C9IFPmeFSuCMn"/>
                  </div>
                </article>

                {/* Card 3 */}
                <article className="sculptural-card group relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-[#0f0303] shadow-sculpture overflow-hidden rounded-sm">
                  <div className="relative h-[500px] md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img alt="Sharp red architectural lines" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfYSKozHNfRT_BtsTEavqEffmGNHtpH3r41JJ8T_OnF0JxRHBssG29h8vLq0FULU4R_yvXFTgqxiTRdw9hPcnlVIY4m9taJoxl4vLYdHtiJnnW6bIWqVUpbM8LXRLTHwfJd8pue3srOedaRiKf_CzU3Lpc3CRFz1RFEUXZqbWoiW3L7c4vKHcEBRYbhR0YvxbZgciKj_N9tGOA_uH99TxPj5Dj2noYljtsJzJ1YPPu07O7JQuNJGv5IziTAXiVSfWqHqh9o59Gr3Mh"/>
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-between border-l border-stone-100 dark:border-white/5 bg-off-white dark:bg-transparent relative">
                    <div className="absolute top-6 right-6 text-primary/20 text-9xl font-serif font-black leading-none -z-10 select-none">03</div>
                    <div>
                      <span className="inline-block py-1 px-3 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Heritage</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white leading-tight mb-6">
                          Reclaiming<br/>The Narrative
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed mb-8">
                          For Brand Y, we didn't just tell a story; we built a monument. An avant-garde approach to heritage that positioned the brand as a timeless architectural feat.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 group/btn cursor-pointer">
                      <div className="h-px w-12 bg-primary transition-all duration-300 group-hover/btn:w-20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">View Dossier</span>
                    </div>
                  </div>
                </article>

                {/* Card 4 */}
                <article className="sculptural-card group relative grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-[#0f0303] shadow-sculpture overflow-hidden md:flex-row-reverse rounded-sm">
                  <div className="p-12 md:p-16 flex flex-col justify-between border-r border-stone-100 dark:border-white/5 bg-off-white dark:bg-transparent relative order-2 md:order-1">
                    <div className="absolute top-6 left-6 text-primary/20 text-9xl font-serif font-black leading-none -z-10 select-none">04</div>
                    <div>
                      <span className="inline-block py-1 px-3 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest mb-6">Political</span>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white leading-tight mb-6">
                          Sentiment<br/>Modeling
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed mb-8">
                          Analyzing the unseen currents of voter sentiment. Our predictive modeling acts as a seismograph for political shifts in swing states.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 group/btn cursor-pointer">
                      <div className="h-px w-12 bg-primary transition-all duration-300 group-hover/btn:w-20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">View Dossier</span>
                    </div>
                  </div>
                  <div className="relative h-[500px] md:h-auto overflow-hidden order-1 md:order-2">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                    <img alt="Blurred red lights" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIWr0UHMM_dAPgTuLpcSf11vynntghYHVXJMJvNHfpd0ctJYGD6DhSCMzuUuHevYd0S1gZqaaQUFDQLzzjKX_i0k6OTC-17YwPY0LWoOwW9-uaMhloG4rV8uJtnQS-REDbFI_HbjdXlSicU68TS9QcsqU7olN38FNKFEtXzWzfEvAhzClsqXtfKiu7L57JXEB3bF33Ad_VXtvH804n3vnTXWIs_CXZyI4WG7j1wZgcGPeGboHXkzamC0OC_FbJR3RplCT3sKoKOV74"/>
                  </div>
                </article>
              </div>

              {/* Sidebar Column */}
              <aside className="xl:w-1/4 relative">
                <div className="sticky top-32">
                  <div className="flex items-center justify-between border-b-2 border-primary pb-4 mb-8">
                    <h2 className="font-serif text-3xl italic text-black dark:text-white">Catalog</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Vol. IV</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="group py-6 border-b border-gray-200 dark:border-gray-800 relative cursor-pointer">
                      <div className="catalog-line w-full h-full absolute inset-0"></div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-mono text-gray-400">NO. 842</span>
                        <span className="text-xs font-bold uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                      </div>
                      <h3 className="font-serif text-xl text-black dark:text-white leading-tight mb-2 group-hover:italic transition-all">The Art of the Pivot</h3>
                      <p className="text-xs text-gray-500 font-display uppercase tracking-wide">Media Strategy • 2024</p>
                    </div>
                    <div className="group py-6 border-b border-gray-200 dark:border-gray-800 relative cursor-pointer">
                      <div className="catalog-line w-full h-full absolute inset-0"></div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-mono text-gray-400">NO. 841</span>
                        <span className="text-xs font-bold uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                      </div>
                      <h3 className="font-serif text-xl text-black dark:text-white leading-tight mb-2 group-hover:italic transition-all">Consultancy as Performance Art</h3>
                      <p className="text-xs text-gray-500 font-display uppercase tracking-wide">Corporate • 2023</p>
                    </div>
                    <div className="group py-6 border-b border-gray-200 dark:border-gray-800 relative cursor-pointer">
                      <div className="catalog-line w-full h-full absolute inset-0"></div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-mono text-gray-400">NO. 840</span>
                        <span className="text-xs font-bold uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                      </div>
                      <h3 className="font-serif text-xl text-black dark:text-white leading-tight mb-2 group-hover:italic transition-all">Silence is Loud</h3>
                      <p className="text-xs text-gray-500 font-display uppercase tracking-wide">PR Strategy • 2023</p>
                    </div>
                    <div className="group py-6 border-b border-gray-200 dark:border-gray-800 relative cursor-pointer">
                      <div className="catalog-line w-full h-full absolute inset-0"></div>
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-mono text-gray-400">NO. 839</span>
                        <span className="text-xs font-bold uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                      </div>
                      <h3 className="font-serif text-xl text-black dark:text-white leading-tight mb-2 group-hover:italic transition-all">Greenwashing Defense</h3>
                      <p className="text-xs text-gray-500 font-display uppercase tracking-wide">Environmental • 2023</p>
                    </div>
                  </div>
                  <div className="mt-12 bg-stone-50 dark:bg-white/5 p-8 border border-stone-200 dark:border-white/10">
                    <span className="material-symbols-outlined text-primary mb-4 text-3xl">mark_email_unread</span>
                    <h4 className="font-serif text-lg italic mb-4 text-black dark:text-white">Receive the Intelligence Dossier</h4>
                    <div className="relative">
                      <input className="w-full bg-transparent border-b border-black dark:border-white py-2 text-sm focus:outline-none focus:border-primary placeholder-gray-400" placeholder="EMAIL ADDRESS" type="email"/>
                      <button className="absolute right-0 top-2 text-primary font-bold text-xs uppercase hover:text-black dark:hover:text-white transition-colors">Submit</button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default ServicesPage;