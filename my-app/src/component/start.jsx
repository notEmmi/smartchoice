import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/start.css';
import logo from '../assets/logo.png'

const Start = () => {
	const navigate = useNavigate();

	return (
		<div className='start-container'>
				<img src={logo} className='hero-logo' alt="SmartChoice Logo" />

				<h1>SmartChoice</h1>
				<p className='tagline'>Decide Less. Do more.</p>
				{/* <p>Find the perfect activity based on your mood with just a few clicks.</p> */}
				<button
					className='start-button'
					onClick={() => navigate('/home')}
					aria-label="Start SmartChoice"
				>
					CLICK TO START
				</button>

		</div>

	);
};

export default Start;