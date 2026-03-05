import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Paste your confusion',
    desc: 'Drop in any text, formula, equation, or screenshot — whatever you\'re stuck on.',
  },
  {
    num: '02',
    title: 'Athena analyzes it',
    desc: 'Gemini AI breaks down the concept, generates targeted search queries, and scours YouTube.',
  },
  {
    num: '03',
    title: 'Get curated videos',
    desc: 'Verified, relevant videos ranked from beginner to advanced — ready in seconds.',
  },
];

export default function ProtocolSection() {
  return (
    <section id="protocol" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-athena-purple/60" />
            THE PROTOCOL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-16 leading-tight">
            How Athena <span className="text-athena-purple italic">works.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-athena-border p-8 hover:border-athena-purple/30 transition-colors duration-300 group"
            >
              <div className="font-mono text-[10px] text-athena-purple tracking-widest mb-4">{step.num}</div>
              <h3 className="text-xl font-medium text-athena-offwhite mb-3 group-hover:text-athena-purple transition-colors">
                {step.title}
              </h3>
              <p className="text-athena-offwhite/40 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
