import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SportsAvailable from "@/components/sections/SportsAvailable";
import WhyChoose from "@/components/sections/WhyChoose";
import Tournaments from "@/components/sections/Tournaments";
import MembershipPlans from "@/components/sections/MembershipPlans";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <SportsAvailable />
        <WhyChoose />
        <Tournaments />
        <MembershipPlans />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
