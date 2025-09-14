import { useRef, useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import Landing from "./components/Landing";
import RegistrationForm from "./components/RegistrationForm";
import SessionCard from "./components/Session";
import Particles from "./components/ui/Particles";
import Footer from "./components/Footer";

function App() {
  const registrationRef = useRef(null);

  // Force scroll to top on mount/reload
  useEffect(() => {

     if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
   window.scrollTo({ top: 60, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
        <div className="absolute inset-0 z-10">
          <Particles
            particleColors={["#ffffff", "#f6f4f1", "#f3f1ea"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={160}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <Background>
          <Landing
            onRegisterClick={() =>
              registrationRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />

          <SessionCard />

          <div ref={registrationRef}>
            <RegistrationForm />
          </div>
        </Background>
      </div>
      <Footer />
    </div>
  );
}

export default App;
