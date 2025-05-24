import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

/* Import Routes */
import Start from "./component/start.jsx";
import Background from "./component/background.jsx"
import StyleGuide from "./component/styleGuide.jsx"

function App() {
  return (
    <Router>
      <div className="app">
          <Background>
            <Routes>
              <Route path="/" element={<Start />} />
              {/* <Route path="/categories" element={Categories} /> */}
              <Route path="/styleguide" element={<StyleGuide />} />
            </Routes>
          </Background>
      </div>
    </Router>
  );
}

export default App
