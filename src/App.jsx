import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar></Navbar>
    <Blogs></Blogs>
    </div>
  )
}

export default App
