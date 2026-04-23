import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Realisations from "@/components/Realisations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TrustBar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Realisations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
