import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/StartPage.css';
import logo from '../assets/logo.png'
import { StartButton } from './Buttons';

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
			>
				CLICK TO START
			</StartButton>

			<StartButton
				className='start-button'
				onClick={() => navigate('/styleguide')}
			>
				STYLE GUIDE
			</StartButton>
		</div>
	);
};

export default Start;