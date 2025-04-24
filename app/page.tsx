import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Pricing />
        <Cta />
      </div>
    </>
  );
}
