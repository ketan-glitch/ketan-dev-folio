import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Kakashi Professional Background */}
      <div className="absolute inset-0 z-0 kakashi-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90"></div>
        {/* Mist overlay */}
        <div className="absolute inset-0 mist-overlay opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="heading-hero text-gradient-kakashi mb-6">
            KETAN KADAM
          </h1>
          <p className="animate-fade-in-up-delay text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Senior Flutter Developer
          </p>
          <p className="animate-fade-in-up-delay-2 text-lg text-tech-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Results-driven developer with 4+ years of experience crafting 
            high-quality cross-platform mobile applications for Android and iOS
          </p>

          {/* Contact Info */}
          <div className="animate-fade-in-up-delay flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 icon-glow" />
              <span>Thane, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 icon-glow" />
              <span>+91 8689814110</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 icon-glow" />
              <span>ketank39@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-professional group">
              <Mail className="w-4 h-4 mr-2 icon-hover" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-accent hover:border-accent/50 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/ktn-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-4 h-4 mr-2 icon-hover" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-tech rounded-full opacity-15 blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-kakashi rounded-full opacity-10 blur-lg animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;