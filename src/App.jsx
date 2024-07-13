import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <h1>LIST</h1>
       <Navbar/>
      <Routes>
        
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
        </Routes>
        
        </>  
  )
}

export default App