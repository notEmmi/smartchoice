import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Start from "./component/start.jsx";
import PixelatedBackground from './component/pixelatedBackground.jsx'; // Renamed to start with uppercase

function App() {
  return (
    <Router>
    <div className="app">
      <div className="app__background">
        <PixelatedBackground /> {/* Updated to use the correct component name */}
      </div>
      <div className="app__body">
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
