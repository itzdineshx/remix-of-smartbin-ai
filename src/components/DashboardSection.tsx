import { useState, useEffect } from 'react';
import { 
  MapPin, BarChart3, Route, Leaf, Trash2, Factory, TruckIcon, 
  AlertTriangle, CheckCircle2, Zap, Gauge, Recycle, ArrowRight,
  ArrowDown, Fuel, Clock, TreePine, Building2
} from 'lucide-react';
import SmartWasteSystem from './SmartWasteSystem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Step indicators data
const systemSteps = [
  { step: 1, title: 'Mini Bin Deployment', icon: Trash2, description: 'Street-level waste collection', status: 'active' },
  { step: 2, title: 'Pipeline Transfer', icon: Zap, description: 'Automated underground transfer', status: 'active' },
  { step: 3, title: 'Centralized Shredding', icon: Recycle, description: 'Volume reduction at main bin', status: 'active' },
  { step: 4, title: 'Status Monitoring', icon: Gauge, description: 'Real-time capacity tracking', status: 'active' },
  { step: 5, title: 'Predictive Alerts', icon: AlertTriangle, description: 'AI overflow prediction', status: 'warning' },
  { step: 6, title: 'Route Optimization', icon: Route, description: 'Main bins only collection', status: 'active' },
  { step: 7, title: 'Truck Collection', icon: TruckIcon, description: 'Efficient pickup cycles', status: 'active' },
  { step: 8, title: 'City Analytics', icon: BarChart3, description: 'Impact measurement', status: 'active' },
];

// Main bins status for sidebar
const mainBinsStatus = [
  { id: 'M01', fillLevel: 78, status: 'active', miniBins: 4, location: 'MG Road' },
  { id: 'M02', fillLevel: 92, status: 'critical', miniBins: 3, location: 'Koramangala' },
  { id: 'M03', fillLevel: 45, status: 'normal', miniBins: 3, location: 'Malleshwaram' },
];

