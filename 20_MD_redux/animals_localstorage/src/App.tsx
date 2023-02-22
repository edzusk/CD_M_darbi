import './assets/css-reset.css'
import './assets/bootstrap-grid.css'
import './App.css'
import { useState } from 'react'

import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    </>
  )
}

export default App
