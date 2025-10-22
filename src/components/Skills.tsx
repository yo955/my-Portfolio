"use client";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Three.js", level: 80 },
        { name: "GSAP", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "Git", level: 90 },
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div
                    ref={ref}
                    className={`max-w-4xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        <span className="text-gradient">Skills</span> & Technologies
                    </h2>

                    <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
                        Constantly learning and mastering the latest technologies to deliver
                        exceptional results
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="space-y-2"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-foreground/60">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: inView ? `${skill.level}%` : '0%',
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        {["JavaScript", "HTML5", "CSS3", "REST API", "GraphQL", "Redux", "Jest", "Webpack", "Vite", "Figma"].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 glass-card text-sm font-medium hover:glow-accent transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
