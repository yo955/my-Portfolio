"use client";
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

function AnimatedPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.2}>
        <MeshDistortMaterial
          color="#38bdf8"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#9333ea"
          emissive="#9333ea"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: 'power4.out',
      });

      gsap.from('.hero-cta', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: 'power4.out',
      });

      gsap.from('.hero-badges', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-[1]" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333ea" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#34d399" />
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <AnimatedPlanet />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="hero-badges mb-8 flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold backdrop-blur-sm">
            ⚡ Frontend Developer
          </span>
          <span className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-semibold backdrop-blur-sm">
            🚀 3D Specialist
          </span>
        </div>

        <h1 className="hero-title text-6xl sm:text-7xl md:text-9xl font-black mb-8 leading-tight">
          <span className="gradient-text block">Building The</span>
          <span className="gradient-text block">Future Web</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Creating immersive digital experiences that push the boundaries of web technology
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group relative px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-cosmic"
          >
            <span className="relative z-10 text-background">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <a
            href="#contact"
            className="group px-10 py-5 border-2 border-primary/50 text-foreground rounded-2xl font-bold text-lg hover:border-primary hover:bg-primary/10 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-muted-foreground text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
