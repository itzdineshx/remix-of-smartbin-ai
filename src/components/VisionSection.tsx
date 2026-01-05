import { Rocket, Building2, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const visionItems = [
  {
    icon: Building2,
    title: 'Smart City Deployment',
    description: 'Partner with municipalities to deploy across entire cities.',
  },
  {
    icon: BarChart3,
    title: 'SaaS Dashboard',
    description: 'Cloud-based platform for waste management operators.',
  },
  {
    icon: Sparkles,
    title: 'Advanced AI Analytics',
    description: 'Predictive insights and trend forecasting capabilities.',
  },
];

const VisionSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="section-container">
        <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Product Vision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Building the Future of{' '}
                <span className="gradient-text">Urban Sustainability</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our roadmap extends beyond the hackathon — we're building a platform 
                that will transform how cities manage waste worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {visionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-background/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
