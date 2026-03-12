import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-athena-border bg-athena-black/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.svg" alt="Athena" className="h-7 w-auto" />
          <span className="font-mono text-sm tracking-widest uppercase font-bold group-hover:text-athena-purple transition-colors">
            ATHENA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-athena-offwhite/60">
          <button
            onClick={() => scrollTo('protocol')}
            className="hover:text-athena-purple transition-colors relative group cursor-pointer bg-transparent border-none"
          >
            PROTOCOL
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-athena-purple transition-all group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollTo('capabilities')}
            className="hover:text-athena-purple transition-colors relative group cursor-pointer bg-transparent border-none"
          >
            CAPABILITIES
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-athena-purple transition-all group-hover:w-full" />
          </button>
          <button
            onClick={() => scrollTo('access')}
            className="hover:text-athena-purple transition-colors relative group cursor-pointer bg-transparent border-none"
          >
            ACCESS
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-athena-purple transition-all group-hover:w-full" />
          </button>
          <a
            href="https://app.tryathena.app/sign-up"
            disabled
            className="px-5 py-2 border border-athena-purple/20 text-athena-purple/50 cursor-not-allowed opacity-50 transition-all duration-300 tracking-widest font-mono text-xs no-underline"
          >
            SIGN UP
          </a>
          <button
            disabled
            className="px-5 py-2 border border-athena-purple/20 text-athena-purple/50 cursor-not-allowed transition-all duration-300 tracking-widest font-mono text-xs"
          >
            LOGIN (COMING SOON)
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button
            disabled
            className="px-3 py-1.5 border border-athena-purple/20 text-athena-purple/50 font-mono text-[10px] cursor-not-allowed transition-all"
          >
            COMING SOON
          </button>
        </div>
      </div>
    </header>
  );
}
