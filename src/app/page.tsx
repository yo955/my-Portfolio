"use client";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import Hero3D from "../components/Hero3D";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
// import SpaceBackground from "../components/SpaceBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* <SpaceBackground /> */}
      <main className="relative z-10">
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
