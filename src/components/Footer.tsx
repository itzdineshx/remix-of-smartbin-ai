import { Recycle, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary text-secondary-foreground">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg gradient-primary">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">SmartWaste</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              AI-powered waste classification, prediction, and optimized collection 
              for sustainable smart cities.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              IoT & Smart Cities Track
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Problem', 'Solution', 'Technology', 'Architecture', 'Dashboard', 'Impact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                team@smartwaste.io
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 SmartWaste. Built for the IoT & Smart Cities Hackathon.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
              <span>Made with</span>
              <span className="text-destructive">♥</span>
              <span>for sustainable cities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
