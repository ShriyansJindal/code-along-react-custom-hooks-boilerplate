import { useEffect, useState } from 'react'
import './App.css'
import useStorage from './CustomHooks/useStorage'
function App() {
  let {setStorage}= useStorage()

  return (
    <>
      <input type="text" placeholder='Enter Some Text'  onChange={(e)=>setStorage(e.target.value)}  />
    </>
  )
}

export default App



