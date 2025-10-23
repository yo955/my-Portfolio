"use client";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
}

export default function Hero3D() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typing animation sequence
      const tl = gsap.timeline();
      
      tl.to('.hero-title', {
        opacity: 1,
        duration: 0.5,
        onComplete: () => setShowContent(true)
      });

      tl.to('.hero-subtitle', {
        opacity: 1,
        duration: 0.5,
        delay: 0.5
      });

      // Image animation
      tl.fromTo(imageRef.current, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
      );

      // Floating animation for image
      tl.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      }, '-=0.5');

      // Animated circles around image
      tl.to('.floating-circle-1', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none'
      }, '-=1');

      tl.to('.floating-circle-2', {
        rotation: -360,
        duration: 6,
        repeat: -1,
        ease: 'none'
      }, '-=1');

      tl.to('.floating-circle-3', {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'none'
      }, '-=1');

      tl.to('.hero-cta', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">&lt;/&gt;</div>
              <span className="text-xl font-semibold text-foreground">Youssef Shaaban</span>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-2 glass-card text-foreground rounded-lg font-medium hover:glow-primary transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse glow-primary"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse glow-accent"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse glow-secondary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <h2 className="text-xl text-foreground/80 mb-4">Hi, I&apos;m</h2>
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight opacity-0">
                <span className="text-foreground block">
                  {showContent && <TypewriterText text="Youssef Shaaban" />}
                </span>
                <span className="gradient-text block mt-4">
                  {showContent && <TypewriterText text="Frontend Developer" delay={1} />}
                </span>
              </h1>
            </div>
            
            <p className="hero-subtitle text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 max-w-2xl">
              {showContent && (
                <TypewriterText 
                  text="I turn ideas into extraordinary digital experiences. Ready to work on your next project." 
                  delay={2}
                />
              )}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+50</div>
                <div className="text-sm text-muted-foreground">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+2</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-primary"
              >
                <span className="relative z-10 text-primary-foreground">View My Work</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <a
                href="#contact"
                className="group px-8 py-4 glass-card text-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 relative overflow-hidden border border-primary/30"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-cosmic translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image with Animation */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Animated Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="floating-circle-1 absolute w-96 h-96 border-2 border-primary/30 rounded-full"></div>
                <div className="floating-circle-2 absolute w-80 h-80 border-2 border-accent/30 rounded-full"></div>
                <div className="floating-circle-3 absolute w-72 h-72 border-2 border-secondary/30 rounded-full"></div>
              </div>

              {/* Profile Image Container */}
              <div
                ref={imageRef}
                className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glow-primary opacity-0"
              >
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Youssef Shaaban"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce glow-accent"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce glow-secondary" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary rounded-full animate-ping glow-primary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Skills */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 flex-wrap">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Three.js'].map((tech) => (
              <div 
                key={tech}
                className="glass-card px-4 py-2 rounded-full glow-secondary text-sm font-medium hover:scale-110 transition-transform duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}