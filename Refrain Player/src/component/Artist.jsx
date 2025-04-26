import React from 'react'
import artist from  "../assets/artist.png"

const Artist = () => {
  return (
    <div>
        <div className='flex flex-col m-3 justify-center items-center'> 
            <img src={artist} alt="" />
            <p>Eminem</p>
        </div>
    </div>
  )
}

export default Artist