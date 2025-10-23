"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "hello@developer.com",
            href: "mailto:hello@developer.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "San Francisco, CA",
            href: "#",
        },
    ];

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div
                    ref={ref}
                    className={`max-w-6xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Let&apos;s <span className="text-gradient">Talk</span>
                        </h2>
                        <p className="text-xl text-foreground/80 mb-2">We&apos;d love to help</p>
                        <p className="text-lg text-muted-foreground">
                            Crafting innovative solutions to solve real-world problems
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div
                                            key={info.label}
                                            className="flex items-center gap-4 p-4 glass-card rounded-lg hover:glow-primary transition-all duration-300"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <div className="p-3 rounded-lg bg-primary/20">
                                                <info.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                                                <a
                                                    href={info.href}
                                                    className="font-medium text-foreground hover:text-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Input
                                            placeholder="Full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-card border-border/50 focus:glow"
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="bg-card border-border/50 focus:glow"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Input
                                        placeholder="Subject"
                                        className="bg-card border-border/50 focus:glow"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        placeholder="Message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        className="bg-card border-border/50 focus:glow resize-none"
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-gradient-accent glow-primary">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};