import React from 'react';
import '../css/background.css';
import logo from '../assets/logo.png';

const Background = ({ children }) => {
	return (
		<div className="background">
			<div className='top-nav'>
				<div className='left-nav'><h4>=</h4></div>
				<div className='mid-nav'><img src={logo} className="nav-logo" alt="Logo" /><h4>SmartChoice</h4></div>
				<div className='right-nav'><h4>x</h4></div>

			</div>
			<div className='content'>
				{children}
			</div>
		</div>
	);
};

export default Background;