import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/start.css';
import logo from '../assets/logo.png'
import { StartButton } from './buttons';

const Start = () => {
	const navigate = useNavigate();

	return (
		<div className='start-container'>
			<img src={logo} className='hero-logo' alt="SmartChoice Logo" />

			<h1>SmartChoice</h1>
			<p className='tagline'>Decide Less. Do more.</p>
			{/* <p>Find the perfect activity based on your mood with just a few clicks.</p> */}
			<StartButton
				onClick={() => navigate('/home')}
				aria-label="Start SmartChoice"
			>
				CLICK TO START
			</StartButton>

			<StartButton
				className='start-button'
				onClick={() => navigate('/styleguide')}
				aria-label="Go to Style Guide"
			>
				STYLE GUIDE
			</StartButton>
		</div>
	);
};

export default Start;