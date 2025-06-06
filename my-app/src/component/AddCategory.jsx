import React, { useState } from 'react';
import '../css/AddCategory.css';
import FormContainer from './FormContainer';


const AddCategory = ({ categories, setCategories }) => {
	const [category, setCategory] = useState('');
	const [activities, setActivities] = useState([
		{ name: '', mood: '' },
		{ name: '', mood: '' }
	]);
	
	const [categoryMood, setCategoryMood] = useState('');

	const handleActivityChange = (index, field, value) => {
		const newActivities = [...activities];
		newActivities[index][field] = value;
		setActivities(newActivities);
	};

	const handleAddActivity = () => {
		setActivities([...activities, { name: '', mood: '' }]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			category.trim() &&
			activities.some(act => act.name.trim())
		) {
			setCategories([
				...categories,
				{
					name: category.trim(),
					activities: activities
						.filter(act => act.name.trim())
						.map(act => ({
							name: act.name.trim(),
							mood: act.mood.trim()
						})),
					mood: categoryMood.trim()
				}
			]);
			setCategory('');
			setActivities([
				{ name: '', mood: '' },
				{ name: '', mood: '' }
			]);
			setCategoryMood('');
		}
	};

	return (
		<div className='addCat-container'>
			<h1>Add Category</h1>
			<p className='tagline'>Organize your world—add a category, set the mood, and fill it with activities!</p>
			<FormContainer title="Add Category">
				<input
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					placeholder="Category name"
				/>
				<input
					type="text"
					value={categoryMood}
					onChange={(e) => setCategoryMood(e.target.value)}
					placeholder="Mood for this category"
					style={{ display: 'block', marginTop: 8 }}
				/>
				{activities.map((activity, idx) => (
					<div key={idx} style={{ marginTop: 8 }}>
						<input
							type="text"
							value={activity.name}
							onChange={(e) => handleActivityChange(idx, 'name', e.target.value)}
							placeholder={`Activity ${idx + 1}`}
							style={{ marginRight: 8 }}
						/>
						<input
							type="text"
							value={activity.mood}
							onChange={(e) => handleActivityChange(idx, 'mood', e.target.value)}
							placeholder="Mood for this activity"
						/>
					</div>
				))}
				<div style={{ marginTop: 8 }}>
					<button type="button" onClick={handleAddActivity}>
						Add Activity
					</button>
					<button
						type="button"
						style={{ marginLeft: 8 }}
						onClick={handleSubmit}
					>
						Add Category
					</button>
				</div>
			</FormContainer>
		</div>
	);
};

export default AddCategory;