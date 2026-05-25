export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-80" />
                <div className="absolute inset-[2px] bg-black rounded-md flex items-center justify-center">
                  <span className="text-cyan-400 font-black text-xs">HC</span>
                </div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">HYPER<span className="text-cyan-400">CHAIN</span></span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              An integrated digital ecosystem connecting productivity, finance, health, and innovation in one powerful chain.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Products</h3>
            <ul className="space-y-3">
              {["HyperTask", "HyperPay", "HyperLearn", "HyperHealth", "HyperStore"].map((item) => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3">
              {["About", "Team", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">&copy; {year} Hyperchain Project. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}