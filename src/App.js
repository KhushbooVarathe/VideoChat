import logo from './logo.svg'
import './App.css'
import React, { useRef } from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Room from './component/Room'
function App () {
  const myRef = useRef(null)
  return (
    <div className='App'>
      <Routes>
<Route path='/' element={<Home />} />   
  <Route path='/room/:roomid' element={<Room />} />        
   
      </Routes>
    </div>
  )
}

export default App
