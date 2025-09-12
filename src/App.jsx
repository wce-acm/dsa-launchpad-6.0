import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Background>
      <Landing />
     </Background>
    </>
  )
}

export default App
