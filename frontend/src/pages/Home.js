import { About } from "../components/LandingPage/About.js";
import { Cta } from "../components/LandingPage/Cta";
import { FAQ } from "../components/LandingPage/FAQ";
import { Features } from "../components/LandingPage/Features";
import { Footer } from "../components/LandingPage/Footer";
import { Hero } from "../components/LandingPage/Hero";
import { HowItWorks } from "../components/LandingPage/HowItWorks";
import { Navbar } from "../components/LandingPage/Navbar";

import { Pricing } from "../components/LandingPage/Pricing";
import { ScrollToTop } from "../components/LandingPage/ScrollToTop";
import { Services } from "../components/LandingPage/Services";

import { Team } from "../components/LandingPage/Team";
import { Testimonials } from "../components/LandingPage/Testimonials";
import "../App.css";

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />

      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
