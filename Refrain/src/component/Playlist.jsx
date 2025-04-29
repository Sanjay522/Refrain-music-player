import React from 'react'
import playlist from "../assets/playlist.png"

const Playlist = () => {
  return (
    <div className='flex h-40 w-37 m-3  bg-[#1f1f1f] rounded-sm justify-center items-start'>
           <div className=''>
               <img className='h-32' src={playlist} alt="" />
               <h1 className='py-1 '>Sad songs</h1>
           </div>
         
       </div>
  )
}

export default Playlist