const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-subtle overflow-hidden">
      {/* Professional floating elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-10 blur-xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-tech rounded-full opacity-8 blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-professional animate-scale-in">
            <h2 className="heading-lg text-gradient-tech mb-6 text-center">
              Professional Summary
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                As a <span className="text-primary font-semibold">Senior Flutter Developer</span> with over 4 years of hands-on experience, 
                I specialize in architecting and delivering high-performance cross-platform mobile applications that serve millions of users.
              </p>
              <p>
                My expertise spans the complete mobile development lifecycle, from conceptualization to deployment, 
                with deep proficiency in <span className="text-accent font-medium">Clean Architecture</span>, 
                <span className="text-accent font-medium"> Test-Driven Development (TDD)</span>, and modern state management solutions 
                including <span className="text-accent font-medium">BLoC</span>, <span className="text-accent font-medium">GetX</span>, and <span className="text-accent font-medium">Provider</span>.
              </p>
              <p>
                I excel in seamless API integration, robust Firebase implementations, and efficient SQL database management. 
                My track record demonstrates consistent delivery of scalable solutions while fostering collaborative team environments 
                that drive innovation and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;