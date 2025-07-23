import React, { useState } from 'react';
import '../css/AddCategory.css';
import FormContainer from './FormContainer';


const AddCategory = ({ categories, setCategories }) => {
	const [category, setCategory] = useState('');
	const [activities, setActivities] = useState([
		{ name: '', moods: [''] },
		{ name: '', moods: [''] }
	]);
	
	const [categoryMood, setCategoryMood] = useState('');

	const handleActivityChange = (index, field, value) => {
		const newActivities = [...activities];
		if (field === 'name') {
			newActivities[index].name = value;
		} 
		setActivities(newActivities);
	};

	const handleMoodChange = (activityIdx, moodIdx, value) => {
		const newActivities = [...activities];
		newActivities[activityIdx].moods[moodIdx] = value;
		setActivities(newActivities);
	};

	const handleAddMood = (activityIdx) => {
		const newActivities = [...activities];
		newActivities[activityIdx].moods.push('');
		setActivities(newActivities);
	};

	const handleRemoveMood = (activityIdx, moodIdx) => {
		const newActivities = [...activities];
		if (newActivities[activityIdx].moods.length > 1) {
			newActivities[activityIdx].moods.splice(moodIdx, 1);
			setActivities(newActivities);
		}
	};

	const handleAddActivity = () => {
		setActivities([...activities, { name: '', moods: [''] }]);
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
							moods: act.moods.map(m => m.trim()).filter(Boolean)
						})),
					mood: categoryMood.trim()
				}
			]);
			setCategory('');
			setActivities([
				{ name: '', moods: [''] },
				{ name: '', moods: [''] }
			]);
			setCategoryMood('');
		}
	};

	return (
		<div className='addCat-container'>
			<h1>Add Category</h1>
			<p className='tagline'>Organize your world—add a category, set the mood, and fill it with activities!</p>
			<FormContainer>
				<form onSubmit={handleSubmit}>
					<div className="form-group form-row">
						<label htmlFor="categoryName" className="form-label">Category Name</label>
						<input
							id="categoryName"
							type="text"
							value={category}
							onChange={e => setCategory(e.target.value)}
							placeholder="Enter category name"
							className="form-input"
						/>
					</div>
					<div className="form-group form-row">
						<label htmlFor="categoryMood" className="form-label">Category Mood (optional)</label>
						<input
							id="categoryMood"
							type="text"
							value={categoryMood}
							onChange={e => setCategoryMood(e.target.value)}
							placeholder="Enter category mood"
							className="form-input"
						/>
					</div>
					<div className="activities-section">
						<label className="form-label">Activities</label>
						{activities.map((activity, idx) => (
							<div key={idx} className="activity-row form-row" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
								<div style={{display: 'flex', width: '100%'}}>
									<input
										type="text"
										placeholder={`Activity ${idx + 1} name`}
										value={activity.name}
										onChange={e => handleActivityChange(idx, 'name', e.target.value)}
										className="form-input"
										style={{marginLeft: 0}}
									/>
								</div>
								<div className="moods-row" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'}}>
									{activity.moods.map((mood, mIdx) => (
										<div key={mIdx} style={{display: 'flex', alignItems: 'center'}}>
											<input
												type="text"
												placeholder="Mood"
												value={mood}
												onChange={e => handleMoodChange(idx, mIdx, e.target.value)}
												className="form-input"
												style={{width: '120px', marginLeft: 0}}
											/>
											{activity.moods.length > 1 && (
												<button type="button" onClick={() => handleRemoveMood(idx, mIdx)} style={{marginLeft: '0.25rem'}}>–</button>
											)}
										</div>
									))}
									<button type="button" onClick={() => handleAddMood(idx)} style={{marginLeft: '0.5rem'}}>+ Mood</button>
								</div>
							</div>
						))}
						<button type="button" onClick={handleAddActivity} className="add-activity-btn">
							Add Activity
						</button>
					</div>
					<button type="submit" className="submit-btn">Add Category</button>
				</form>
			</FormContainer>
		</div>
	);
};

export default AddCategory;