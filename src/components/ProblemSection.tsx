import { Calendar, Trash2, Fuel, Wind } from 'lucide-react';

const problems = [
  {
    icon: Calendar,
    title: 'Fixed Collection Schedules',
    description: 'Trucks follow rigid routes regardless of actual bin fill levels, wasting resources on empty bins.',
  },
  {
    icon: Trash2,
    title: 'Mixed Waste Reduces Recycling',
    description: 'Without proper classification, recyclable materials end up in landfills, increasing environmental impact.',
  },
  {
    icon: Fuel,
    title: 'Overflowing Bins',
    description: 'Unpredictable fill rates lead to overflow, creating health hazards and urban aesthetic issues.',
  },
  {
    icon: Wind,
    title: 'High Carbon Emissions',
    description: 'Inefficient routes and unnecessary trips significantly increase fuel consumption and CO₂ output.',
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Current Waste Management is{' '}
            <span className="text-destructive">Inefficient</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cities worldwide struggle with outdated waste collection systems that harm 
            both the environment and municipal budgets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-6 group hover:border-destructive/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
