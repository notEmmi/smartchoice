import React, { useState } from 'react';
import '../css/start.css';

const Start = () => {
	const [isHovering, setIsHovering] = useState(false); // Added state for hover effect

	return (
			<div className='start-container'>
					<h1 className="title">SmartChoice</h1>
					<button
						className={`start-button ${isHovering ? "hovering" : ""}`}
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
						onClick={() => alert("Starting SmartChoice!")}
						aria-label="Start SmartChoice"
					>
						CLICK TO START
					</button>
			</div>
	);
};

export default Start;