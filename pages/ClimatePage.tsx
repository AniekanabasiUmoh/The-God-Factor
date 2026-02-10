import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const ClimatePage: React.FC = () => {
  return (
    <>
      <style>{`
        .sculptural-text {
            -webkit-text-stroke: 1px #181111;
            color: transparent;
        }
        .text-stroke-red {
             -webkit-text-stroke: 1px #f20d0d;
             color: transparent;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-[#0a0505] text-[#181111] dark:text-white font-news overflow-x-hidden selection:bg-primary selection:text-white">
        <Sidebar />
        <main className="flex-1 lg:ml-72 relative min-h-screen flex flex-col">
          
          {/* Hero Section */}
          <header className="relative pt-20 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-[1440px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col gap-8 z-10">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-primary"></div>
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Corporate Avant-Garde</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light italic leading-[0.9] tracking-tight">
                        The Art of <br/>
                        <span className="font-bold text-primary not-italic">Urgent Change</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#5a4a4a] dark:text-gray-300 max-w-lg leading-relaxed font-light">
                        Corporate advocacy meets sculptural precision. Decoding the climate crisis through high-end strategy and visceral art.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <button className="group flex items-center gap-3 text-lg border-b border-primary pb-1 w-fit hover:opacity-70 transition-opacity">
                            <span className="font-bold">Explore Strategy</span>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Sculptural Visual */}
                <div className="order-1 lg:order-2 relative flex justify-center items-center h-[500px] lg:h-[700px]">
                    {/* Abstract Red Sphere/Planet Representation */}
                    <div className="relative w-full h-full">
                        <div 
                            className="absolute inset-0 bg-cover bg-center rounded-full mix-blend-multiply opacity-90 animate-pulse-slow" 
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8baRznL7XIX9oOqDaLLyOg19zVRCtt_7p3LTsuZDLnOq1LZVAzWcl5wrrSl_qg53WxWeOGD1vvfRIef70pD6N7QnIsjzrBxw7ggs4ubK9A62ACmKbqyIYHPkk96LDeb9T7NnJHyUmJrOH2z9USouxClhDY14SPJjXTOvMfijtcMYxAaUyNNVbOCCjYTryuvL3LmG9WP1IsdcveDhDosNIyIMP3bGaUeotyGcEIUc_JxjuF8zor1BT4PQsPtqLmKu1XpAHR6KzM7PC')",
                                clipPath: "circle(40%)"
                            }}
                        ></div>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-[85%] h-[85%] rounded-full border border-gray-200 dark:border-gray-800 scale-110"></div>
                            <div className="absolute w-[95%] h-[95%] rounded-full border border-gray-100 dark:border-gray-900 scale-125 opacity-50"></div>
                        </div>
                        {/* Floating Data Point */}
                        <div className="absolute top-[20%] right-[10%] bg-white dark:bg-black p-4 shadow-xl border-l-4 border-primary max-w-[200px]">
                            <span className="text-primary text-3xl font-bold block">+1.5°C</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Critical Threshold</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <span className="material-symbols-outlined">arrow_downward</span>
            </div>
          </header>

          {/* Climate Intelligence Section */}
          <section className="py-24 px-6 bg-zinc-50 dark:bg-[#110a0a]">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl font-light mb-4">Climate <span className="font-bold italic">Intelligence</span></h2>
                        <div className="h-1 w-24 bg-primary"></div>
                    </div>
                     <p className="max-w-md text-lg text-[#5a4a4a] dark:text-gray-400 text-right md:text-left">
                        We provide high-level climate intelligence and ESG communication strategies for global leadership.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                     {/* Card 1 */}
                     <div className="group bg-white dark:bg-black p-10 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                             <span className="material-symbols-outlined text-6xl">travel_explore</span>
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                            <div>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">01</span>
                                <h3 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors">Strategic Foresight</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Developing robust frameworks for environmental governance and sustainability beyond compliance.
                                </p>
                            </div>
                             <a href="#" className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                     </div>
                     {/* Card 2 */}
                     <div className="group bg-white dark:bg-black p-10 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                             <span className="material-symbols-outlined text-6xl">crisis_alert</span>
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                            <div>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">02</span>
                                <h3 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors">Crisis Management</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Navigating reputational risks with precise, data-backed communication and sculptural narratives.
                                </p>
                            </div>
                             <a href="#" className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                     </div>
                     {/* Card 3 */}
                     <div className="group bg-white dark:bg-black p-10 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                             <span className="material-symbols-outlined text-6xl">campaign</span>
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                            <div>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">03</span>
                                <h3 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors">Policy Advocacy</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Influencing stakeholder perception through compelling, art-driven narratives that demand attention.
                                </p>
                            </div>
                             <a href="#" className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                     </div>
                </div>
            </div>
          </section>

          {/* Advocacy Storytelling Section */}
          <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Imagery Side */}
                    <div className="lg:col-span-7 relative group">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPEid_ii1rqN1X4H3PN0qKIMH5m6FmKxharcncWCFnNHnUsDqOkOIrwILVYuYYk-D2eU0f9jEmitXli5ncfFMa5NoSAzmrKDoDSKoxPtUe_X5-PH0Z4a7D546A29FuFPkIosMj7fYiOf2I_Xj2tUaM_wa999wsm9fJVj1DmIjVlh4JxE2CK86oY9B_uymVPXKVY0xOuYV85h-_Bp4Q8XagAgYG7iTuZMufBSdeTLXSajB3BUIr7P3BY_DgHjt3dBgGyk5zoVQ111lg" alt="Dramatic black and white landscape of mountains representing nature" className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"/>
                            {/* Red Overlay Data */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="w-full">
                                    <div className="flex items-end gap-2 mb-2">
                                        <div className="h-16 w-4 bg-primary/80"></div>
                                        <div className="h-24 w-4 bg-primary/80"></div>
                                        <div className="h-12 w-4 bg-primary/80"></div>
                                        <div className="h-32 w-4 bg-primary animate-pulse"></div>
                                        <div className="h-20 w-4 bg-primary/80"></div>
                                    </div>
                                    <p className="text-white text-xs uppercase tracking-widest font-bold">Global Emissions Projection</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary z-10 hidden md:block"></div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:col-span-5 flex flex-col gap-8 pl-0 lg:pl-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Advocacy Storytelling</span>
                        <h2 className="text-5xl font-light leading-tight">
                            Visualizing the <br/>
                            <span className="italic font-semibold text-primary">Unseen Impact</span>
                        </h2>
                         <p className="text-xl text-[#5a4a4a] dark:text-gray-300 font-light leading-relaxed">
                            Data alone does not change minds. We transform cold statistics into visceral experiences. Through curated art installations and visual storytelling, we make the abstract threat of climate change undeniably present.
                        </p>
                        <div className="space-y-6 mt-4">
                            <div className="flex items-start gap-4">
                                 <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                 <div>
                                    <h4 className="text-lg font-bold mb-1">Emotive Connection</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Bridging the gap between scientific fact and human feeling.</p>
                                 </div>
                            </div>
                             <div className="flex items-start gap-4">
                                 <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                 <div>
                                    <h4 className="text-lg font-bold mb-1">Corporate Responsibility</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Positioning your brand as a conscious leader in the narrative.</p>
                                 </div>
                            </div>
                        </div>
                         <button className="bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary px-8 py-4 w-fit text-sm font-bold uppercase tracking-widest rounded mt-4 transition-colors">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
          </section>

          {/* Urgent Call to Action / Footer */}
          <section className="bg-[#0a0505] text-white pt-24 pb-12 px-6 border-t-4 border-primary mt-auto">
             <div className="max-w-[1440px] mx-auto">
                 <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                         <h2 className="text-6xl md:text-7xl font-light mb-6">Join the <br/><span className="text-primary font-bold italic">Movement</span></h2>
                         <p className="text-gray-400 text-lg max-w-md">
                            Subscribe to our intelligence briefing. Precise, curated, and urgent updates on the intersection of art and climate policy.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-primary placeholder-gray-600 font-light" />
                                <button type="submit" className="absolute right-0 bottom-4 text-primary hover:text-white transition-colors uppercase text-sm font-bold tracking-widest">
                                    Subscribe
                                </button>
                            </div>
                             <p className="text-xs text-gray-600 mt-2">By subscribing, you agree to our Privacy Policy.</p>
                        </form>
                    </div>
                 </div>
             </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default ClimatePage;