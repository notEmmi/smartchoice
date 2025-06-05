import React, { useState } from 'react';
import '../css/AddCategory.css';


const AddCategory = ({ onAdd }) => {
	const [category, setCategory] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (category.trim()) {
			onAdd(category.trim());
			setCategory('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				placeholder="Add new category"
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default AddCategory;