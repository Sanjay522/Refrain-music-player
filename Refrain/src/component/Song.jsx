import React from 'react'
import example from "../assets/example.png"

const Song = () => {
  return (
    <div className='flex h-52 w-45 m-3  bg-[#1f1f1f] rounded-sm justify-center pt-2'>
        <div className=''>
            <img className='w-36' src={example} alt="" />
            <h1 className='py-1 text-sm font-bold'>Whatever it Takes</h1>
            <p className='text-xs'>Imagin Dragons</p>
        </div>
      
    </div>
  )
}

export default Song