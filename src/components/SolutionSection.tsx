import { Camera, Mic, Brain, BarChart3, TrendingUp, Truck } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Smart Detection',
    description: 'Bins equipped with cameras capture waste images in real-time.',
  },
  {
    icon: Mic,
    title: 'Audio Analysis',
    description: 'Microphones detect material sounds for multi-modal classification.',
  },
  {
    icon: Brain,
    title: 'AI Classification',
    description: 'Deep learning models classify waste type instantly.',
  },
  {
    icon: BarChart3,
    title: 'Level Tracking',
    description: 'Fill levels and composition are monitored continuously.',
  },
  {
    icon: TrendingUp,
    title: 'Overflow Prediction',
    description: 'ML algorithms predict when bins will reach capacity.',
  },
  {
    icon: Truck,
    title: 'Route Optimization',
    description: 'Collection routes are dynamically optimized for efficiency.',
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Intelligent Waste Management{' '}
            <span className="gradient-text">Reimagined</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive AI-powered system that transforms how cities handle waste collection, 
            from detection to route optimization.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                <div className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <step.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div className="flex justify-center mt-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
