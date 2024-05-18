import Benefits from "./components/Benefits";
import CallToAct from "./components/CallToAct";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="w-full h-auto text-copy">
      <Hero />
      <Benefits />
      <CallToAct />
      <Services />
      <Cards />
    </main>
  );
}
