import React, { useState } from "react";
import "../css/home.css"
import { MoodButton, CurrentMoodButton, PersonalizedRecButton } from "./buttons";
import PlaceHolder from "../assets/placeholder.png";
import AddImage from "../assets/add.png";
import { Heart, Brain } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";

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

// Current moods section
const CurrentMoodsSection = ({ currentMoods, onRemove }) => (
	currentMoods.length > 0 && (
		<div className="selected-moods">
			<div className="moods-title">
				<Heart className="moods-icon heart-icon"/><h3>Selected Moods</h3>
			</div>
			<p className="tagline">Click to change your mind</p>
			<div className="mood-buttons current">
				{currentMoods.map((mood, idx) => (
					<CurrentMoodButton
						key={idx}
						mood={mood}
						onRemove={() => onRemove(mood)}
					/>
				))}
			</div>
		</div>
	)
);

// Mood buttons section
const MoodButtonsSection = ({ moods, currentMoods, onAdd }) => (
	<div className="available-moods">
		<div className="moods-title">
			<Brain className="moods-icon brain-icon"/><h3 className="moods-title">Available Moods</h3>
		</div>
		<p className="tagline">Choose your vibe</p>
		<div className="mood-buttons available">
			{moods && moods
				.filter(mood => !currentMoods.includes(mood))
				.map((mood, idx) => (
					<MoodButton
						type="button"
						key={idx}
						onClick={() => onAdd(mood)}
					>
						{mood}
					</MoodButton>
				))}
		</div>
	</div>
);

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
			<FormContainer title="How are you feeling?">
				{/* Optionally display a message or instructions */}
				<CurrentMoodsSection currentMoods={currentMoods} onRemove={handleRemoveMood} />
				<MoodButtonsSection moods={moods} currentMoods={currentMoods} onAdd={handleMoodClick} />
				<PersonalizedRecButton onClick={handleReccomendations} />
			</FormContainer>
			<CategoriesSection categories={categories} />
		</div>
	)
};

export default Home;