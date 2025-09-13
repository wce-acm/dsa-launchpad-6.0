import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Landing from './components/Landing'
import RegistrationForm from './components/RegistrationForm'
// import RegistrationForm from './components/RegistrationForm'
import HarryPotterCard from './components/Card'
import SessionCard from './components/Session'
import Particles from './components/ui/Particles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="relative w-full h-screen">
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
      <SessionCard/>
      <RegistrationForm/>
     </Background>
     </div>
    </>
  )
}

export default App
