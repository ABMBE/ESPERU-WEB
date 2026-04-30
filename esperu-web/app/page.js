import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/sections/Services";
import Plans from "@/components/sections/Planes";
import Contact from "@/components/sections/Contact";
import Why from "@/components/sections/Why";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Services/>
      <Why/>
      <Plans/>
      <Contact/>
      <Footer/>
    <WhatsappButton/>
    </main>
    
  );
}