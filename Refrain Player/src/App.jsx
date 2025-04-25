import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './component/Home'
import Nav from './component/Nav'
import Nav2 from './component/Nav2'
import Line from './component/Line'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[90vw] m-auto my-5'>
        <Home/>
      </div>
    </>
  )
}

export default App
