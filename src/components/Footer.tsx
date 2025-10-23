import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 py-16 bg-card/30">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-2xl font-bold text-primary">&lt;/&gt;</div>
                            <span className="text-xl font-semibold text-foreground">Youssef Shaaban</span>
                        </div>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Building fast, accessible, and beautiful web experiences
                        </p>
                        <div className="flex gap-3">
                            <Button size="icon" variant="ghost" className="glass-card hover:glow-primary" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="glass-card hover:glow-accent" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button size="icon" variant="ghost" className="glass-card hover:glow-secondary" asChild>
                                <a href="mailto:youssef@example.com" target="_blank" rel="noopener noreferrer">
                                    <Mail className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Navigation</h3>
                        <div className="space-y-3">
                            <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
                            <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                            <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
                            <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Services</a>
                            <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">youssef@example.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">+20 123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">Cairo, Egypt</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/40 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} - Copyright. All Rights Reserved.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Built with React, TypeScript & Three.js
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};