import { Wifi, Cloud, Cpu, LayoutDashboard, Database, Cog } from 'lucide-react';

const layers = [
  {
    title: 'Smart Bin Layer',
    description: 'IoT sensors, cameras, microphones',
    icon: Wifi,
    items: ['Fill-level sensors', 'HD cameras', 'Microphones', 'Connectivity module'],
    color: 'primary',
  },
  {
    title: 'Edge Processing',
    description: 'Local AI inference & data preprocessing',
    icon: Cpu,
    items: ['On-device ML', 'Data compression', 'Real-time alerts', 'Low latency'],
    color: 'chart-1',
  },
  {
    title: 'Cloud Platform',
    description: 'Centralized AI & data management',
    icon: Cloud,
    items: ['Model training', 'Data storage', 'API services', 'Scalable compute'],
    color: 'chart-2',
  },
  {
    title: 'Analytics Engine',
    description: 'Prediction & optimization algorithms',
    icon: Cog,
    items: ['Overflow prediction', 'Route optimization', 'Trend analysis', 'Reporting'],
    color: 'chart-3',
  },
  {
    title: 'Data Layer',
    description: 'Persistent storage & history',
    icon: Database,
    items: ['Time-series data', 'Historical trends', 'Audit logs', 'Backups'],
    color: 'chart-4',
  },
  {
    title: 'Dashboard',
    description: 'User interface & visualizations',
    icon: LayoutDashboard,
    items: ['Real-time map', 'Analytics charts', 'Alerts panel', 'Admin controls'],
    color: 'chart-5',
  },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for{' '}
            <span className="gradient-text">Scale & Reliability</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A modular, cloud-native architecture designed to grow from a single neighborhood 
            to entire metropolitan areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <layer.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{layer.title}</h3>
                  <p className="text-xs text-muted-foreground">{layer.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {layer.items.map((item, i) => (
                  <div
                    key={i}
                    className="text-xs px-3 py-2 rounded-lg bg-primary/5 text-muted-foreground border border-primary/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="mt-16 glass-card p-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-4">
            {['Smart Bins', 'Edge AI', 'Cloud', 'Analytics', 'Dashboard'].map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-lg ${index === 2 ? 'animate-pulse-glow' : ''}`}>
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {index < 4 && (
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
