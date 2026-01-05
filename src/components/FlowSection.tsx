import { Trash2, Camera, Mic, Brain, Database, TrendingUp, Truck, LayoutDashboard } from 'lucide-react';

const flowSteps = [
  { icon: Trash2, title: 'Waste Dropped', description: 'User deposits waste into smart bin' },
  { icon: Camera, title: 'Image Captured', description: 'HD camera photographs the waste' },
  { icon: Mic, title: 'Sound Recorded', description: 'Microphone captures material sound' },
  { icon: Brain, title: 'AI Classifies', description: 'Multimodal AI identifies waste type' },
  { icon: Database, title: 'Status Updated', description: 'Bin data synced to cloud' },
  { icon: TrendingUp, title: 'Overflow Predicted', description: 'ML forecasts fill timeline' },
  { icon: Truck, title: 'Route Optimized', description: 'Collection path recalculated' },
  { icon: LayoutDashboard, title: 'Dashboard Updated', description: 'Operators see live changes' },
];

const FlowSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Waste Drop to{' '}
            <span className="gradient-text">Smart Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow the journey of a single piece of waste through our intelligent system.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />

          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex items-center gap-6 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg z-10">
                <step.icon className="h-5 w-5 text-primary-foreground" />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-5 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
