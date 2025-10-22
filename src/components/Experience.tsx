"use client";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and TypeScript, improving performance by 40%.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2019 - 2020",
      description: "Built and maintained company website, implemented new features, and collaborated with design team.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            My professional journey in software development
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary glow-primary" />
                
                <div className="glass-card p-6 hover:glow-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="text-foreground/60">•</span>
                        <span className="text-foreground/60">{exp.period}</span>
                      </div>
                      <p className="text-foreground/70">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};