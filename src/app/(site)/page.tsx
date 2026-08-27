import HeroSection from '@/components/Portfolio/HeroSection';
import Navbar from '@/components/Portfolio/Navbar';
import PortfolioSections from '@/components/Portfolio/PortfolioSections';
import ScrollReveal from '@/components/Portfolio/ScrollReveal';

export default function Home() {
  return (
    <main className='bg-hero-bg min-h-screen'>
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <PortfolioSections />
      </ScrollReveal>
    </main>
  );
}
