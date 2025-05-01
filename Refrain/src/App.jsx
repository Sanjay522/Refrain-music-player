import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './component/Home'
import Nav from './component/Nav'
import Nav2 from './component/Nav2'
import Line from './component/Line'
import Hero from './component/Hero'
import Discove from './component/pages/Discover'
import Discover from './component/pages/Discover'
import AlbumPage from './component/pages/AlbumPage'
import ArtistPage from './component/pages/ArtistPage'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' w-full sm:w-[90vw] m-auto sm:my-5 flex'>
        <Nav/>
        <div className='flex-grow'>
          <Home/>
        <Discover/>
        <AlbumPage/>
        <ArtistPage/>
        <Footer/>

        </div>

      </div>
    </>
  )
}

export default App
