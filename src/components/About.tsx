const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-16 text-gradient-tech">
            Professional Summary
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl card-glow">
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