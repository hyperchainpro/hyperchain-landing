"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormType = "talent" | "project" | "newsletter";

interface FormState {
  loading: boolean;
  success: boolean;
  error: string;
}

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
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Terjadi kesalahan");
      setFormState({ loading: false, success: true, error: "" });
    } catch (err) {
      setFormState({ loading: false, success: false, error: err instanceof Error ? err.message : "Terjadi kesalahan" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit("/api/subscribe", { email: newsletterEmail, source: "newsletter" });
  };

  const handleTalentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit("/api/talent", talentForm);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit("/api/project", projectForm);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-200 text-sm";
  const labelClass = "block text-gray-400 text-sm mb-2";

  return (
    <section id="bergabung" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Bergabung
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Jadilah Bagian dari{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Hyperchain
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bergabunglah sebagai early adopter, talenta, atau mitra proyek.
            Bersama kita bangun ekosistem digital Indonesia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex gap-2 p-1 rounded-2xl bg-white/5 border border-white/10 mb-8"
        >
          {([
            { id: "newsletter", label: "Newsletter" },
            { id: "talent", label: "Bergabung sebagai Talenta" },
            { id: "project", label: "Ajukan Proyek" },
          ] as { id: FormType; label: string }[]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveForm(tab.id); setFormState({ loading: false, success: false, error: "" }); }}
              className={"flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 " + (activeForm === tab.id ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg" : "text-gray-400 hover:text-white")}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-8 rounded-3xl border border-white/10 bg-gray-900/50"
        >
          {formState.success ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-white font-bold text-xl mb-2">Berhasil!</h3>
              <p className="text-gray-400">Terima kasih! Kami akan menghubungi Anda segera.</p>
              <button
                onClick={() => setFormState({ loading: false, success: false, error: "" })}
                className="mt-6 px-6 py-2 border border-white/20 text-gray-300 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all text-sm"
              >
                Kirim Lagi
              </button>
            </div>
          ) : (
            <>
              {activeForm === "newsletter" && (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-xl mb-6">Daftar Newsletter</h3>
                  <div>
                    <label htmlFor="newsletter-email" className={labelClass}>Email Address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="nama@email.com"
                      className={inputClass}
                    />
                  </div>
                  <p className="text-gray-500 text-xs">Dapatkan update terbaru tentang produk, fitur baru, dan berita Hyperchain langsung di inbox Anda.</p>
                  <button type="submit" disabled={formState.loading} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50">
                    {formState.loading ? "Mendaftar..." : "Daftar Newsletter"}
                  </button>
                </form>
              )}

              {activeForm === "talent" && (
                <form onSubmit={handleTalentSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-xl mb-6">Bergabung sebagai Talenta</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="talent-name" className={labelClass}>Nama Lengkap</label>
                      <input id="talent-name" type="text" required value={talentForm.full_name} onChange={(e) => setTalentForm({ ...talentForm, full_name: e.target.value })} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="talent-email" className={labelClass}>Email</label>
                      <input id="talent-email" type="email" required value={talentForm.email} onChange={(e) => setTalentForm({ ...talentForm, email: e.target.value })} placeholder="john@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="talent-role" className={labelClass}>Posisi yang Diminati</label>
                    <select id="talent-role" required value={talentForm.role} onChange={(e) => setTalentForm({ ...talentForm, role: e.target.value })} className={inputClass}>
                      <option value="">Pilih posisi...</option>
                      <option value="engineer">Software Engineer</option>
                      <option value="designer">UI/UX Designer</option>
                      <option value="data_scientist">Data Scientist</option>
                      <option value="product_manager">Product Manager</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="talent-portfolio" className={labelClass}>URL Portfolio (opsional)</label>
                    <input id="talent-portfolio" type="url" value={talentForm.portfolio_url} onChange={(e) => setTalentForm({ ...talentForm, portfolio_url: e.target.value })} placeholder="https://portfolio.com" className={inputClass} />
                  </div>
                  <button type="submit" disabled={formState.loading} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50">
                    {formState.loading ? "Mengirim..." : "Kirim Lamaran"}
                  </button>
                </form>
              )}

              {activeForm === "project" && (
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-xl mb-6">Ajukan Ide Proyek</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="project-name" className={labelClass}>Nama Lengkap</label>
                      <input id="project-name" type="text" required value={projectForm.full_name} onChange={(e) => setProjectForm({ ...projectForm, full_name: e.target.value })} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="project-email" className={labelClass}>Email</label>
                      <input id="project-email" type="email" required value={projectForm.email} onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })} placeholder="john@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="project-category" className={labelClass}>Kategori</label>
                    <select id="project-category" value={projectForm.category} onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })} className={inputClass}>
                      <option value="productivity">Produktivitas</option>
                      <option value="finance">Keuangan</option>
                      <option value="education">Pendidikan</option>
                      <option value="health">Kesehatan</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="project-idea" className={labelClass}>Deskripsi Ide Proyek</label>
                    <textarea id="project-idea" required rows={4} value={projectForm.project_idea} onChange={(e) => setProjectForm({ ...projectForm, project_idea: e.target.value })} placeholder="Ceritakan ide proyek Anda..." className={inputClass + " resize-none"} />
                  </div>
                  <button type="submit" disabled={formState.loading} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50">
                    {formState.loading ? "Mengirim..." : "Ajukan Proyek"}
                  </button>
                </form>
              )}

              {formState.error && (
                <p className="mt-4 text-red-400 text-sm text-center">{formState.error}</p>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
