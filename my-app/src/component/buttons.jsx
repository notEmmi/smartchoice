import React from 'react';
import '../css/Buttons.css';
import { HeartMinus, HeartPlus } from 'lucide-react';

// MoodButton: HeartPlus icon at end, text centered
export const MoodButton = ({ children, onClick }) => (
	<button onClick={onClick} className="mood-button" type="button">
		<span className="mood-btn-content">
			<span className="mood-btn-text">{children}</span>
			<HeartPlus className="moods-icon heartplus-icon" style={{ marginLeft: 10 }} />
		</span>
	</button>
);

// CurrentMoodButton: HeartMinus icon at end, text centered
export const CurrentMoodButton = ({ mood, onRemove }) => (
	<button
		type="button"
		className="current-mood-button"
		onClick={onRemove}
	>
		<span className="mood-btn-content">
			<span className="mood-btn-text">{mood}</span>
			<HeartMinus className="moods-icon heartminus-icon" style={{ marginLeft: 10 }} />
		</span>
	</button>
);

// StartButton
export const StartButton = ({ onClick, children }) => (
	<button
		onClick={onClick}
		className="start-button"
	>
		{children}
	</button>
);

export const PersonalizedRecButton = ({ onClick, children }) => (
	<button
		onClick={onClick}
		className="personalized-recc-button"
	>
		{children || "Get a SmartChoice"}
	</button>
);

export default null;