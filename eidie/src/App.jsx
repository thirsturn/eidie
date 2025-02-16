import { useState } from 'react'
import Home from './Home'
import Notification from './Notification'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notifications" element={<Notification />}></Route>
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App
