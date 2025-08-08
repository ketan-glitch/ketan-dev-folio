import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ketank39@gmail.com",
      href: "mailto:ketank39@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8689814110",
      href: "tel:+918689814110",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thane, Maharashtra, India",
      href: "#",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ktn-dev",
      href: "https://www.linkedin.com/in/ktn-dev",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6 text-gradient-tech">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your mobile app ideas to life? I'm always excited to discuss 
            new opportunities and challenging projects in Flutter development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="card-ninja rounded-xl p-6 shadow-ninja card-hover text-left block animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary/10 ${method.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="card-ninja rounded-2xl p-8 shadow-ninja card-glow relative overflow-hidden">
            {/* Ninja glow effect */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-ninja rounded-full opacity-10 blur-3xl"></div>
            <h3 className="heading-md mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a new mobile app, want to migrate to Flutter, 
              or require consultation on mobile development best practices, 
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient" asChild>
                <a href="mailto:ketank39@gmail.com">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start a Conversation
                </a>
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
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;