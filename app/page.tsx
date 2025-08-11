import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
