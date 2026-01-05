import { FlaskConical, Plug, Cpu, Globe, Building, CloudCog } from 'lucide-react';

const features = [
  {
    icon: FlaskConical,
    title: 'Simulated Demo Mode',
    description: 'Full functionality with simulated sensor data for demonstrations and testing.',
  },
  {
    icon: Plug,
    title: 'Hardware Ready',
    description: 'Seamlessly integrates with real IoT sensors when deployed in production.',
  },
  {
    icon: Cpu,
    title: 'Edge Compatible',
    description: 'Runs on Raspberry Pi and other edge devices for low-latency processing.',
  },
  {
    icon: Globe,
    title: 'City-Scale Deployment',
    description: 'Architecture supports thousands of bins across metropolitan areas.',
  },
];

const useCases = [
  { icon: Building, label: 'Smart Cities' },
  { icon: Globe, label: 'University Campuses' },
  { icon: CloudCog, label: 'Industrial Parks' },
];

const DeploymentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Deployment & Scalability
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Prototype to{' '}
            <span className="gradient-text">Production</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built with flexibility in mind — works in demo mode today, 
            ready for real-world deployment tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">Ideal For</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <useCase.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{useCase.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
