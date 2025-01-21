import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equipments from './components/Equipments'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
    </div>
  )
}

export default App
