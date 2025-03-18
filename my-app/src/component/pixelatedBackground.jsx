import React from 'react';
import './pixelatedBackground.css';

const PixelatedBackground = () => {
	// Generate random stars/pixels
	const stars = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		top: `${Math.random() * 30}%`,
		left: `${Math.random() * 100}%`,
		size: `${Math.random() * 4 + 2}px`,
	}));

	// Generate random buildings
	const buildings = Array.from({ length: 10 }, (_, i) => ({
		id: i,
		height: `${Math.random() * 30 + 20}px`,
		width: `${Math.random() * 30 + 20}px`,
	}));

	return(
		<div className='background-container'>
			<div className='landscape'>
				<div className='buildings-container'>
					{buildings.map((building) => (
						<div key={building.id} className='building' style={{ height: building.height, width: building.width }} />
					))}
				</div>

				{stars.map((star) => (
					<div key={star.id} className='star' style={{ top: star.top, left: star.left, width: star.size, height: star.size }} />
				))}
			</div>
			<div className='clouds'></div>
		</div>
	);
};

export default PixelatedBackground;