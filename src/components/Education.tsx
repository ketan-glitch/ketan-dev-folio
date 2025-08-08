import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) – Computer Engineering",
      institution: "Shivajirao S Jondhale College of Engineering",
      duration: "2016 – 2020"
    },
    {
      degree: "Diploma – Computer Engineering",
      institution: "Rajendra M. Mane College of Engineering",
      duration: "2013 – 2016"
    }
  ];

  const certifications = [
    "Build and Deploy Your First Web App with Modern Tooling",
    "Flutter Essential Training: Build for Multiple Platforms"
  ];

  const languages = [
    { language: "English", proficiency: "Full Professional Proficiency" },
    { language: "Hindi", proficiency: "Professional Working Proficiency" },
    { language: "Marathi", proficiency: "Native or Bilingual Proficiency" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="heading-lg text-center mb-16 text-gradient-primary">
          Education & Qualifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="bg-card rounded-xl p-6 shadow-lg card-hover animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="heading-md text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-xl p-6 shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="heading-md text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/90">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-xl p-6 shadow-lg card-hover animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-secondary" />
              <h3 className="heading-md text-foreground">Languages</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-foreground">{lang.language}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {lang.proficiency}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;