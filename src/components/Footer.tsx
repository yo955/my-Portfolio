import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-foreground/60">
                            © {currentYear} Frontend Developer. All rights reserved.
                        </p>
                        <p className="text-sm text-foreground/40 mt-1">
                            Built with React, TypeScript & Three.js
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Button size="icon" variant="ghost" asChild>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button size="icon" variant="ghost" asChild>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button size="icon" variant="ghost" asChild>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};