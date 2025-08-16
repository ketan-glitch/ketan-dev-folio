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
    <section id="education" className="relative py-20 kakashi-bg overflow-hidden">
      {/* Professional floating elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-primary rounded-full opacity-10 blur-xl animate-float"></div>
      <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-tech rounded-full opacity-8 blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-gradient-kakashi mb-4 animate-fade-in-up">
            Education & Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="card-professional animate-scale-in group">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 icon-glow" />
              <h3 className="heading-md text-primary group-hover:text-accent transition-colors duration-300">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-300">
                  <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-accent text-sm font-medium mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="card-professional animate-scale-in group" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 icon-glow" />
              <h3 className="heading-md text-primary group-hover:text-accent transition-colors duration-300">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 shadow-glow"></div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card-professional animate-scale-in group" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 icon-glow" />
              <h3 className="heading-md text-primary group-hover:text-accent transition-colors duration-300">
                Languages
              </h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                  <span className="text-foreground font-medium">{lang.language}</span>
                  <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full">
                    {lang.proficiency}
                  </span>
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