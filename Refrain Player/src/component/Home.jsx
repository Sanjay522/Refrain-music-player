import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Song from './Song'
import Artist from './Artist'
import Playlist from './Playlist'
import SongLine from './SongLine'

const Home = () => {
  return (
    <div className="flex">
    <Nav />

  <div className="flex-grow">
    <Hero />
    <div className='flex'>
      <Song/>
      <Song/>
      <Song/>
      <Song/>
      <Song/>
    </div>
    <div className='flex'>
    <Artist/>
    <Artist/>

    <Artist/>

    <Artist/>

    <Artist/>

    </div>
    <div>
      <Playlist/>
    </div>
    <SongLine/>
  </div>
</div>

  )
}

export default Home