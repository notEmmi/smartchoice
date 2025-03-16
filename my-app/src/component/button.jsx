import React from 'react';
import './button.css';

const Button = ({ onClick, children }) => {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;