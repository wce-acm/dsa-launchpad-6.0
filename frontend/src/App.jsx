import { useRef, useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Landing from "./components/Landing";
import RegistrationForm from "./components/RegistrationForm";
import SessionCard from "./components/Session";
import Particles from "./components/ui/Particles";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import EventSpotlight from "./components/Event";
import Loader from "./components/ui/Loader"; // <-- Import the new Loader
import RegistrationSection from "./components/RegistrationSection";
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
        <Loader /> {/* <-- Use the spinning loader here */}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
        {/* Uncomment if you want particles */}
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
          <EventSpotlight mt-16 />
          <Gallary />

          <div ref={registrationRef}>
            <RegistrationForm />
          </div>
          <RegistrationSection
        formLink="https://forms.gle/f8od9FdNBeUcgHnK8"
        message="Also fill the below form to register and secure your spot."
      />
        </Background>
      </div>
      <Footer />
    </div>
  );
}

export default App;
