import React, { useState } from "react";
import "../css/home.css"
import { MoodButton, CurrentMoodButton } from "./buttons";

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

	return (
		<div className="home-container">
			<h1>SmartChoice</h1>
			<div className="mood-form">
				<h2> How are you feeling today ?</h2>
				<div className="current-moods">
					{currentMoods.map((mood, idx) => (
						<CurrentMoodButton
							key={idx}
							mood={mood}
							onRemove={() => handleRemoveMood(mood)}
						/>
					))}
				</div>
				<div className="mood-buttons">
					{moods && moods
						.filter(mood => !currentMoods.includes(mood))
						.map((mood, idx) => (
							<MoodButton
								type="button"
								key={idx}
								onClick={() => handleMoodClick(mood)}
							>
								{mood}
							</MoodButton>
						))}
				</div>
			</div>
			<ul>
				{categories && categories.map((category, idx) => (
					<li key={idx}>
						<strong>{category.name}</strong>
						{category.options && (
							<ul>
								{category.options.map((opt, i) => (
									<li key={i}>
										<button type="button">
											{opt.label} (Weight: {opt.weight}, Moods: {opt.moods.join(', ')})
										</button>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	)
};

export default Home;