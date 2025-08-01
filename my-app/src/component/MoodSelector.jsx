import React, { useState } from "react";
import "../css/MoodSelector.css";
import { MoodButton, CurrentMoodButton, PersonalizedRecButton } from "./Buttons";
import { Heart, Brain, Minus, ChevronDown, ChevronUp, Maximize2 } from 'lucide-react';

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
const MoodButtonsSection = ({ moods, currentMoods, onAdd }) => {
	const [showAll, setShowAll] = useState(false);
	const availableMoods = moods && moods.filter(mood => !currentMoods.includes(mood));
	const INITIAL_DISPLAY_COUNT = 8;
	
	const moodsToShow = showAll ? availableMoods : availableMoods?.slice(0, INITIAL_DISPLAY_COUNT);
	const hasMoreMoods = availableMoods && availableMoods.length > INITIAL_DISPLAY_COUNT;

	return (
		<div className="available-moods">
			<div className="moods-title">
				<Brain className="moods-icon brain-icon"/><h3 className="moods-title">Available Moods</h3>
			</div>
			<p className="tagline">Choose your vibe</p>
			<div className="mood-buttons available">
				{moodsToShow && moodsToShow.map((mood, idx) => (
					<MoodButton
						type="button"
						key={idx}
						onClick={() => onAdd(mood)}
					>
						{mood}
					</MoodButton>
				))}
			</div>
			{hasMoreMoods && (
				<button 
					className="show-all-button" 
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? (
						<><ChevronUp className="show-all-icon" /> Show Less</>
					) : (
						<><ChevronDown className="show-all-icon" /> Show All ({availableMoods.length - INITIAL_DISPLAY_COUNT} more)</>
					)}
				</button>
			)}
		</div>
	);
};

const MoodSelector = ({ moods, currentMoods, onAdd, onRemove, onRecommendations }) => {
	const [isMinimized, setIsMinimized] = useState(false);

	const toggleMinimize = () => {
		setIsMinimized(!isMinimized);
	};

	if (isMinimized) {
		return (
			<div className="mood-selector minimized">
				<div className="mood-selector-top minimized">
					<div className="minimized-content">
						<h3>Selected Moods</h3>
						<div className="minimized-moods">
							{currentMoods.length > 0 ? (
								currentMoods.map((mood, idx) => (
									<p key={idx} className="minimized-mood-tag">
										{mood}
									</p>
								))
							) : (
								<p className="no-moods-text">No moods selected</p>
							)}
						</div>
					</div>
					<Maximize2 
						className="mood-expand-icon" 
						onClick={toggleMinimize}
						alt="Expand mood selector"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="mood-selector">
			<div className="mood-selector-top">
				<h2>How are you feeling?</h2>
				<Minus 
					className="mood-minus-icon" 
					onClick={toggleMinimize}
					alt="Minimize mood selector"
				/>
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
