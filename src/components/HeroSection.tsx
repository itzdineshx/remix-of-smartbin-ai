import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-smart-city.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart city with intelligent waste bins and optimized collection routes"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Track & Team Info */}
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Track 3</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent-foreground">Team 13</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
              <span className="text-sm font-bold text-destructive">Red Dragon</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Smart Waste{' '}
            <span className="gradient-text">Management System</span>
          </h1>

          {/* Team Members */}
          <div className="flex flex-wrap items-center gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-sm text-muted-foreground">Team Members:</span>
            {['Harishwaran', 'Jayamurugan', 'Dinesh'].map((member, index) => (
              <span key={member} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                {member}
              </span>
            ))}
          </div>

          {/* Problem Statement */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive" />
              Problem Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Inefficient waste collection results in overflowing bins, unnecessary fuel consumption, and increased urban pollution. Static collection routes fail to adapt to real-time waste generation patterns. Studies show bins are often emptied when only <span className="text-primary font-semibold">40% full</span>, wasting resources and increasing carbon emissions.
            </p>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-2">Our Solution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build a smart waste management system that monitors bin fill levels using IoT sensors and recommends optimized collection routes based on real-time data, improving operational efficiency and supporting sustainable urban waste management.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="gradient-primary text-primary-foreground border-0 group">
              View Demo
              <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group border-foreground/20 hover:bg-foreground/5">
              Explore Solution
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
