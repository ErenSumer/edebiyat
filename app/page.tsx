import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SocialMediaImpact from '@/components/sections/social-media-impact';
import Importance from '@/components/sections/importance';
import Statistics from '@/components/sections/statistics';
import InteractiveExamples from '@/components/sections/interactive-examples';
import Solutions from '@/components/sections/solutions';
import Footer from '@/components/footer';
import ParticleBackground from '@/components/ui/particle-background';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <SocialMediaImpact />
        <Importance />
        <Statistics />
        <InteractiveExamples />
        <Solutions />
        <Footer />
      </div>
    </main>
  );
}