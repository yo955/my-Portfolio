"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
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
                    className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>

                    <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <Card
                                    key={info.label}
                                    className="glass-card hover:glow-accent transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-accent/20">
                                                <info.icon className="h-5 w-5 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                                                <a
                                                    href={info.href}
                                                    className="font-medium hover:text-accent transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="lg:col-span-2 glass-card">
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div>
                                        <Textarea
                                            placeholder="Your Message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            className="bg-background/50 resize-none"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full glow-primary">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};