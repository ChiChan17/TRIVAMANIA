import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import SettingPage from './pages/SettingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='SettingPage' element={<SettingPage/>} />
    </Routes>
  )
}

export default App
