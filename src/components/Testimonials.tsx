"use client";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Youssef is an exceptional developer with a keen eye for detail and a passion for creating beautiful, functional applications. His expertise in React and modern web technologies is outstanding.",
      author: "Ahmed Hassan",
      title: "CTO at Tech Solutions Inc.",
      avatar: "AH"
    },
    {
      quote: "Working with Youssef was a pleasure. He delivered high-quality code on time and was always available to discuss improvements and optimizations. Highly recommended!",
      author: "Sarah Mohamed",
      title: "Product Manager at Startup Co.",
      avatar: "SM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/80">
            // <span className="text-gradient">Testimonials</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Trusted by teammates, managers, and clients - see what others have to say about my work and collaboration.
          </p>

          <div className="flex justify-center mb-12">
            <Button className="bg-gradient-primary hover:bg-gradient-accent glow-primary">
              See More Reviews
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.author}
                className="bg-card/50 hover:glow-primary transition-all duration-300 group overflow-hidden border border-border/30"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8">
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
