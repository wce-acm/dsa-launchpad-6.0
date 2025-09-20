import { useRef, useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Landing from "./components/Landing";
import RegistrationForm from "./components/RegistrationForm";
import SessionCard from "./components/Session";
import Particles from "./components/ui/Particles";
import Footer from "./components/Footer";
import loaderImage from "./assets/images/acmlogo.png"; // Replace with your image
import Gallary from "./components/Gallary";

function App() {
  const registrationRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 60, left: 0, behavior: "instant" });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <img
          src={loaderImage}
          alt="Loading..."
          className="w-40 h-40 fade-zoom-out"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
        {/* <div className="absolute inset-0 z-10">
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
        </div> */}

        <Background>
          <Landing
            onRegisterClick={() =>
              registrationRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />

          <SessionCard />
          <Gallary />

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
