import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { GoogleGenAI } from "@google/genai";

const ContactModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    org: '',
    focus: '',
    time: '10:00 AM',
    situation: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseResult, setResponseResult] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Handle the select specifically since it might map differently or use id
    if (id === 'objective') {
        setFormData(prev => ({ ...prev, focus: value }));
    } else if (id) {
        setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData(prev => ({ ...prev, time: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: `Client Profile:
Name: ${formData.name}
Role: ${formData.role}
Organization: ${formData.org}
Strategic Focus: ${formData.focus}
Time Preference: ${formData.time}
Situation: ${formData.situation}

Task: Generate a high-level strategic dossier and initial analysis based on the situation.`,
            config: {
                systemInstruction: "You are 'The God Factor', an elite strategic consultancy. Tone: Enigmatic, authoritative, precise, and high-impact. Provide a structured response with: 1. Assessment, 2. Strategic Vector, 3. Immediate Action.",
            }
        });
        setResponseResult(response.text || "No intelligence generated.");
    } catch (error) {
        console.error(error);
        setResponseResult("Connection to strategic intelligence failed. Please check your credentials or try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
        {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full h-full md:w-[90vw] md:h-[90vh] bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button Mobile */}
        <button 
            onClick={closeModal}
            className="md:hidden absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
        >
            <span className="material-symbols-outlined text-primary">close</span>
        </button>

        {/* Left Side - Red Brand Panel */}
        <div className="w-full md:w-5/12 bg-primary relative p-8 md:p-12 flex flex-col justify-between overflow-hidden shrink-0">
            {/* Grid Background */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="font-bold tracking-widest uppercase text-sm">The God Factor</span>
            </div>

            {/* Central Image */}
            <div className="relative z-10 flex-1 flex items-center justify-center my-8">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-zinc-900 overflow-hidden shadow-2xl grayscale contrast-125">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8MUPDVAGIbP7UjQ7QmXfiO5n1HOqp3kq6s_LJFO0yi2YvjDApXLaU1IVnfd3w1J6533Bc17s0NZ0WIOMC-c3MKr_qV-u6_n0i369VluMq9DN11C7qC4D51Nh9-uORrLXfu9dbEItoxWqNvLPiZuMK2gGJ_IsU8jjFu64hAzuoQQon8fgLU8Oh3p0bBjuF4JP8mIE_jm4TtcvbnwFu7yFq8tWGUmQZ1cJnkEUXtIvnaokqjLjh9aZrOxn5r9WbYinrs8L4CSums71m" 
                        alt="Stone Head" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Footer Text */}
            <div className="relative z-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Strategy begins<br/>with a conversation.
                </h2>
                <p className="text-white/80 font-light text-lg">
                    Let us refine your raw ideas.
                </p>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 bg-white relative flex flex-col h-full overflow-y-auto">
            {/* Close Button Desktop */}
            <button 
                onClick={closeModal}
                className="hidden md:flex absolute top-8 right-8 w-12 h-12 border border-zinc-200 hover:border-primary rounded-full items-center justify-center transition-colors group"
            >
                <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary">close</span>
            </button>

            <div className="max-w-2xl mx-auto w-full p-8 md:p-16 flex-1">
                {responseResult ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Strategic Dossier</h3>
                            <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-primary"></div>
                            </div>
                        </div>
                        <div className="prose prose-sm md:prose-base font-serif bg-zinc-50 p-8 border-l-4 border-primary">
                            <pre className="whitespace-pre-wrap font-sans text-sm text-zinc-700 leading-relaxed">{responseResult}</pre>
                        </div>
                        <button 
                            onClick={() => setResponseResult(null)} 
                            className="mt-8 text-xs font-bold uppercase tracking-widest text-primary hover:text-black transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">arrow_back</span> New Inquiry
                        </button>
                    </div>
                ) : (
                <>
                {/* Progress Header */}
                <div className="mb-12">
                    <div className="flex justify-between items-end mb-4">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Sculpting Your Strategy</h3>
                        <span className="text-xs text-primary font-medium">Step 1 of 3</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-primary"></div>
                    </div>
                </div>

                <form className="space-y-12" onSubmit={handleSubmit}>
                    {/* Step 1: Identity */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary font-bold text-sm bg-primary/5">1</span>
                            <h4 className="text-xl font-bold text-black uppercase tracking-tight">Identity</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Full Name</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-4 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors placeholder-zinc-300 text-sm" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Current Role</label>
                                <input type="text" id="role" value={formData.role} onChange={handleChange} placeholder="e.g. Director" className="w-full p-4 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors placeholder-zinc-300 text-sm" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Organization</label>
                            <input type="text" id="org" value={formData.org} onChange={handleChange} placeholder="Company or Institution Name" className="w-full p-4 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors placeholder-zinc-300 text-sm" required />
                        </div>
                    </div>

                    <hr className="border-zinc-100" />

                    {/* Step 2: The Objective */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary font-bold text-sm bg-primary/5">2</span>
                            <h4 className="text-xl font-bold text-black uppercase tracking-tight">The Objective</h4>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Primary Focus</label>
                            <div className="relative">
                                <select id="objective" value={formData.focus} onChange={handleChange} className="w-full p-4 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors text-sm appearance-none cursor-pointer text-zinc-700">
                                    <option value="">Select a strategic focus...</option>
                                    <option value="Brand Strategy">Brand Strategy</option>
                                    <option value="Crisis Management">Crisis Management</option>
                                    <option value="Art Consultancy">Art Consultancy</option>
                                    <option value="Political Communication">Political Communication</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                    </div>

                    <hr className="border-zinc-100" />

                    {/* Step 3: Logistics */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary font-bold text-sm bg-primary/5">3</span>
                            <h4 className="text-xl font-bold text-black uppercase tracking-tight">Logistics</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest flex justify-between">
                                        Preferred Date
                                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    </label>
                                    <div className="border border-zinc-200 p-4 rounded-sm">
                                        {/* Simple Calendar Mockup */}
                                        <div className="grid grid-cols-7 gap-2 text-center text-xs text-zinc-400 mb-2">
                                            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                                            <span className="text-zinc-300">28</span>
                                            <span className="text-zinc-300">29</span>
                                            <span className="text-zinc-300">30</span>
                                            <span>1</span>
                                            <span>2</span>
                                            <span className="bg-primary text-white rounded w-6 h-6 flex items-center justify-center mx-auto">3</span>
                                            <span>4</span>
                                        </div>
                                    </div>
                                </div>
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Time</label>
                                    <div className="relative">
                                        <select value={formData.time} onChange={handleTimeChange} className="w-full p-3 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors text-sm appearance-none cursor-pointer font-bold">
                                            <option>10:00 AM</option>
                                            <option>02:00 PM</option>
                                            <option>04:00 PM</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-sm">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">The Situation</label>
                                <textarea 
                                    id="situation"
                                    value={formData.situation}
                                    onChange={handleChange}
                                    className="w-full h-full min-h-[160px] p-4 bg-white border border-zinc-200 focus:border-primary outline-none transition-colors placeholder-zinc-300 text-sm resize-none"
                                    placeholder="Briefly describe the context..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button type="submit" disabled={loading} className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors shadow-xl disabled:opacity-70 disabled:cursor-wait">
                            {loading ? "Analyzing..." : "Submit Request"}
                        </button>
                    </div>
                </form>
                </>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;