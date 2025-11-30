import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LineUp from "@/components/LineUp";
import Owner from "@/components/Owner";


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <LineUp/>
      <Owner />
      <Footer />
    </>
  );
}
