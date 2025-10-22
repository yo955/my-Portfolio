import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import Hero3D from "../components/Hero3D";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import SpaceBackground from "../components/SpaceBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <SpaceBackground />
      <main className="relative z-10">
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
