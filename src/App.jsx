<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Landing from "./components/Landing";
import RegistrationForm from "./components/RegistrationForm";
import SessionCard from "./components/Session";
import Particles from "./components/ui/Particles";
import Footer from "./components/Footer";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Landing from './components/Landing'
import RegistrationForm from './components/RegistrationForm'
import HarryPotterCard from './components/Card'
import SessionCard from './components/Session'
import Particles from './components/ui/Particles'
function App() {
  const [count, setCount] = useState(0)
>>>>>>> 125e025f72861ff7c75aaeda1528cb1e4a2fb2d7

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows */}
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
          <Landing />
          <SessionCard />
          <RegistrationForm />
        </Background>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
