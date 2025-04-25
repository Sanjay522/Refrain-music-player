import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="flex">
    <Nav />

  <div className="flex-grow">
    <Hero />
  </div>
</div>

  )
}

export default Home