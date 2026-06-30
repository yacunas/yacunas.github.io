import SpaceBackground from "@/components/space/SpaceBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <Nav />
      <main className="relative flex flex-1 flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