// Analytics data
const analyticsData = {
  before: {
    tripsPerDay: 50,
    fuelLiters: 180,
    co2Kg: 468,
    collectionTime: '8 hours',
    overflowIncidents: 15,
    manualPickups: 50,
  },
  after: {
    tripsPerDay: 3,
    fuelLiters: 25,
    co2Kg: 65,
    collectionTime: '2 hours',
    overflowIncidents: 0,
    manualPickups: 3,
  },
};

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMainBin, setSelectedMainBin] = useState<string | undefined>();
  const [animatingStep, setAnimatingStep] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  // Animate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatingStep(prev => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate transfer counter
  useEffect(() => {
    const interval = setInterval(() => {
      setTransferCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Smart Waste Management System
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            8-Step{' '}
            <span className="gradient-text">Intelligent Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From street-level mini bins to centralized main bins with automated pipeline transfer and smart route optimization.
          </p>
        </div>

        {/* System Steps Flow */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[900px] gap-2">
            {systemSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div 
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                    animatingStep === index 
                      ? 'bg-primary/20 scale-105 shadow-lg' 
                      : 'bg-secondary/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step.status === 'warning' 
                      ? 'bg-amber-500 text-white' 
                      : animatingStep === index 
                        ? 'bg-primary text-white' 
                        : 'bg-secondary text-foreground'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    Step {step.step}
                  </span>
                  <span className="text-[10px] text-muted-foreground text-center max-w-[80px]">
                    {step.title}
                  </span>
                </div>
                {index < systemSteps.length - 1 && (
                  <ArrowRight className={`h-4 w-4 mx-1 transition-colors ${
                    animatingStep === index ? 'text-primary' : 'text-muted-foreground/50'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="glass-card p-6 lg:p-8 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="main-bin" className="flex items-center gap-2">
                <Factory className="h-4 w-4" />
                <span className="hidden sm:inline">Main Bins</span>
              </TabsTrigger>
              <TabsTrigger value="route" className="flex items-center gap-2">
                <TruckIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Routes</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
            </TabsList>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map Panel */}
              <div className="lg:col-span-2 bg-secondary/30 rounded-xl p-4 min-h-[450px] relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      {activeTab === 'overview' && 'Smart City Network'}
                      {activeTab === 'main-bin' && 'Main Bin Details'}
                      {activeTab === 'route' && 'Optimized Collection Route'}
                      {activeTab === 'analytics' && 'Coverage Map'}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">OpenStreetMap</span>
                </div>

                <TabsContent value="overview" className="mt-0 h-[380px]">
                  <SmartWasteSystem view="overview" />
                </TabsContent>

                <TabsContent value="main-bin" className="mt-0 h-[380px]">
                  <SmartWasteSystem view="main-bin" selectedMainBin={selectedMainBin} />
                </TabsContent>

                <TabsContent value="route" className="mt-0 h-[380px]">
                  <SmartWasteSystem view="route" />
                </TabsContent>

                <TabsContent value="analytics" className="mt-0 h-[380px]">
                  <SmartWasteSystem view="analytics" />
                </TabsContent>

                {/* Legend */}
                <div className="absolute bottom-6 left-6 z-[1000] flex items-center gap-4 bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">M</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Main Bin</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Mini Bin</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-0.5 bg-blue-500 opacity-60" style={{ borderStyle: 'dashed' }} />
                    <span className="text-xs text-muted-foreground">Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Side Panel */}
              <div className="space-y-4">
                {/* Real-time Stats */}
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Live Pipeline Activity</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg">
                      <span className="text-sm text-foreground">Active Transfers</span>
                      <span className="text-lg font-bold text-blue-500">4</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                      <span className="text-sm text-foreground">Total Transferred</span>
                      <span className="text-lg font-bold text-emerald-500">{1247 + transferCount} kg</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg">
                      <span className="text-sm text-foreground">Volume Saved</span>
                      <span className="text-lg font-bold text-amber-500">65%</span>
                    </div>
                  </div>
                </div>

                {/* Main Bins Status */}
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Factory className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Main Bins Status</span>
                  </div>
                  <div className="space-y-2">
                    {mainBinsStatus.map((bin) => (
                      <button
                        key={bin.id}
                        onClick={() => {
                          setSelectedMainBin(bin.id);
                          setActiveTab('main-bin');
                        }}
                        className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                          bin.status === 'critical' 
                            ? 'border-red-500 bg-red-500/10' 
                            : bin.status === 'active'
                              ? 'border-amber-500 bg-amber-500/10'
                              : 'border-green-500 bg-green-500/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{bin.id}</span>
                          {bin.status === 'critical' && (
                            <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{bin.location}</span>
                          <span className={`font-medium ${
                            bin.fillLevel >= 90 ? 'text-red-500' : 
                            bin.fillLevel >= 70 ? 'text-amber-500' : 'text-green-500'
                          }`}>{bin.fillLevel}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              bin.fillLevel >= 90 ? 'bg-red-500' : 
                              bin.fillLevel >= 70 ? 'bg-amber-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${bin.fillLevel}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-1">
                          {bin.miniBins} mini bins connected
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Priority Alert */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 animate-pulse" />
                    <span className="font-semibold text-red-500">Priority Alert</span>
                  </div>
                  <p className="text-sm text-foreground mb-2">
                    Main Bin M02 – Priority Collection Required
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Predicted overflow in 30 minutes. Truck dispatched.
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Panel (Below map when analytics tab is active) */}
            <TabsContent value="analytics" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before/After Comparison */}
                <div className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Before vs After Comparison
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Daily Trips', before: analyticsData.before.tripsPerDay, after: analyticsData.after.tripsPerDay, unit: '', icon: TruckIcon },
                      { label: 'Fuel Usage', before: analyticsData.before.fuelLiters, after: analyticsData.after.fuelLiters, unit: 'L', icon: Fuel },
                      { label: 'CO₂ Emissions', before: analyticsData.before.co2Kg, after: analyticsData.after.co2Kg, unit: 'kg', icon: Leaf },
                      { label: 'Collection Time', before: analyticsData.before.collectionTime, after: analyticsData.after.collectionTime, unit: '', icon: Clock },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="text-sm text-foreground mb-1">{item.label}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-red-400 line-through">
                              {item.before}{item.unit}
                            </span>
                            <ArrowRight className="h-4 w-4 text-primary" />
                            <span className="text-sm font-bold text-green-500">
                              {item.after}{item.unit}
                            </span>
                            {typeof item.before === 'number' && typeof item.after === 'number' && (
                              <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                                -{Math.round((1 - item.after / item.before) * 100)}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-primary" />
                    Environmental Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-500/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-500 mb-1">94%</div>
                      <p className="text-xs text-muted-foreground">Trip Reduction</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-1">86%</div>
                      <p className="text-xs text-muted-foreground">Fuel Saved</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-green-500 mb-1">403 kg</div>
                      <p className="text-xs text-muted-foreground">CO₂ Prevented</p>
                    </div>
                    <div className="bg-amber-500/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
                      <p className="text-xs text-muted-foreground">Overflow Prevention</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">City-Wide Benefits</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reduced traffic congestion from collection vehicles</li>
                      <li>• Zero roadside overflow incidents</li>
                      <li>• 75% reduction in collection costs</li>
                      <li>• Improved air quality metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Route Optimization Panel */}
            <TabsContent value="route" className="mt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Route className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Route Efficiency</span>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-1">94%</div>
                  <p className="text-sm text-muted-foreground">vs. 45% traditional routes</p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TruckIcon className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Collection Points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-400 line-through">50</span>
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span className="text-4xl font-bold text-green-500">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Main bins only</p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Today's Status</span>
                  </div>
                  <div className="text-4xl font-bold text-green-500 mb-1">2/3</div>
                  <p className="text-sm text-muted-foreground">Collections completed</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground">Pipeline Innovation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Underground pipelines automatically transfer waste from mini bins to main bins at 60% capacity, eliminating manual collection and reducing overflow.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Recycle className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-foreground">Smart Shredding</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Centralized shredding at main bins reduces waste volume by up to 70%, maximizing capacity and extending collection intervals.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Route className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-semibold text-foreground">94% Trip Reduction</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Trucks collect from 3 main bins instead of 50 mini bins, dramatically reducing fuel consumption, emissions, and traffic congestion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
