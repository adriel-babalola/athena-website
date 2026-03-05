import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 border-t border-athena-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-athena-purple/[0.04] rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
          Stop searching. <br /> <span className="text-athena-purple italic">Start understanding.</span>
        </h2>
        <p className="text-athena-offwhite/40 text-lg mb-10 max-w-md mx-auto">
          Paste what confuses you. Get the exact videos that explain it. Free, no credit card.
        </p>

        <Link
          to="/signup"
          className="inline-block bg-athena-purple text-white font-mono text-sm uppercase tracking-widest px-10 py-4 hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10">START LEARNING FREE</span>
        </Link>
      </motion.div>
    </section>
  );
}
