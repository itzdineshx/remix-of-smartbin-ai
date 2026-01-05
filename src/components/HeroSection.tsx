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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">IoT & Smart Cities Track</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Smart Multimodal Waste Bin{' '}
            <span className="gradient-text">Monitoring System</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            AI-powered waste classification, prediction, and optimized collection for sustainable cities. 
            Transforming urban waste management through intelligent IoT solutions.
          </p>

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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl font-bold gradient-text">25%</p>
              <p className="text-sm text-muted-foreground">Fewer Collection Trips</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">40%</p>
              <p className="text-sm text-muted-foreground">Fuel Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">60%</p>
              <p className="text-sm text-muted-foreground">Better Recycling</p>
            </div>
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
