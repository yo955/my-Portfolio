"use client";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";

export const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "JS",
      title: "JavaScript Development",
      description: "Building dynamic and interactive web applications using modern JavaScript frameworks and libraries.",
      color: "bg-yellow-500"
    },
    {
      icon: "R",
      title: "React.js Development",
      description: "Creating scalable and maintainable user interfaces with React.js and its ecosystem.",
      color: "bg-blue-500"
    },
    {
      icon: "N",
      title: "Next.js Development",
      description: "Developing full-stack applications with Next.js for optimal performance and SEO.",
      color: "bg-black"
    },
    {
      icon: "N",
      title: "Node.js Development",
      description: "Building robust backend services and APIs using Node.js and Express.js.",
      color: "bg-green-500"
    },
    {
      icon: "T",
      title: "TailwindCSS Styling",
      description: "Creating beautiful and responsive designs with TailwindCSS utility-first approach.",
      color: "bg-cyan-500"
    },
    {
      icon: "C",
      title: "C# Development",
      description: "Developing enterprise-level applications using C# and .NET framework.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/80">
            // Services / <span className="text-gradient">Offers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            I offer a wide range of services to ensure you have the best written code and stay ahead in the competition.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-card hover:glow-primary transition-all duration-300 group overflow-hidden border border-border/50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-2xl font-bold">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
