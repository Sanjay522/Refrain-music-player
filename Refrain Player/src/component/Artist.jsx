import React from 'react'
import artist from  "../assets/artist.png"

const Artist = () => {
  return (
   <div className='flex h-52 w-45  justify-center pt-2'>
           <div className=' flex flex-col justify-center items-center'>
               <img className='w-36' src={artist} alt="" />
               <h1 className='py-1 text-lg font-bold'>Eminem</h1>
           </div>
         
       </div>
  )
}

export default Artist