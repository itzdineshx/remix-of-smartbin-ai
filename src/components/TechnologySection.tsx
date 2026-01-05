import { Eye, AudioWaveform, Layers } from 'lucide-react';

const technologies = [
  {
    icon: Eye,
    title: 'Computer Vision',
    subtitle: 'Visual Recognition Engine',
    features: [
      'Real-time image classification',
      'Detects plastic, metal, organic, glass, paper',
      'CNN-based deep learning models',
      '95%+ classification accuracy',
    ],
    color: 'primary',
  },
  {
    icon: AudioWaveform,
    title: 'Audio Intelligence',
    subtitle: 'Sound Pattern Analysis',
    features: [
      'Material sound identification',
      'Converts audio to spectrograms',
      'Distinguishes metal vs plastic drops',
      'Complements visual data',
    ],
    color: 'chart-2',
  },
  {
    icon: Layers,
    title: 'Multimodal AI',
    subtitle: 'Fusion Intelligence',
    features: [
      'Combines image + audio predictions',
      'Weighted ensemble approach',
      'Higher accuracy than single modality',
      'Robust to noisy inputs',
    ],
    color: 'chart-1',
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-card">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            AI & Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powered by{' '}
            <span className="gradient-text">Multimodal AI</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our system combines state-of-the-art computer vision and audio analysis 
            for unprecedented waste classification accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                  <tech.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{tech.title}</h3>
                <p className="text-sm text-primary mb-4">{tech.subtitle}</p>
                
                <ul className="space-y-3">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Diagram */}
        <div className="mt-16 glass-card p-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <Eye className="h-10 w-10 text-primary" />
              <span className="font-medium text-foreground">Image Input</span>
              <span className="text-xs text-muted-foreground">Camera Feed</span>
            </div>
            
            <div className="h-px w-16 lg:h-16 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-primary to-primary/20 rotate-90 lg:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <AudioWaveform className="h-10 w-10 text-primary" />
              <span className="font-medium text-foreground">Audio Input</span>
              <span className="text-xs text-muted-foreground">Microphone</span>
            </div>
            
            <div className="h-px w-16 lg:h-16 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-primary to-primary/20 rotate-90 lg:rotate-0" />
            
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl gradient-primary text-primary-foreground shadow-lg">
              <Layers className="h-12 w-12" />
              <span className="font-bold">Multimodal Fusion</span>
              <span className="text-xs opacity-80">AI Processing</span>
            </div>
            
            <div className="h-px w-16 lg:h-16 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-primary to-primary/20 rotate-90 lg:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <span className="text-3xl">🎯</span>
              <span className="font-medium text-foreground">Classification</span>
              <span className="text-xs text-muted-foreground">95%+ Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
