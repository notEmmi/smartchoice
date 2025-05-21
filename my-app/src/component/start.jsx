import React, { useState } from 'react';
import '../css/start.css';
import logo from '../assets/logo.png'

const Start = () => {

	return (
		<div className='start-container'>
				<img src={logo} className='hero-logo' alt="SmartChoice Logo" />

				<h1>SmartChoice</h1>
				<p className='tagline'>Decide Less. Get Answers Faster.</p>
				{/* <p>Find the perfect activity based on your mood with just a few clicks.</p> */}
				<button
					className='start-button'
					onClick={() => alert("Starting SmartChoice!")}
					aria-label="Start SmartChoice"
				>
					CLICK TO START
				</button>

		</div>

	);
};

export default Start;