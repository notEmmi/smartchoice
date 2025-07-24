import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/CategoryPage"

const Category = () => {
	const { name } = useParams();

	return (
		<div>
			<h2>Category: {name}</h2>
			{/* Add your category content here */}
		</div>
	);
};

export default Category;