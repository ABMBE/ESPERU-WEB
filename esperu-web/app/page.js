import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import ServicePlans from "@/components/sections/ServicePlans";
import Contact from "@/components/sections/Contact";
import Why from "@/components/sections/Why";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Solutions from "@/components/sections/Solutions";
import Sectors from "@/components/sections/Sectors";
import FeaturedServices from "@/components/sections/FeaturedServices";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Solutions/>
      <Sectors/>
      <FeaturedServices></FeaturedServices>
      <Why/>
      <ServicePlans/>
      <Contact/>
      <Footer/>
    <WhatsappButton/>
    </main>
    
  );
}