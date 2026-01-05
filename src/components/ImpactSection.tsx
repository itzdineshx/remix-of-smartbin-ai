import { TrendingDown, Fuel, Wind, Recycle, Building2, Award } from 'lucide-react';

const impacts = [
  {
    icon: TrendingDown,
    value: '25%',
    label: 'Fewer Collection Trips',
    description: 'Optimized routes eliminate unnecessary pickups',
  },
  {
    icon: Fuel,
    value: '40%',
    label: 'Fuel Reduction',
    description: 'Shorter, smarter routes save fuel',
  },
  {
    icon: Wind,
    value: '35%',
    label: 'Lower CO₂ Emissions',
    description: 'Significant carbon footprint reduction',
  },
  {
    icon: Recycle,
    value: '60%',
    label: 'Better Recycling',
    description: 'Accurate classification improves rates',
  },
  {
    icon: Building2,
    value: '15%',
    label: 'Cost Savings',
    description: 'Reduced operational expenses',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Classification Accuracy',
    description: 'Multimodal AI precision',
  },
];

const sdgs = [
  { number: 11, title: 'Sustainable Cities', color: 'bg-amber-500' },
  { number: 12, title: 'Responsible Consumption', color: 'bg-yellow-600' },
  { number: 13, title: 'Climate Action', color: 'bg-green-600' },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Impact & Sustainability
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Measurable{' '}
            <span className="gradient-text">Environmental Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results that contribute to cleaner cities and a healthier planet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={impact.label}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <impact.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{impact.value}</div>
              <h3 className="font-semibold text-foreground mb-1">{impact.label}</h3>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Aligned with UN Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className={`${sdg.color} text-primary-foreground rounded-xl p-4 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform`}
              >
                <div className="text-3xl font-bold">{sdg.number}</div>
                <div className="text-sm font-medium leading-tight max-w-[100px]">{sdg.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
