import React from "react";

const Home = ({ categories }) => {
	return (
		<>
			<h1>SmartChoice</h1>
			<ul>
				{categories && categories.map((category, idx) => (
					<li key={idx}>{category}</li>
				))}
			</ul>
		</>
	)
};

export default Home;