import React from 'react';
import '../css/buttons.css';
import { X } from 'lucide-react';

// Example: MoodButton
export const MoodButton = ({ children, onClick }) => (
	<Button onClick={onClick} className="mood-button">
		{children}
	</Button>
);

// CurrentMoodButton: for selected moods with an "x" to remove
export const CurrentMoodButton = ({ mood, onRemove }) => (
	<Button
		onClick={onRemove}
		className="current-mood-button"
	>
		 { mood }
	</Button>
);

// Example: StartButton
export const StartButton = ({ onClick, children = 'CLICK TO START', ariaLabel = "Start SmartChoice" }) => (
	<Button
		onClick={onClick}
		className="start-button"
	>
		<span aria-label={ariaLabel}>{children}</span>
	</Button>
);

export default Button;