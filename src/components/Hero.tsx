import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden stars-bg">
      {/* Cosmic background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cosmicBg}
          alt="Cosmic space background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        {/* Nebula effect overlay */}
        <div className="absolute inset-0 bg-gradient-nebula"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="heading-hero text-gradient-primary mb-6">
            KETAN KADAM
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Senior Flutter Developer
          </p>
          <p className="text-lg text-tech-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Results-driven developer with 4+ years of experience crafting 
            high-quality cross-platform mobile applications for Android and iOS
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Thane, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 8689814110</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>ketank39@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/ktn-dev" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Cosmic decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-30 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-tech rounded-full opacity-25 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-cosmic rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;