import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

/* Import Routes */
import Start from "./component/start.jsx";
// import Categories from './component/categories.jsx';

function App() {
  return (
    <Router>
      <div className="app">

        <div className="app__body">
          <Routes>
            <Route path="/" element={<Start />} />
            {/* <Route path="/categories" element={Categories} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
