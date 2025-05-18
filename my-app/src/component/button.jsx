import React from 'react';
import '../css/button.css';

const Button = ({ onClick, children }) => {
	return (
		<button onClick={onClick} className='button-container'>
			{children}
		</button>
	);
};

export default Button;