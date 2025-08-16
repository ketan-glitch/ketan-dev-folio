import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "WhizzAct",
      position: "Senior Flutter Developer",
      duration: "Apr 2025 – Present",
      location: "Mumbai, Maharashtra, India",
      current: true,
      highlights: [
        "Currently deployed at Logixal Inc, developing enterprise-grade cross-platform mobile applications",
        "Designed and implemented robust applications using Clean Architecture",
        "Applied TDD practices to deliver reliable, bug-free code",
        "Leveraged BLoC for efficient state management",
        "Conducted peer code reviews and mentored junior developers"
      ]
    },
    {
      company: "WatchYourHealth.com",
      position: "Senior Flutter Developer",
      duration: "Apr 2024 – Apr 2025",
      location: "Thane, Maharashtra, India",
      highlights: [
        "Developed cross-platform healthcare and insurance domain applications",
        "Integrated real-time APIs, Firebase, and custom backend services",
        "Optimized UI rendering and database queries for faster app load times"
      ]
    },
    {
      company: "Appdid Infotech",
      position: "Sr. Flutter Developer",
      duration: "Dec 2021 – Apr 2024",
      location: "Thane, Maharashtra, India",
      highlights: [
        "Built multiple client apps in e-commerce, CRM, and service-based platforms",
        "Worked on advanced features like Map SDK integrations, WebRTC (Agora), and payment gateways",
        "Migrated legacy apps to Flutter for improved maintainability"
      ]
    },
    {
      company: "Appdid Infotech",
      position: "Jr. Flutter Developer",
      duration: "Dec 2020 – Dec 2021",
      location: "Thane, Maharashtra, India",
      highlights: [
        "Started career journey in Flutter development",
        "Gained foundational experience in mobile app development",
        "Contributed to various client projects"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-gradient-tech mb-4 animate-fade-in-up">
            Professional Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Professional Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line opacity-60"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  className="relative pl-20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Professional Timeline Marker */}
                  <div className="absolute left-6 top-6 timeline-marker animate-glow-pulse"></div>
                  
                  <div className="card-professional group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="heading-md text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-medium mb-2">
                          <Building className="w-4 h-4 icon-glow" />
                          <span>{experience.company}</span>
                          {experience.current && (
                            <span className="bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-muted-foreground text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 icon-glow" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 icon-glow" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-glow"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;