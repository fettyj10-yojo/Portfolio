import HeroSection from "@/components/Portfolio/HeroSection";
import Navbar from "@/components/Portfolio/Navbar";
import PortfolioSections from "@/components/Portfolio/PortfolioSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navbar />
      <HeroSection />
      <PortfolioSections />
    </main>
  );
}
