import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      Icon: Mail,
      label: "Email",
      value: "ketank39@gmail.com",
      href: "mailto:ketank39@gmail.com"
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+91 8689814110",
      href: "tel:+918689814110"
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Thane, Maharashtra, India",
      href: "#"
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ktn-dev",
      href: "https://www.linkedin.com/in/ktn-dev"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-subtle overflow-hidden">
      {/* Professional floating elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-gradient-primary rounded-full opacity-10 blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-tech rounded-full opacity-8 blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-gradient-tech mb-4 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up-delay">
            Ready to build something amazing together? I'm always open to discussing new opportunities, 
            innovative projects, and collaborative ventures in mobile development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card-professional group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-all duration-300">
                  <method.Icon className="w-6 h-6 icon-glow group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                  {method.label}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-professional max-w-2xl mx-auto animate-fade-in-up-delay-2">
            <h3 className="heading-md text-gradient-kakashi mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect 
              with a fellow developer, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-professional group">
                <Mail className="w-5 h-5 mr-2 icon-hover" />
                Send Message
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
                  <Linkedin className="w-5 h-5 mr-2 icon-hover" />
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