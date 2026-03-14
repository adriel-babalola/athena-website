import { motion } from 'motion/react';
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
        { name: 'Student', price: '***', usd: '***' },
        { name: 'Pro', price: '***', usd: '***' }
      ]
    : [
        { name: 'Student', price: '***', usd: '***' },
        { name: 'Pro', price: '***', usd: '***' }
      ];

  const plans = [
    {
      name: 'FREE',
      price: '***',
      period: 'free 1st month',
      desc: 'Everything you need to start learning smarter.',
      features: [
        '10 analyses per day',
        'Image & screenshot support',
        'AI-curated video results',
        'Beginner-to-advanced ranking',
      ],
      cta: 'EXPLORE',
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
        'Save videos for later',
        'Full query history',
      ],
      cta: 'GET STARTED',
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
    <section id="access" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative border-t border-athena-border">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4">
            ACCESS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4">
            Start for <span className="text-athena-purple italic">free.</span>
          </h2>
          <p className="text-athena-offwhite/40 text-sm sm:text-base md:text-lg max-w-md mx-auto">
            No credit card required. Full features from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`border p-4 sm:p-6 md:p-8 relative ${
                plan.highlight
                  ? 'border-athena-purple/40 bg-athena-purple/[0.03]'
                  : 'border-athena-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-athena-purple" />
              )}

              <div className="font-mono text-[10px] tracking-widest text-athena-purple mb-2 sm:mb-4">{plan.name}</div>
              <div className="flex items-end gap-1 mb-1 sm:mb-2">
                <span className="text-3xl sm:text-4xl font-light text-athena-offwhite">{plan.price}</span>
                <span className="text-athena-offwhite/30 font-mono text-xs mb-1">{plan.period}</span>
              </div>
              {plan.usd && userCountry !== 'NG' && (
                <div className="text-athena-offwhite/50 font-mono text-xs mb-4">{plan.usd}</div>
              )}
              <p className="text-athena-offwhite/40 text-xs sm:text-sm mb-6 sm:mb-8">{plan.desc}</p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs sm:text-sm text-athena-offwhite/70">
                    <Check className="w-4 h-4 text-athena-purple shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <a
                  href="https://app.tryathena.app/sign-up"
                  className="block w-full py-3 border border-athena-purple bg-athena-purple/10 text-athena-purple font-mono text-xs uppercase tracking-widest cursor-pointer hover:bg-athena-purple hover:text-white transition-all duration-300 text-center no-underline"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="https://app.tryathena.app/sign-up"
                  className="block w-full py-3 bg-athena-purple text-white font-mono text-xs uppercase tracking-widest text-center cursor-pointer hover:bg-athena-purple/80 transition-all duration-300 no-underline"
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
