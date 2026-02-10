import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes rotate-3d {
            0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
            100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); }
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .marble-star {
            font-size: 15rem;
            line-height: 1;
            color: #f20d0d;
            animation: rotate-3d 20s linear infinite;
            transform-style: preserve-3d;
            text-shadow: 
                1px 1px 0 #b30000,
                2px 2px 0 #990000,
                3px 3px 0 #800000,
                4px 4px 0 #660000;
            display: inline-block;
        }
        .team-name-hover {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }
        .team-row:hover .team-name-hover {
            transform: translateX(20px);
        }
        .thumbnail-reveal {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-row:hover .thumbnail-reveal {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row min-h-screen bg-white text-[#181111] font-display overflow-x-hidden selection:bg-primary selection:text-white">
        <Sidebar />
        <main className="flex-1 lg:ml-72 relative flex flex-col w-full pt-12 lg:pt-32">
            <section className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 pb-24 lg:pb-40 flex flex-col items-start justify-end min-h-[40vh]">
                <div className="w-full border-t border-black mb-6"></div>
                <div className="flex flex-col lg:flex-row justify-between w-full items-end gap-12">
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.85] tracking-tighter uppercase max-w-6xl">
                        Architects<br/>
                        <span className="text-primary italic font-light ml-4 md:ml-20">of Influence</span>
                    </h1>
                    <div className="max-w-xs text-sm font-medium uppercase tracking-widest leading-relaxed text-right">
                        <p>Intelligence with Empathy.</p>
                        <p className="text-gray-400 mt-2">Deconstructing the invisible forces that shape society.</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pb-32">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-12 border-b border-black py-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                        <div className="col-span-1">No.</div>
                        <div className="col-span-6 md:col-span-7">Name / Role</div>
                        <div className="col-span-5 md:col-span-4 text-right md:text-left">Expertise</div>
                    </div>

                    {/* Team Member 01 */}
                    <div className="team-row group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 hover:border-primary transition-colors duration-500 items-center cursor-pointer">
                        <div className="hidden md:block col-span-1 text-sm font-mono text-gray-300">01</div>
                        <div className="col-span-7 relative z-10">
                            <h2 className="team-name-hover text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none uppercase tracking-tight mix-blend-multiply">Dr. Aris Thorne</h2>
                            <p className="text-black font-medium text-sm md:text-base tracking-[0.2em] uppercase mt-2 ml-1 md:ml-2">Lead Philosopher</p>
                        </div>
                        <div className="col-span-4 hidden md:flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-widest">Ethics & Logic</span>
                            <div className="thumbnail-reveal absolute right-0 top-1/2 -translate-y-1/2 w-48 h-64 overflow-hidden shadow-2xl z-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img alt="Portrait of Dr. Aris Thorne" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKuKPr923UuAbI3cMauFTbjgJ3U3Oa5qMQGBtrX5fC9d7-4i4Ash-ZyTEY3CVOv-x5UxgRWup-z-Tif67HAZov-NheDQC4Hdl3D9NUmn1OLxybB6Mv1qVXWkF-Hfcmm-KPw4SpRILZobZPj7vJmPs_bItLUhlloooe5uYvkcFQHCr-_nPzwkttuNubaR_JpInHqK_rWmlnZwjtJUxo7Tje7lSamR8eh6zHBksqk1gHKRQUbZttJja4uceXDUh63aCvujgUCpRGxMQA"/>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 02 */}
                    <div className="team-row group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 hover:border-primary transition-colors duration-500 items-center cursor-pointer">
                        <div className="hidden md:block col-span-1 text-sm font-mono text-gray-300">02</div>
                        <div className="col-span-7 relative z-10">
                            <h2 className="team-name-hover text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none uppercase tracking-tight mix-blend-multiply">Elena Vosh</h2>
                            <p className="text-black font-medium text-sm md:text-base tracking-[0.2em] uppercase mt-2 ml-1 md:ml-2">Chief Architect</p>
                        </div>
                        <div className="col-span-4 hidden md:flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-widest">Spatial Theory</span>
                            <div className="thumbnail-reveal absolute right-12 top-1/2 -translate-y-1/2 w-48 h-64 overflow-hidden shadow-2xl z-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img alt="Portrait of Elena Vosh" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcFMaWZLVEhcYlgm4STG3qZfulriwdVSdOZ2HJf1xdL2r7390hOVaPKi2Zfuadm4KvpWvVEy8PCYUM4Pxx5YOO2t4yVQozmvCIiuntL00a6hWURNxTbH72H9UGLM2DV7qQnZD4loi8667WH7C7p7ANy-cypu8bxOQqBMwtCbNtKwJ8IDt6IEcw_6ljKyyUAWajM4aSIzyCRKJKj6VEOLEgidxXHEcWCn8WPICZZ04sId16zTutDQ9Q4BBGZhtyaOSJqEf7ZFn4dw0r"/>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 03 */}
                    <div className="team-row group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 hover:border-primary transition-colors duration-500 items-center cursor-pointer">
                        <div className="hidden md:block col-span-1 text-sm font-mono text-gray-300">03</div>
                        <div className="col-span-7 relative z-10">
                            <h2 className="team-name-hover text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none uppercase tracking-tight mix-blend-multiply">Marcus Kane</h2>
                            <p className="text-black font-medium text-sm md:text-base tracking-[0.2em] uppercase mt-2 ml-1 md:ml-2">Strategy Director</p>
                        </div>
                        <div className="col-span-4 hidden md:flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-widest">Global Markets</span>
                            <div className="thumbnail-reveal absolute right-24 top-1/2 -translate-y-1/2 w-48 h-64 overflow-hidden shadow-2xl z-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img alt="Portrait of Marcus Kane" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArTuXRQznhJgU1plTIjhDSKGEqoBiL6PKdAJhE_TmOXfnl6ARf-VJ8aBMgpHdioWFBZ1zjXSmHA4JIoCZmYedeoMF4YunX67UXdc3NQZqIlPzDgBawVFTqmPMLAzTUCeuczZhKq-TH9jjlECMkwvECfsBPs0AUlnSPbVqgmry3PpJ0QPNoc-05NpSfo9xrFeJkzEvZaFTxL6eU6yJM1cepopVqRs5BKAYG1A65viM4QtXnh8eGJQXGtgEIZpU4onQMKAogi-Q3WOT0"/>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 04 */}
                    <div className="team-row group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 hover:border-primary transition-colors duration-500 items-center cursor-pointer">
                        <div className="hidden md:block col-span-1 text-sm font-mono text-gray-300">04</div>
                        <div className="col-span-7 relative z-10">
                            <h2 className="team-name-hover text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none uppercase tracking-tight mix-blend-multiply">Syla Rente</h2>
                            <p className="text-black font-medium text-sm md:text-base tracking-[0.2em] uppercase mt-2 ml-1 md:ml-2">Creative Lead</p>
                        </div>
                        <div className="col-span-4 hidden md:flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-widest">Visual Impact</span>
                            <div className="thumbnail-reveal absolute right-0 top-1/2 -translate-y-1/2 w-48 h-64 overflow-hidden shadow-2xl z-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img alt="Portrait of Syla Rente" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-cSuzBVuz5abPQOVyI8gvjihW-1JYJTGBpySd9Hao7z1mCHJyL_xTWrX_5sHP1tVRz2CU92cNr6FRx4O3sjRFxC8rbQz-fi02A8ueBo_YWDZPBC4BmtzQqr5rz4e8nX4Tdgip4ipAAVh16UNr2rmH5GpLr1msrGyyN0g6z1GChs6BimlhlfHdkiyH6CFuN_fZmRZcTJToE9d19XrN9cDRncGUwjhfmBk1MBdnqyEBEBGzcBq4fwj-gH7nwW3feZu_hxOMjzID_WE"/>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 05 */}
                    <div className="team-row group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-200 hover:border-primary transition-colors duration-500 items-center cursor-pointer">
                        <div className="hidden md:block col-span-1 text-sm font-mono text-gray-300">05</div>
                        <div className="col-span-7 relative z-10">
                            <h2 className="team-name-hover text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none uppercase tracking-tight mix-blend-multiply">Julian Reed</h2>
                            <p className="text-black font-medium text-sm md:text-base tracking-[0.2em] uppercase mt-2 ml-1 md:ml-2">Data Scientist</p>
                        </div>
                        <div className="col-span-4 hidden md:flex items-center justify-between">
                            <span className="text-sm font-bold uppercase tracking-widest">Predictive Models</span>
                            <div className="thumbnail-reveal absolute right-32 top-1/2 -translate-y-1/2 w-48 h-64 overflow-hidden shadow-2xl z-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img alt="Portrait of Julian Reed" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCrRdbFlXf3UUJ4hwWcJ3KdWoF8PJIzE3PY8RQTSenbbYyy3XxuQwhVbBgAxwdeGbLXpn-3nVE61DeJT5aMNdP9OMvKh5YJ0qa7R_Ob9lHp1TbqyF9I1LdCDIeASysZ7hgulW1Du6LstPtsHeqQB4jbvEbcH6-fwBLrIuKaEdCWFVqPfMbFKxTcSedQnAT-CVMNL5By7AVgVc5d6rTFqHDdJL9-ScSy17EiDTyU6fS8id3KLCqf37uejoIFpIRmL8oHEs96homY6rI"/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full bg-white text-primary border-y border-black py-4 overflow-hidden">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="animate-marquee flex items-center gap-24 text-sm font-bold uppercase tracking-[0.3em] px-6">
                        <span>Service-driven</span>
                        <span>Polite</span>
                        <span>Accessible</span>
                        <span>No Ego</span>
                        <span>Pure Impact</span>
                        <span>Service-driven</span>
                        <span>Polite</span>
                        <span>Accessible</span>
                        <span>No Ego</span>
                        <span>Pure Impact</span>
                        <span>Service-driven</span>
                        <span>Polite</span>
                        <span>Accessible</span>
                        <span>No Ego</span>
                        <span>Pure Impact</span>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-40 px-6 lg:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <span className="material-symbols-outlined text-[40rem] text-black">emergency</span>
                </div>
                <div className="max-w-4xl flex flex-col items-center gap-12 z-10">
                    <div className="perspective-1000">
                        <div className="marble-star">*</div>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                        Join Our<br/>
                        <span className="text-primary">Network</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-lg mx-auto font-light">
                        Influence is an architectural discipline.
                    </p>
                    <button className="relative group mt-8 overflow-hidden">
                        <span className="relative z-10 text-xl font-bold uppercase tracking-[0.3em] border-b-2 border-primary pb-2 group-hover:text-primary transition-colors">Apply Now</span>
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>
                </div>
            </section>

            <Footer />
        </main>
      </div>
    </>
  );
};

export default TeamPage;