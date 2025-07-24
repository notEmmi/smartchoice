import React, { useState } from "react";
import "../css/HomePage.css"
import PlaceHolder from "../assets/placeholder.png";
import AddImage from "../assets/add.png";
import { useNavigate } from "react-router-dom";
import MoodSelector from "./MoodSelector";

function recommendActivities(categories, selectedMoods) {
  const results = [];

  for (const category of categories) {
    for (const activity of category.options) {
      let score = 0;

      if (selectedMoods.length > 0) {
        const moodMatches = activity.moods.filter(mood => selectedMoods.includes(mood)).length;
        score = moodMatches * activity.weight;
      } else {
        // If no moods selected, score by weight only
        score = activity.weight;
      }

      results.push({
        label: activity.label,
        category: category.name,
        score
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

// Categories section
const CategoriesSection = ({ categories }) => {
	const navigate = useNavigate();

	return (
		<div className="categories">
			{categories && categories.map((category, idx) => (
				<div
					className="category"
					key={idx}
					onClick={() => navigate(`/category/${encodeURIComponent(category.name)}`)}
				>
					<img src={PlaceHolder} className="category-image" alt={`Category ${category.name}`} />
					<p><strong>{category.name}</strong></p>
				</div>
			))}
			<div
				className="add-category"
				onClick={() => navigate("/addcategory")}
			>
				<img src={AddImage} className="add-image" alt="add image" />
				<p><strong>Add Category</strong></p>
			</div>
		</div>
	);
};

const Home = ({ categories, moods }) => {
	const [currentMoods, setCurrentMoods] = useState([])


	// Handler to add mood if not already selected
	const handleMoodClick = (mood) => {
		setCurrentMoods((prev) =>
			prev.includes(mood) ? prev : [...prev, mood]
		);
	};

	// Handler to remove mood
	const handleRemoveMood = (mood) => {
		setCurrentMoods((prev) => prev.filter(m => m !== mood));
	};

	const handleReccomendations = (currentMoods) => {

	}

	return (
		<div className="home-container">
			<h1>SmartChoice</h1>
			<p className="tagline">Discover activities tailored to your current mood and preferences</p>
			<MoodSelector 
				moods={moods}
				currentMoods={currentMoods}
				onAdd={handleMoodClick}
				onRemove={handleRemoveMood}
				onRecommendations={handleReccomendations}
			/>
			<CategoriesSection categories={categories} />
		</div>
	)
};

export default Home;