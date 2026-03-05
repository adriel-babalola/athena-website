import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'FREE',
    price: '$0',
    period: 'forever',
    desc: 'Perfect for trying Athena out.',
    features: [
      'Unlimited text analysis',
      'Image & screenshot support',
      'AI video curation',
      'Difficulty ranking',
    ],
    cta: 'GET STARTED',
    highlight: false,
  },
  {
    name: 'PRO',
    price: '$9',
    period: '/month',
    desc: 'For serious students who want more.',
    features: [
      'Everything in Free',
      'Priority AI processing',
      'Save & organize results',
      'Study history & progress',
      'Export study plans',
    ],
    cta: 'COMING SOON',
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section id="access" className="py-32 px-6 relative border-t border-athena-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4">
            ACCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Start for <span className="text-athena-purple italic">free.</span>
          </h2>
          <p className="text-athena-offwhite/40 text-lg max-w-md mx-auto">
            No credit card required. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`border p-8 relative ${
                plan.highlight
                  ? 'border-athena-purple/40 bg-athena-purple/[0.03]'
                  : 'border-athena-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-athena-purple" />
              )}

              <div className="font-mono text-[10px] tracking-widest text-athena-purple mb-4">{plan.name}</div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-light text-athena-offwhite">{plan.price}</span>
                <span className="text-athena-offwhite/30 font-mono text-xs mb-1">{plan.period}</span>
              </div>
              <p className="text-athena-offwhite/40 text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-athena-offwhite/70">
                    <Check className="w-4 h-4 text-athena-purple shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <button
                  disabled
                  className="w-full py-3 border border-athena-border text-athena-offwhite/30 font-mono text-xs uppercase tracking-widest cursor-not-allowed"
                >
                  {plan.cta}
                </button>
              ) : (
                <Link
                  to="/signup"
                  className="block w-full py-3 bg-athena-purple text-white font-mono text-xs uppercase tracking-widest text-center hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] transition-all duration-300"
                >
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
