const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle ninja-bg relative">
      {/* Floating ninja elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-primary rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-16 text-gradient-tech">
            Professional Summary
          </h2>
          
          <div className="card-ninja rounded-2xl p-8 md:p-12 shadow-ninja relative overflow-hidden">
            {/* Subtle ninja glow inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-ninja rounded-full opacity-10 blur-3xl"></div>
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Results-driven <strong className="text-primary">Senior Flutter Developer</strong> with 4+ years 
              of hands-on experience in designing, developing, and deploying high-quality cross-platform 
              mobile applications for Android and iOS.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Proficient in <strong className="text-accent">Clean Architecture</strong>, 
              <strong className="text-secondary"> Test-Driven Development (TDD)</strong>, and advanced 
              state management solutions such as <strong className="text-primary">BLoC, GetX, and Provider</strong>.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              Adept at building scalable, maintainable, and user-centric applications, integrating APIs, 
              and working with Firebase and SQL databases. Recognized for delivering 
              <strong className="text-success"> 20+ successful projects</strong>, mentoring junior developers, 
              and collaborating with global teams to create innovative, high-performance mobile experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;