import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

/* Import Routes */
import Start from "./component/StartPage.jsx";
import Background from "./component/Frame.jsx";
import StyleGuide from "./component/StyleGuide.jsx";
import Home from "./component/HomePage.jsx"
import AddCategory from './component/AddCategory.jsx';
import Category from './component/CategoryPage.jsx';

const App = () => {
  const [categories, setCategories] = useState([])
  const [moods, setMoods] = useState([])
  const [currentMoods, setCurrentMoods] = useState(() => {
    // Load from localStorage on initial load
    const saved = localStorage.getItem('smartchoice-selected-moods');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever currentMoods changes
  useEffect(() => {
    localStorage.setItem('smartchoice-selected-moods', JSON.stringify(currentMoods));
  }, [currentMoods]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cats = await window.electronAPI.getCategories();
        const mds = await window.electronAPI.getMoods();
        setCategories(cats || []);
        setMoods(mds || []);
        console.log("Loaded categories:", cats);
        console.log("Loaded moods:", mds);
      } catch (e) {
        console.error("Failed to load data", e);
        setCategories([]);
        setMoods([]);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Background>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={
              <Home 
                categories={categories} 
                moods={moods} 
                currentMoods={currentMoods}
                setCurrentMoods={setCurrentMoods}
              />
            } />
            <Route path="/styleguide" element={<StyleGuide />} />
            <Route path="/addcategory" element={<AddCategory categories={categories} setCategories={setCategories} moods={moods} setMoods={setMoods} />} />
            <Route path="/category/:name" element={<Category categories={categories} moods={moods} />} />
          </Routes>
        </Background>
      </div>
    </Router>
  );
}

export default App
