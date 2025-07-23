import React from 'react';
import '../css/background.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, Square, Minus } from 'lucide-react';

const Background = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div className="background">
			<div className='top-nav'>
				<div className='left-nav'>
					<Menu className='nav-icon close-icon'/>
				</div>
				<div className='mid-nav'>
					<div
						className='nav-icon home-icon'
						style={{ cursor: 'pointer' }}
						onClick={() => navigate('/home')}
					>
						<img src={logo} className="nav-logo" alt="Logo" />
						<p className='home-icon'>SmartChoice</p>
					</div>
				</div>
				<div className='right-nav'>
					<Minus className='nav-icon minus-icon'/>
					<Square className='nav-icon square-icon'/>
					<X className='nav-icon close-icon'/>
				</div>
			</div>
			<div className='scrollable-content'>
				<div className='content'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Background;