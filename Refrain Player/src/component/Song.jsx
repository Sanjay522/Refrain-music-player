import React from 'react'
import example from "../assets/example.png"

const Song = () => {
  return (
    <div className='flex h-50 w-50 m-3  bg-[#1f1f1f] rounded-sm justify-center items-center'>
        <div className=''>
            <img className='h-32' src={example} alt="" />
            <h1 className='py-1'>Whatever it Takes</h1>
            <p className='text-sm'>Imagin Dragons</p>
        </div>
      
    </div>
  )
}

export default Song