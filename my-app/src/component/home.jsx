import React, { useState } from "react";
import "../css/home.css"
import { MoodButton, CurrentMoodButton, PersonalizedRecButton } from "./buttons";
import DefaultImage from "../assets/logo.png"

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
		<>
			<h3>Selected Moods</h3>
			<div className="current-moods">
				{currentMoods.map((mood, idx) => (
					<CurrentMoodButton
						key={idx}
						mood={mood}
						onRemove={() => onRemove(mood)}
					/>
				))}
			</div>
		</>
	)
);

// Mood buttons section
const MoodButtonsSection = ({ moods, currentMoods, onAdd }) => (
	<>
		<h3>Available Moods</h3>
		<div className="mood-buttons">
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
	</>
);

// Categories section
const CategoriesSection = ({ categories }) => (
	<div className="categories">
		{categories && categories.map((category, idx) => (
			<div className="category" key={idx}>
				<img src={ DefaultImage } className="category-image" alt="Category" />
				<p><strong>{category.name}</strong></p>
			</div>
		))}
	</div>
);

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
			<div className="mood-form">
				<h2> How are you feeling  ?</h2>
				<CurrentMoodsSection currentMoods={currentMoods} onRemove={handleRemoveMood} />
				<MoodButtonsSection moods={moods} currentMoods={currentMoods} onAdd={handleMoodClick} />
				<PersonalizedRecButton />
			</div>
			<CategoriesSection categories={categories} />
		</div>
	)
};

export default Home;