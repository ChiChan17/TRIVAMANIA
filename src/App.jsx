import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage' // HOME PAGE
import SettingPage from './pages/SettingPage' //SETTINGS PAGE
import { GlobalStateProvider } from './GlobalState' //GLOBAL variables
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  return (
    <GlobalStateProvider>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='SettingPage' element={<SettingPage/>} />
      </Routes>
    </GlobalStateProvider>
  )
}

export default App
