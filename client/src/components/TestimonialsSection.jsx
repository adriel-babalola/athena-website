import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "I used to spend 20 minutes searching YouTube for the right video. Athena does it in seconds.",
    name: 'Sarah K.',
    role: 'Pre-Med Student',
  },
  {
    quote: "The difficulty ranking is a game changer. I always find videos at exactly my level.",
    name: 'James T.',
    role: 'CS Undergraduate',
  },
  {
    quote: "Being able to paste a screenshot of my textbook and get instant video results is incredible.",
    name: 'Maya R.',
    role: 'Engineering Student',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 border-t border-athena-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4">
            SIGNAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-light">
            What students are <span className="text-athena-purple italic">saying.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-athena-border p-6 hover:border-athena-purple/20 transition-colors"
            >
              <p className="text-athena-offwhite/70 text-sm leading-relaxed mb-6 italic">
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
