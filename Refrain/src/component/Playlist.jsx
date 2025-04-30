import React from 'react'
import playlist from "../assets/playlist.png"

const Playlist = () => {
  return (
    <div className='flex  h-28 w-28 justify-center items-start sm:flex sm:h-40 sm:w-37 sm:m-3  hover:bg-[#2e2d2d] rounded-sm sm:justify-center sm:items-start'>
           <div className=''>
               <img className='h-26 sm:h-32' src={playlist} alt="" />
               <h1 className='py-1 text-sm sm:py-1 '>Sad songs</h1>
           </div>
         
       </div>
  )
}

export default Playlist