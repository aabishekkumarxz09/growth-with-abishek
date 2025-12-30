import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: '',
    message: '',
    botcheck: '' // Honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Defensive JSON parsing
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        throw new Error("Invalid server response format");
      }

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', website: '', service: '', message: '', botcheck: '' });
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError('Connection error or server timeout. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-32 bg-slate-950 scroll-mt-20">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="p-16 text-center glass-card rounded-[3rem] animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-indigo-500/10 rounded-full text-indigo-500">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-white tracking-tight">Strategy Request Received!</h2>
              <p className="mb-10 text-lg text-slate-400 font-light">
                Thank you, {formData.name || 'there'}. Your details have been sent to our performance team. 
                Check your email for a confirmation. We'll be in touch within 24 hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-10 py-4 font-bold text-white transition-all bg-indigo-600 rounded-2xl hover:bg-indigo-500"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-slate-950 scroll-mt-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-10"></div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl tracking-tight">
            Book Your <span className="text-indigo-500">Free Audit</span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-400 font-light leading-relaxed">
            Let's analyze your current performance and engineer a scaling roadmap tailored to your specific goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className="p-10 space-y-8 glass-card rounded-[3rem] md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 blur-[120px] -z-10"></div>
            
            <div className="hidden" aria-hidden="true">
              <input 
                type="text" 
                name="botcheck" 
                value={formData.botcheck} 
                onChange={handleChange} 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 text-white transition-all bg-slate-900/50 border rounded-2xl border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 text-white transition-all bg-slate-900/50 border rounded-2xl border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="website" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Website URL</label>
                <input 
                  id="website"
                  type="url" 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://company.com"
                  className="w-full px-6 py-4 text-white transition-all bg-slate-900/50 border rounded-2xl border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="service" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Interested Service</label>
                <div className="relative">
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-white transition-all bg-slate-900/50 border rounded-2xl border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none appearance-none cursor-pointer placeholder:text-slate-700"
                  >
                    <option value="" disabled className="bg-slate-950">Select a service</option>
                    <option value="meta" className="bg-slate-950">Meta Ads</option>
                    <option value="google" className="bg-slate-950">Google Ads</option>
                    <option value="seo" className="bg-slate-950">SEO Services</option>
                    <option value="web" className="bg-slate-950">Web Development</option>
                    <option value="shopify" className="bg-slate-950">Shopify Optimization</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Briefly tell us about your current scaling challenges..."
                className="w-full px-6 py-4 text-white transition-all bg-slate-900/50 border rounded-2xl border-slate-800 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none placeholder:text-slate-700 resize-none"
              ></textarea>
            </div>

            {error && (
              <div className="p-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-center gap-3 w-full py-5 text-xl font-bold text-white transition-all bg-indigo-600 rounded-2xl hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-600/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Request
                  <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-12 text-center text-slate-500 text-xs font-medium tracking-wide uppercase opacity-60">
            <p>Protected by industry-standard encryption. Your growth data is confidential.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;