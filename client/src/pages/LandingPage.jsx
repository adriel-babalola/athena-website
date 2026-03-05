import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProtocolSection from '../components/ProtocolSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-athena-black text-athena-offwhite selection:bg-athena-purple selection:text-white">
      {/* Grain overlay */}
      <div className="bg-grain" />

      {/* Ambient orbs */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />

      {/* Scroll progress */}
      <div className="scroll-progress" />

      <Navbar />

      <HeroSection />
      <ProtocolSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
