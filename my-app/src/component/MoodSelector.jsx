import React from "react";
import "../css/MoodSelector.css";
import { MoodButton, CurrentMoodButton, PersonalizedRecButton } from "./Buttons";
import { Heart, Brain } from 'lucide-react';

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

const MoodSelector = ({ moods, currentMoods, onAdd, onRemove, onRecommendations }) => {
	return (
		<div className="mood-selector">
			<div className="mood-selector-top">
				<h2>How are you feeling?</h2>
			</div>
			<div className="mood-selector-content">
				<CurrentMoodsSection currentMoods={currentMoods} onRemove={onRemove} />
				<MoodButtonsSection moods={moods} currentMoods={currentMoods} onAdd={onAdd} />
				<PersonalizedRecButton onClick={onRecommendations} />
			</div>
		</div>
	);
};

export default MoodSelector;
