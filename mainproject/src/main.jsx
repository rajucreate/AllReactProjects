import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
