"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormType = "newsletter" | "talent" | "project";
interface FormState { loading: boolean; success: boolean; error: string; }

export default function BergabungSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeForm, setActiveForm] = useState<FormType>("newsletter");
  const [formState, setFormState] = useState<FormState>({ loading: false, success: false, error: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [talentForm, setTalentForm] = useState({ full_name: "", email: "", role: "", portfolio_url: "" });
  const [projectForm, setProjectForm] = useState({ full_name: "", email: "", project_idea: "", category: "productivity" });

  const handleSubmit = async (endpoint: string, body: Record<string, string>) => {
    setFormState({ loading: true, success: false, error: "" });
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error occurred");
      setFormState({ loading: false, success: true, error: "" });
    } catch (err) {
      setFormState({ loading: false, success: false, error: err instanceof Error ? err.message : "Error occurred" });
    }
  };

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all duration-200 text-sm";
  const labelClass = "block text-xs text-gray-500 uppercase tracking-wider mb-2";

  const TABS: { id: FormType; label: string }[] = [
    { id: "newsletter", label: "Newsletter" },
    { id: "talent", label: "Join as Talent" },
    { id: "project", label: "Pitch a Project" },
  ];

  return (
    <section id="bergabung" className="py-32 lg:py-40 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,245,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-6">Join</p>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
            <span className="gradient-text-white">BE PART OF</span>
            <br />
            <span className="gradient-text-cyan">HYPERCHAIN</span>
          </h2>
          <p className="text-gray-500 max-w-md">Join as an early adopter, talent, or project partner. Together we build Indonesia digital ecosystem.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/5 rounded-2xl mb-8 border border-white/5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveForm(tab.id); setFormState({ loading: false, success: false, error: "" }); }}
                className={"flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 " + (activeForm === tab.id ? "bg-white text-black" : "text-gray-500 hover:text-white")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="border border-white/5 rounded-2xl p-8 bg-white/[0.02]">
            {formState.success ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-white font-bold text-xl mb-2">Success!</h3>
                <p className="text-gray-500">Thank you! We will contact you soon.</p>
                <button onClick={() => setFormState({ loading: false, success: false, error: "" })} className="mt-6 px-6 py-2 border border-white/10 text-gray-400 rounded-xl hover:border-white/20 hover:text-white transition-all text-sm">
                  Submit Again
                </button>
              </div>
            ) : (
              <>
                {activeForm === "newsletter" && (
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit("/api/subscribe", { email: newsletterEmail, source: "newsletter" }); }} className="space-y-4">
                    <div>
                      <label htmlFor="nl-email" className={labelClass}>Email Address</label>
                      <input id="nl-email" type="email" required value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="you@email.com" className={inputClass} />
                    </div>
                    <p className="text-gray-600 text-xs">Get the latest updates about products, new features, and Hyperchain news directly in your inbox.</p>
                    <button type="submit" disabled={formState.loading} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 text-sm">
                      {formState.loading ? "Subscribing..." : "Subscribe to Newsletter"}
                    </button>
                  </form>
                )}
                {activeForm === "talent" && (
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit("/api/talent", talentForm); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label htmlFor="t-name" className={labelClass}>Full Name</label><input id="t-name" type="text" required value={talentForm.full_name} onChange={(e) => setTalentForm({ ...talentForm, full_name: e.target.value })} placeholder="John Doe" className={inputClass} /></div>
                      <div><label htmlFor="t-email" className={labelClass}>Email</label><input id="t-email" type="email" required value={talentForm.email} onChange={(e) => setTalentForm({ ...talentForm, email: e.target.value })} placeholder="john@email.com" className={inputClass} /></div>
                    </div>
                    <div><label htmlFor="t-role" className={labelClass}>Desired Position</label>
                      <select id="t-role" required value={talentForm.role} onChange={(e) => setTalentForm({ ...talentForm, role: e.target.value })} className={inputClass}>
                        <option value="">Select position...</option>
                        <option value="engineer">Software Engineer</option>
                        <option value="designer">UI/UX Designer</option>
                        <option value="data_scientist">Data Scientist</option>
                        <option value="product_manager">Product Manager</option>
                        <option value="marketing">Marketing</option>
                      </select>
                    </div>
                    <div><label htmlFor="t-portfolio" className={labelClass}>Portfolio URL (optional)</label><input id="t-portfolio" type="url" value={talentForm.portfolio_url} onChange={(e) => setTalentForm({ ...talentForm, portfolio_url: e.target.value })} placeholder="https://portfolio.com" className={inputClass} /></div>
                    <button type="submit" disabled={formState.loading} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 text-sm">
                      {formState.loading ? "Sending..." : "Submit Application"}
                    </button>
                  </form>
                )}
                {activeForm === "project" && (
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit("/api/project", projectForm); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label htmlFor="p-name" className={labelClass}>Full Name</label><input id="p-name" type="text" required value={projectForm.full_name} onChange={(e) => setProjectForm({ ...projectForm, full_name: e.target.value })} placeholder="John Doe" className={inputClass} /></div>
                      <div><label htmlFor="p-email" className={labelClass}>Email</label><input id="p-email" type="email" required value={projectForm.email} onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })} placeholder="john@email.com" className={inputClass} /></div>
                    </div>
                    <div><label htmlFor="p-cat" className={labelClass}>Category</label>
                      <select id="p-cat" value={projectForm.category} onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })} className={inputClass}>
                        <option value="productivity">Productivity</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div><label htmlFor="p-idea" className={labelClass}>Project Description</label><textarea id="p-idea" required rows={4} value={projectForm.project_idea} onChange={(e) => setProjectForm({ ...projectForm, project_idea: e.target.value })} placeholder="Tell us about your project idea..." className={inputClass + " resize-none"} /></div>
                    <button type="submit" disabled={formState.loading} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 text-sm">
                      {formState.loading ? "Sending..." : "Submit Project"}
                    </button>
                  </form>
                )}
                {formState.error && <p className="mt-4 text-red-400 text-sm text-center">{formState.error}</p>}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}