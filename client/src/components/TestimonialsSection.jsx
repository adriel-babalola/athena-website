import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I pasted a paragraph from my biochem textbook and Athena gave me three perfectly ranked videos in under 10 seconds. It's become part of every study session.",
    name: 'Sarah K.',
    role: 'Pre-Med Student',
  },
  {
    quote: "The beginner-to-advanced ranking is what got me. I stopped watching videos that were either too basic or went straight over my head.",
    name: 'James T.',
    role: 'CS Undergraduate',
  },
  {
    quote: "I screenshot my lecture slides whenever I get lost and Athena figures out exactly what I need to watch. I don't know how I studied without it.",
    name: 'Maya R.',
    role: 'Engineering Student',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-athena-border">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4">
            SIGNAL
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
            What students are <span className="text-athena-purple italic">saying.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-athena-border p-4 sm:p-5 md:p-6 hover:border-athena-purple/20 transition-colors"
            >
              <p className="text-athena-offwhite/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-mono text-xs text-athena-offwhite/90">{t.name}</div>
                <div className="font-mono text-[10px] text-athena-offwhite/30 tracking-wider">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
