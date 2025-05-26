import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

/* Import Routes */
import Start from "./component/start.jsx";
import Background from "./component/background.jsx"
import StyleGuide from "./component/styleGuide.jsx"
import Home from "./component/home.jsx"

const App = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await window.electronAPI.getCategories();
        setCategories(categories || []);
        console.log("Successfully loaded categories:", categories);
      } catch (err) {
        console.log("Failed to get categories:", err);
      }
    }
    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="app">
          <Background>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/home" element={<Home categories={categories} />} />
              <Route path="/styleguide" element={<StyleGuide />} />
            </Routes>
          </Background>
      </div>
    </Router>
  );
}

export default App
