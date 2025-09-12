import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Landing from './components/Landing'
import RegistrationForm from './components/RegistrationForm'
// import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Background>
      <Landing />
      <RegistrationForm/>
     </Background>
    </>
  )
}

export default App
