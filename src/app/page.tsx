import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="aurora relative flex flex-1 flex-col overflow-hidden text-slate-100">
      <ParticlesBackground />
      <Hero />
    </main>
  );
}
