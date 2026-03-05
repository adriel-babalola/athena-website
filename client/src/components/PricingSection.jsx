import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

// Hook to detect user country
const useUserCountry = () => {
  const [country, setCountry] = useState('NG'); // Default to NG

  useEffect(() => {
    // Check if country is already in localStorage
    const cachedCountry = localStorage.getItem('userCountry');
    if (cachedCountry) {
      setCountry(cachedCountry);
      return;
    }

    // Fetch country from geolocation API
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const detectedCountry = data.country_code || 'NG';
        setCountry(detectedCountry);
        localStorage.setItem('userCountry', detectedCountry);
      } catch (error) {
        console.error('Error detecting country:', error);
        setCountry('NG'); // Fallback to NG
        localStorage.setItem('userCountry', 'NG');
      }
    };

    detectCountry();
  }, []);

  return country;
};

export default function PricingSection() {
  const userCountry = useUserCountry();

  const pricing = userCountry === 'NG'
    ? [
        { name: 'Student', price: '₦3,500', usd: '~$2.10' },
        { name: 'Pro', price: '₦7,000', usd: '~$4.20' }
      ]
    : [
        { name: 'Student', price: '$5', usd: '$5' },
        { name: 'Pro', price: '$10-15', usd: '$10-15' }
      ];

  const plans = [
    {
      name: 'FREE',
      price: '$0',
      period: 'forever',
      desc: 'Everything you need to start learning smarter.',
      features: [
        '10 analyses per day',
        'Image & screenshot support',
        'AI-curated video results',
        'Beginner-to-advanced ranking',
        'Save videos for later',
        'Full query history',
      ],
      cta: 'GET STARTED',
      highlight: false,
    },
    {
      name: pricing[0].name,
      price: pricing[0].price,
      usd: pricing[0].usd,
      period: '/month',
      desc: 'For students who want unlimited power.',
      features: [
        'Everything in Free',
        'Unlimited daily analyses',
        'Priority AI processing',
        'Advanced study tools',
        'Export study plans',
      ],
      cta: 'COMING SOON',
      highlight: true,
    },
    {
      name: pricing[1].name,
      price: pricing[1].price,
      usd: pricing[1].usd,
      period: '/month',
      desc: 'For power users and professionals.',
      features: [
        'Everything in Student',
        'Custom study programs',
        'Team collaboration',
        'API access',
        'Priority support',
      ],
      cta: 'COMING SOON',
      highlight: true,
    },
  ];

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
            No credit card required. Full features from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              {plan.usd && (
                <div className="text-athena-offwhite/50 font-mono text-xs mb-4">{plan.usd}</div>
              )}
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
