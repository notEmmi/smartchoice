import React from 'react';
import './start.css';

const StartPage = () => {
	return (
		<div className='start-container'>
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