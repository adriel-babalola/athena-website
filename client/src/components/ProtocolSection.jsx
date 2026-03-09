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
    desc: 'Our AI breaks down the concept, generates targeted search queries, and scours YouTube.',
  },
  {
    num: '03',
    title: 'Get curated videos',
    desc: 'Verified, relevant videos ranked from beginner to advanced — ready in seconds.',
  },
];

export default function ProtocolSection() {
  return (
    <section id="protocol" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-3 sm:mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-athena-purple/60" />
            THE PROTOCOL
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 md:mb-16 leading-tight">
            How Athena <span className="text-athena-purple italic">works.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-athena-border p-4 sm:p-6 md:p-8 hover:border-athena-purple/30 transition-colors duration-300 group"
            >
              <div className="font-mono text-[10px] text-athena-purple tracking-widest mb-2 sm:mb-4">{step.num}</div>
              <h3 className="text-lg sm:text-xl font-medium text-athena-offwhite mb-2 sm:mb-3 group-hover:text-athena-purple transition-colors">
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
