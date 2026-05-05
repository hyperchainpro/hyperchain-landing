export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-black rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-cyan-400 font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                HYPER<span className="text-cyan-400">CHAIN</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ekosistem digital terintegrasi yang menghubungkan produktivitas, keuangan, dan inovasi dalam satu rantai yang kuat.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors text-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Produk</h3>
            <ul className="space-y-3">
              {["HyperTask", "HyperPay", "HyperLearn", "HyperHealth", "HyperConnect"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Perusahaan</h3>
            <ul className="space-y-3">
              {["Tentang Kami", "Tim", "Karir", "Blog", "Kontak"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            � {currentYear} Hyperchain Project. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
