import { useState } from 'react'
import Home from './Home/Home'
import Notification from './Notifications/Notification'
import Profile from './Myprofile/Profile'
import Add from './Myprofile/Add_account/Add'

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
          <Route path='/account' element={<Profile />}></Route>
          <Route path='/account/add_account' element={<Add />}></Route>
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App
