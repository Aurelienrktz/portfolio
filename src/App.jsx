import { useState, useEffect } from "react";
import Header from "./component/header";
import Hero from "./component/hero";
import Parcours from "./component/parcours";
import Certificat from "./component/certificat";
import Projets from "./component/projets";
import TechSkills from "./component/techSkills";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Animation from "./assets/animation";

function App() {
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setFade(true); // fade in
      }, 500); // durée du fade
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  Animation();

  return (
    <div className="bg-slate-950/90 text-slate-200">
      <Header />
      <Hero />
      <Parcours />
      <Certificat />
      <Projets />
      <TechSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
