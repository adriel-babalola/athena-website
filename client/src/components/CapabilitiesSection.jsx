import { motion } from 'motion/react';
import { Brain, Zap, Search, Layers, Shield, Clock } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    desc: 'Gemini AI understands context and identifies exactly what you need to learn.',
  },
  {
    icon: Search,
    title: 'Smart Video Curation',
    desc: 'Searches millions of YouTube videos to find the most relevant explanations.',
  },
  {
    icon: Layers,
    title: 'Difficulty Ranking',
    desc: 'Videos ranked from beginner to advanced so you learn at your own pace.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'Get curated video results in seconds, not hours of manual searching.',
  },
  {
    icon: Shield,
    title: 'Verified Quality',
    desc: 'AI verifies each video actually teaches the specific topic you need.',
  },
  {
    icon: Clock,
    title: 'Image Support',
    desc: 'Paste screenshots, photos of textbooks, or handwritten notes directly.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-32 px-6 relative border-t border-athena-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple mb-4">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Built for <span className="text-athena-purple italic">deep learning.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-athena-border p-6 hover:border-athena-purple/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-athena-purple/20 bg-athena-purple/5 flex items-center justify-center mb-4 group-hover:bg-athena-purple/10 transition-colors">
                  <Icon className="w-5 h-5 text-athena-purple" />
                </div>
                <h3 className="font-medium text-athena-offwhite mb-2">{cap.title}</h3>
                <p className="text-sm text-athena-offwhite/40 leading-relaxed">{cap.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
