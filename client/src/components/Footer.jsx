export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-athena-border relative z-10 bg-athena-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img src="/logo.svg" alt="Athena" className="h-6 w-auto opacity-60" />
              <span className="font-mono text-sm tracking-widest uppercase font-bold text-athena-offwhite/60">
                ATHENA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-athena-offwhite/30 max-w-xs leading-relaxed">
              AI-powered study companion. Paste any confusing text or image — Athena finds the perfect YouTube videos, ranked by difficulty.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-athena-offwhite/50 mb-3 sm:mb-4">Navigate</h4>
            <ul className="space-y-2 sm:space-y-3 font-mono text-[10px] sm:text-xs text-athena-offwhite/30">
              <li>
                <button onClick={() => scrollTo('protocol')} className="hover:text-athena-purple transition-colors bg-transparent border-none cursor-pointer p-0">
                  Protocol
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-athena-purple transition-colors bg-transparent border-none cursor-pointer p-0">
                  Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('access')} className="hover:text-athena-purple transition-colors bg-transparent border-none cursor-pointer p-0">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-athena-offwhite/50 mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2 sm:space-y-3 font-mono text-[10px] sm:text-xs text-athena-offwhite/30">
              <li>
                <span className="text-athena-offwhite/15">Sign Up (Coming Soon)</span>
              </li>
              <li>
                <span className="text-athena-offwhite/15">Log In (Coming Soon)</span>
              </li>
              <li>
                <span className="text-athena-offwhite/15">API (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-athena-border mb-6 sm:mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-[9px] sm:text-[10px] text-athena-offwhite/15 font-mono tracking-wider">
            © 2026 Athena · RIEL Inc
          </p>
          <p className="text-[9px] sm:text-[10px] text-athena-offwhite/15 font-mono tracking-wider">
            Trusted by Nigerian Universities
          </p>
        </div>
      </div>
    </footer>
  );
}
