import React from 'react'
import SlideSection from '../home-components/SlideSection'
import CommandantMsg from '../home-components/CommandantMsg'
import NewsAndEvents from '../home-components/NewsAndEvents'
import ArchitecturalElegance from '../home-components/ArchitecturalElegance'
import './Home.css'

const Home = () => {
  return (
    <div className='home-section'>
      <SlideSection/>
      <CommandantMsg/>
      <NewsAndEvents/>
      <ArchitecturalElegance/>
    </div>
  )
}

export default Home
