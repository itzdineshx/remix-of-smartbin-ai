import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TechnologySection from '@/components/TechnologySection';
import ArchitectureSection from '@/components/ArchitectureSection';
import FlowSection from '@/components/FlowSection';
import DashboardSection from '@/components/DashboardSection';
import ImpactSection from '@/components/ImpactSection';
import DeploymentSection from '@/components/DeploymentSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SmartWaste - AI-Powered Waste Bin Monitoring for Smart Cities</title>
        <meta 
          name="description" 
          content="Transform urban waste management with AI-powered classification, predictive analytics, and optimized collection routes. Reduce emissions, save costs, and build sustainable cities." 
        />
        <meta name="keywords" content="smart waste, IoT, smart city, AI waste classification, waste management, sustainability" />
        <meta property="og:title" content="SmartWaste - AI-Powered Waste Bin Monitoring" />
        <meta property="og:description" content="AI-powered waste classification, prediction, and optimized collection for sustainable cities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://smartwaste.io" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TechnologySection />
        <ArchitectureSection />
        <FlowSection />
        <DashboardSection />
        <ImpactSection />
        <DeploymentSection />
        <VisionSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
