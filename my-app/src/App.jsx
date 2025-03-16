import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Start from "./component/startpage.jsx";
import backgroundImage from './assets/background.png';

function App() {
  return (
    <div className="app">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
