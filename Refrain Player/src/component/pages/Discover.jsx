import React from 'react'
import Genres from '../Genres'
import Nav2 from '../Nav2'
import CircleButton from '../button/CircleButton'
import Playlist from '../Playlist'
import Artist from '../Artist'
import Song from '../Song'
import Album from '../Album'

const Discover = () => {
  return (
    <div>
      <Nav2/>
      <div className='my-2 '>
        <h1 className='text-3xl font-bold my-3'>Music Genres</h1>
        <div className='flex items-center '>
      <Genres/>
      <CircleButton/>
      </div>
      </div>
      <div className='my-2'>
        <h1 className='text-3xl font-bold my-3'>Mood Playlist</h1>
        <div className='flex items-center'>
        <Playlist/>
        <CircleButton/>
        </div>
      </div>
      <div className='my-2'>
        <h1 className='text-3xl font-bold my-3'>Popular Artist</h1>
        <div className='flex items-center'>
        <Artist/>
        <CircleButton/>
        </div>
      </div>
      <div className='my-2'>
        <h1 className='text-3xl font-bold my-3'>New Release Songs</h1>
        <div className='flex items-center'>
        <Song/>
        <CircleButton/>
        </div>
      </div>
      <div className='my-2'>
        <h1 className='text-3xl font-bold my-3'>Top Album</h1>
        <div className='flex items-center'>
        <Album/>
        <CircleButton/>
        </div>
      </div>
    </div>
  )
}

export default Discover