import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/ui/projects";
import Stack from "@/components/ui/stack";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero/>
      <Stack/>
      <Projects/>
      <Footer />
    </div>
  );
}
