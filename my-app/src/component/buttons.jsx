import React from 'react';
import '../css/buttons.css';
import { X } from 'lucide-react';

// Add the missing Button component
const Button = ({ onClick, children, className = '' }) => (
	<button onClick={onClick} className={className}>
		{children}
	</button>
);

// Example: MoodButton
export const MoodButton = ({ children, onClick }) => (
	<Button onClick={onClick} className="mood-button">
		{children}
	</Button>
);

// CurrentMoodButton: for selected moods with an "x" to remove
export const CurrentMoodButton = ({ mood, onRemove }) => (
	<button
		type="button"
		className="current-mood-button"
	>
		{mood}
		<span
			className="remove-x"
			onClick={e => {
				e.stopPropagation();
				onRemove();
			}}
			aria-label={`Remove ${mood}`}
			tabIndex={0}
			onKeyDown={e => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.stopPropagation();
					onRemove();
				}
			}}
			role="button"
		>
			<X size={16} />
		</span>
	</button>
);

// Example: StartButton
export const StartButton = ({ onClick, children }) => (
	<Button
		onClick={onClick}
		className="start-button"
	>
		{children}
	</Button>
);

export function PersonalizedRecButton(props) {
	return (
		<button className="personalized-recc-button" type="button" {...props}>
			Get Personalized Recommendations
		</button>
	);
}

export default Button;