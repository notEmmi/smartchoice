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
import LoadingPage from './component/LoadingPage.jsx';

const App = () => {
  const [categories, setCategories] = useState([])
  const [moods, setMoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentMoods, setCurrentMoods] = useState([]);

  // Save to data.json whenever currentMoods changes
  useEffect(() => {
    if (!isLoading) {
      window.electronAPI?.setSelectedMoods?.(currentMoods);
    }
  }, [currentMoods, isLoading]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cats = await window.electronAPI.getCategories();
        const mds = await window.electronAPI.getMoods();
        const selectedMds = await window.electronAPI.getSelectedMoods();
        setCategories(cats || []);
        setMoods(mds || []);
        setCurrentMoods(selectedMds || []);
        console.log("Loaded categories:", cats);
        console.log("Loaded moods:", mds);
        console.log("Loaded selected moods:", selectedMds);
      } catch (e) {
        console.error("Failed to load data", e);
        setCategories([]);
        setMoods([]);
        setCurrentMoods([]);
      } finally {
        setIsLoading(false);
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
              isLoading ? <LoadingPage /> : (
                <Home 
                  categories={categories} 
                  moods={moods} 
                  currentMoods={currentMoods}
                  setCurrentMoods={setCurrentMoods}
                />
              )
            } />
            <Route path="/styleguide" element={<StyleGuide />} />
            <Route path="/addcategory" element={
              isLoading ? <LoadingPage /> : (
                <AddCategory 
                  categories={categories} 
                  setCategories={setCategories} 
                  moods={moods} 
                  setMoods={setMoods} 
                />
              )
            } />
            <Route path="/category/:name" element={
              isLoading ? <LoadingPage /> : (
                <Category categories={categories} moods={moods} />
              )
            } />
          </Routes>
        </Background>
      </div>
    </Router>
  );
}

export default App
