import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── FOLD 1: Stop searching. Start understanding. ── */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-athena-purple/[0.04] via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            Stop searching.
            <br />
            <span className="text-athena-purple italic">Start understanding.</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <button
              onClick={() => scrollTo('capabilities')}
              className="px-6 sm:px-10 py-3 sm:py-4 border border-athena-purple/40 text-athena-purple font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-athena-purple hover:text-white transition-all duration-300 group"
            >
              START LEARNING
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-athena-purple/40 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ── FOLD 2: Understand anything. Instantly. ── */}
      <section id="capabilities" className="min-h-screen flex items-center relative px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-athena-purple/20 bg-athena-purple/5 mb-8">
              <span className="w-2 h-2 bg-athena-purple animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-athena-purple">
                Free · No Credit Card Required
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6">
              Understand
              <br />
              <span className="text-athena-purple italic">anything.</span>{' '}
              Instantly.
            </h2>

            <p className="text-athena-offwhite/40 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-10 leading-relaxed">
              Paste any confusing text, formula, or screenshot —
              <br />
              Athena finds the exact YouTube videos that explain it,
              <br />
              ranked from beginner to advanced.
              <br />
              <span className="text-athena-offwhite/70 font-medium">Trusted by FUT Minna, ABU, and LASU students.</span>
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="https://app.tryathena.app/sign-up"
                className="inline-flex items-center gap-2 bg-athena-purple text-white font-mono text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 cursor-pointer hover:bg-athena-purple/80 transition-all duration-300 relative overflow-hidden w-full sm:w-auto text-center justify-center sm:justify-start no-underline"
              >
                <span className="relative z-10">GET STARTED</span>
              </a>
              <a
                href="https://youtu.be/qfag97RW9Jo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-athena-offwhite/60 hover:text-athena-purple transition-colors bg-transparent border-none cursor-pointer w-full sm:w-auto justify-center sm:justify-start no-underline"
              >
                <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-athena-purple" />
                VIEW DEMO
              </a>
            </div>
          </motion.div>

          {/* Right: Terminal mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="border border-athena-border bg-athena-black/60 backdrop-blur-sm">
              {/* INPUT_SOURCE panel */}
              <div className="p-6 border-b border-athena-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-athena-offwhite/50">INPUT_SOURCE</span>
                  <span className="font-mono text-[11px] tracking-widest text-athena-purple">ANALYZING</span>
                </div>
                <div className="space-y-2 font-mono text-xs text-athena-offwhite/30">
                  <div className="flex items-center gap-2">
                    <span className="text-athena-offwhite/20">›</span>
                    initializing_core_modules...
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-athena-offwhite/20">›</span>
                    loading_context_window...
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-athena-offwhite/20">›</span>
                    parsing_semantic_structure...
                  </div>
                </div>

                {/* Quote card */}
                <div className="mt-4 border border-athena-purple/30 bg-athena-purple/5 p-4">
                  <p className="font-mono text-sm text-athena-offwhite/70 italic leading-relaxed">
                    "The mitochondria uses chemiosmosis to generate ATP through oxidative phosphorylation..."
                  </p>
                  <div className="mt-2 h-0.5 bg-athena-purple/40 w-full" />
                </div>
              </div>

              {/* OUTPUT_CURATION panel */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[11px] tracking-widest text-athena-offwhite/50">OUTPUT_CURATION</span>
                  <span className="font-mono text-[11px] tracking-widest text-athena-teal">READY</span>
                </div>

                <div className="space-y-3">
                  {[98, 96, 94].map((match, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border border-athena-border hover:border-athena-purple/20 transition-colors">
                      {/* Play icon */}
                      <div className="w-8 h-8 bg-athena-purple/10 flex items-center justify-center shrink-0">
                        <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-athena-purple ml-0.5" />
                      </div>
                      {/* Lines placeholder */}
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2 bg-athena-offwhite/10 w-3/4" />
                        <div className="h-2 bg-athena-offwhite/5 w-1/2" />
                      </div>
                      {/* Match */}
                      <span className="font-mono text-[10px] text-athena-purple tracking-wider">{match}% MATCH</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
