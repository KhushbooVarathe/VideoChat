import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const [value,setValue]=useState()
    const navigate=useNavigate()
    const joinmeet=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
  return (
    <div>
        <input type='text' placeholder='enter your code' value={value} onChange={e=>setValue(e.target.value)}/>
        <button onClick={joinmeet}>Join Meeting</button>
    </div>
  )
}

export default Home