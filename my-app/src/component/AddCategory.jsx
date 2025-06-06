import React, { useState } from 'react';
import '../css/AddCategory.css';


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
		<form onSubmit={handleSubmit}>
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
			<button type="button" onClick={handleAddActivity} style={{ marginTop: 8 }}>
				Add Activity
			</button>
			<button type="submit" style={{ marginLeft: 8 }}>
				Add Category
			</button>
		</form>
	);
};

export default AddCategory;