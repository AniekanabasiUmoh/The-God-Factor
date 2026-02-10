import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 text-black dark:text-white py-12 px-6 md:px-12 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1920px] mx-auto">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-lg font-bold tracking-widest uppercase mb-4">The God Factor</h2>
                <p className="text-xs text-zinc-500 font-medium max-w-xs uppercase leading-relaxed">
                    Art & Influence.<br/>
                    London • New York • Zurich
                </p>
            </div>
            <div>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Connect</h4>
                <div className="flex flex-col gap-2 text-xs text-zinc-500 uppercase font-medium">
                    <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                </div>
            </div>
             <div>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Coordinates</h4>
                <p className="text-xs text-zinc-500 uppercase leading-relaxed font-medium">
                    14 Wharf Road<br/>London, N1 7RW
                </p>
                 <p className="text-[10px] text-zinc-400 mt-4">
                    © 2024 The God Factor
                 </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;