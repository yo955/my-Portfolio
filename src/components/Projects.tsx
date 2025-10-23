"use client";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Nahdi Online - E-commerce Platform",
      company: "Nahdi Medical Company",
      description:
        "• Developed and maintained the company's e-commerce platform\n• Implemented real-time inventory management system\n• Integrated secure payment processing\n• Optimized performance resulting in 40% faster load times",
      tags: ["Next.js", "TypeScript", "Redux", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/400/300",
    },
    {
      title: "AI Dashboard - Analytics Platform",
      company: "Tech Solutions Inc.",
      description:
        "• Built interactive dashboard for AI model predictions\n• Implemented real-time data processing\n• Created beautiful data visualizations\n• Reduced data processing time by 60%",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Social Media App - ConnectHub",
      company: "Startup Co.",
      description:
        "• Developed full-stack social media application\n• Implemented real-time messaging system\n• Built user authentication and authorization\n• Created responsive mobile-first design",
      tags: ["React", "Firebase", "Redux", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground/80">
            Work Experience <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card hover:glow-primary transition-all duration-300 group overflow-hidden border border-border/50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.2),rgba(255,255,255,0))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span>{project.company}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {project.description}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center gap-1 text-green-500 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Live Preview</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
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
