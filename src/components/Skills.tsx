const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Android", "iOS", "Native API Integrations"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["Clean Architecture", "SOLID Principles", "MVC", "MVVM"]
    },
    {
      title: "State Management",
      skills: ["BLoC", "GetX", "Provider"]
    },
    {
      title: "Development Practices",
      skills: ["Test-Driven Development", "Agile Methodologies", "CI/CD"]
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "REST APIs", "SQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Postman", "Android Studio", "VS Code"]
    }
  ];

  return (
    <section className="py-20 ninja-bg relative">
      {/* Floating ninja elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-primary rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-16 text-gradient-primary">
          Core Competencies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-ninja rounded-xl p-6 shadow-ninja card-hover animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="heading-md mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;