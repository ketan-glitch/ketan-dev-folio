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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-16 text-gradient-tech">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.duration}`}
                className="relative pl-12 md:pl-20 pb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <div className="card-cosmic rounded-xl p-6 md:p-8 shadow-cosmic card-hover relative overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-primary rounded-full opacity-5 blur-2xl"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="heading-md text-foreground mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                        {exp.current && (
                          <span className="bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/90">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;