import React, { useState } from 'react';
import './start.css';

const Start = () => {
	const [isHovering, setIsHovering] = useState(false); // Added state for hover effect

	return (
		<div className='container'>
			<div className="panel">
				<h1 className="title">SmartChoice</h1>
				<button
					className={`start-button ${isHovering ? "hovering" : ""}`}
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					onClick={() => alert("Starting SmartChoice!")}
					>
					CLICK TO START
				</button>
			</div>
		</div>
	);
};

export default StartPage;