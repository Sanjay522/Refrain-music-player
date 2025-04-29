import React from 'react'
import playlist from "../assets/playlist.png"


const Album = () => {
  return (
     <div className='flex h-52 w-45 m-3  bg-[#1f1f1f] rounded-sm justify-center pt-2'>
             <div className=''>
                 <img className='w-40' src={playlist} alt="" />
                 <h1 className='py-1 text-sm font-bold'>Whatever it Takes</h1>
                 <p className='text-xs'>Imagin Dragons</p>
             </div>
           
         </div>
      
  )
}

export default Album