import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-athena-border relative overflow-hidden">
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
          Stop searching. <br /> <span className="text-athena-purple italic">Start understanding.</span>
        </h2>
        <p className="text-athena-offwhite/40 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-md mx-auto">
          Paste what confuses you. Get the exact videos that explain it. Free, no credit card.
        </p>

        <button
          disabled
          className="inline-block bg-athena-purple/40 text-white/50 font-mono text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-10 py-3 sm:py-4 cursor-not-allowed transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">LAUNCHING SOON</span>
        </button>
      </motion.div>
    </section>
  );
}
