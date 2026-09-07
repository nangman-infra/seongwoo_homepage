import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Statement />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
