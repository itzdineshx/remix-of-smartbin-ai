import { MapPin, BarChart3, Route, Leaf } from 'lucide-react';

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Dashboard & Demo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real-Time{' '}
            <span className="gradient-text">City Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A powerful dashboard providing complete visibility into your city's waste management operations.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="glass-card p-6 lg:p-8 overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Panel */}
            <div className="lg:col-span-2 bg-secondary/30 rounded-xl p-4 min-h-[400px] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Smart City Map</span>
              </div>
              
              {/* Simulated Map */}
              <div className="absolute inset-4 top-12 rounded-lg bg-secondary/50 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-foreground/10" />
                    ))}
                  </div>
                </div>
                
                {/* Simulated Bins */}
                <div className="absolute top-[20%] left-[15%] w-4 h-4 rounded-full status-green animate-pulse" title="Fill: 25%" />
                <div className="absolute top-[35%] left-[30%] w-4 h-4 rounded-full status-yellow animate-pulse" title="Fill: 65%" />
                <div className="absolute top-[25%] left-[55%] w-4 h-4 rounded-full status-green animate-pulse" title="Fill: 40%" />
                <div className="absolute top-[60%] left-[70%] w-4 h-4 rounded-full status-red animate-pulse" title="Fill: 90%" />
                <div className="absolute top-[75%] left-[25%] w-4 h-4 rounded-full status-green animate-pulse" title="Fill: 15%" />
                <div className="absolute top-[50%] left-[45%] w-4 h-4 rounded-full status-yellow animate-pulse" title="Fill: 70%" />
                <div className="absolute top-[40%] left-[80%] w-4 h-4 rounded-full status-green animate-pulse" title="Fill: 30%" />
                
                {/* Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 60 80 Q 120 140 220 100 Q 280 80 280 180 Q 300 260 100 300"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full status-green" />
                  <span className="text-xs text-muted-foreground">Low</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full status-yellow" />
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full status-red" />
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Waste Composition</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Organic', value: 35, color: 'bg-emerald-500' },
                    { label: 'Plastic', value: 28, color: 'bg-blue-500' },
                    { label: 'Paper', value: 18, color: 'bg-amber-500' },
                    { label: 'Metal', value: 12, color: 'bg-slate-500' },
                    { label: 'Glass', value: 7, color: 'bg-cyan-500' },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Route className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Route Efficiency</span>
                </div>
                <div className="text-4xl font-bold gradient-text mb-1">87%</div>
                <p className="text-sm text-muted-foreground">vs. 62% traditional routes</p>
              </div>

              <div className="bg-secondary/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">CO₂ Saved Today</span>
                </div>
                <div className="text-4xl font-bold gradient-text mb-1">142 kg</div>
                <p className="text-sm text-muted-foreground">Equivalent to 580 km driving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
