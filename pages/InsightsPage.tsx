import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { sanityClient, urlFor } from '../lib/sanity';

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    excerpt: string;
    publishedAt: string;
    coverImage?: any;
    featured?: boolean;
}

const CATEGORIES = ['All', 'Political', 'Corporate', 'Cultural', 'Environmental'];

const InsightsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      publishedAt,
      coverImage,
      featured
    }`;
        sanityClient.fetch(query)
            .then((data: Post[]) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error('Sanity fetch error:', err);
                setLoading(false);
            });
    }, []);

    const filtered = activeCategory === 'All'
        ? posts
        : posts.filter(p => p.category === activeCategory);

    const featured = filtered.find(p => p.featured) || filtered[0];
    const rest = filtered.filter(p => p._id !== featured?._id);

    const formatDate = (iso: string) => {
        if (!iso) return '';
        return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black font-display selection:bg-primary selection:text-white">
            <Sidebar />
            <main className="flex-1 lg:ml-56 min-h-screen bg-zinc-50 relative flex flex-col">

                <style>{`
          .tech-grid {
            background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 4rem 4rem;
          }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .archive-card-hover { transition: all 0.5s cubic-bezier(0.16,1,0.3,1); }
          .archive-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); }
          .archive-card-hover:hover .card-image { transform: scale(1.03); filter: grayscale(100%); }
        `}</style>

                {/* Filter Bar */}
                <div className="border-b border-zinc-200 bg-white sticky top-0 z-20 flex overflow-x-auto no-scrollbar items-center">
                    <div className="px-6 py-4 border-r border-zinc-200 bg-white text-black flex items-center gap-2 shrink-0">
                        <span className="material-symbols-outlined text-sm text-primary">filter_list</span>
                        <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
                    </div>
                    <div className="flex items-center">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${activeCategory === cat
                                        ? 'text-primary border-b-2 border-primary bg-zinc-50'
                                        : 'text-zinc-400 hover:text-black'
                                    }`}
                            >
                                {cat === 'All' ? 'All Data' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex-1 flex items-center justify-center py-40">
                        <div className="text-center">
                            <span className="material-symbols-outlined text-4xl text-primary animate-spin block mb-4">refresh</span>
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Loading Intelligence Files...</p>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && filtered.length === 0 && (
                    <div className="flex-1 flex items-center justify-center py-40">
                        <div className="text-center max-w-sm">
                            <span className="material-symbols-outlined text-4xl text-zinc-300 block mb-4">article</span>
                            <h3 className="text-xl font-bold mb-2">No Posts Yet</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {activeCategory === 'All'
                                    ? 'Posts published from your Sanity Studio will appear here.'
                                    : `No ${activeCategory} posts published yet.`
                                }
                            </p>
                            <a
                                href={`https://0racsf6r.sanity.studio`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
                            >
                                Open Sanity Studio <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                )}

                {/* Live Posts Grid */}
                {!loading && filtered.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 tech-grid">

                        {/* Featured / First Article */}
                        {featured && (
                            <article className="lg:col-span-2 group relative h-[80vh] bg-white overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 overflow-hidden">
                                    {featured.coverImage ? (
                                        <img
                                            alt={featured.title}
                                            className="card-image h-full w-full object-cover transition-transform duration-700"
                                            src={urlFor(featured.coverImage).width(1600).url()}
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-zinc-900" />
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                <div className="absolute top-6 left-6 z-20 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                                        {featured.category || 'Insight'}
                                    </span>
                                    {featured.featured && (
                                        <span className="bg-primary/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Featured</span>
                                    )}
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <div className="max-w-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="h-px w-8 bg-primary" />
                                            <p className="text-primary font-mono text-xs tracking-widest uppercase">
                                                {formatDate(featured.publishedAt)}
                                            </p>
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tighter mb-6">
                                            {featured.title}
                                        </h3>
                                        {featured.excerpt && (
                                            <p className="text-gray-300 font-body text-base md:text-lg leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                                {featured.excerpt}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </article>
                        )}

                        {/* Remaining Posts */}
                        {rest.map((post) => (
                            <article key={post._id} className="group relative h-[60vh] bg-white overflow-hidden cursor-pointer archive-card-hover">
                                <div className="absolute inset-0 overflow-hidden">
                                    {post.coverImage ? (
                                        <img
                                            alt={post.title}
                                            className="card-image h-full w-full object-cover transition-transform duration-700"
                                            src={urlFor(post.coverImage).width(800).url()}
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-zinc-800" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                <div className="absolute top-6 left-6 z-20">
                                    <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                                        {post.category || 'Insight'}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                                    <p className="text-primary font-mono text-xs mb-2 tracking-widest uppercase">
                                        {formatDate(post.publishedAt)}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white uppercase leading-none tracking-tight mb-4 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    {post.excerpt && (
                                        <p className="text-gray-300 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {post.excerpt}
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}

                    </div>
                )}

                <Footer />
            </main>
        </div>
    );
};

export default InsightsPage;