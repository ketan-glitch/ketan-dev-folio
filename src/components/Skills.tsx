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
    <section id="skills" className="relative py-20 kakashi-bg">
      {/* Professional floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full opacity-10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-tech rounded-full opacity-8 blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-gradient-kakashi mb-4 animate-fade-in-up">
            Core Competencies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="card-professional animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="heading-md text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag-pro">
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