import React, { useState } from 'react';
import '../css/AddCategory.css';
import { X } from 'lucide-react';
import PlaceHolder from "../assets/placeholder.png";


const AddCategory = ({ categories, updateCategories, onClose }) => {
	const [category, setCategory] = useState('');
	const [activities, setActivities] = useState([
		{ name: '', moods: [''] },
		{ name: '', moods: [''] }
	]);

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
			const newCategory = {
				name: category.trim(),
				options: activities
					.filter(act => act.name.trim())
					.map(act => ({
						label: act.name.trim(),
						moods: act.moods.map(m => m.trim()).filter(Boolean)
					}))
			};
			updateCategories([...categories, newCategory]);
			setCategory('');
			setActivities([
				{ name: '', moods: [''] },
				{ name: '', moods: [''] }
			]);
			if (onClose) onClose();
		}
	};

	return (
		<div className='add-category-form-container'>
			<p className='tagline'>Add a category, fill it with activities, and set the mood!</p>
			
			<div className="add-category-layout">
				{/* Left side - Category name and image */}
				<div className="add-category-left">
					<div className="category-name-section">
						<h4 className="category-name-label">Category</h4>
						{/* <label htmlFor="categoryName" className="category-name-label">Category Name</label> */}
						<input
							id="categoryName"
							type="text"
							value={category}
							onChange={e => setCategory(e.target.value)}
							placeholder="Type Category Name ..."
							className="category-name-input"
						/>
					</div>
					<div className="category-image-section">
						<img src={PlaceHolder} className="category-image-expanded" alt={`add category image`}/>
						<button type="button" className="upload-image-button">Upload Image</button>

					</div>
					
				</div>

				{/* Right side - Activities */}
				<div className="add-category-right">

					<div className="activities-list">
						{activities.map((activity, idx) => (
							<div key={idx} className="activity-form-item">
								<div className="activity-header">
									<h3>Activity {idx + 1}</h3>
								</div>
								<input
									type="text"
									placeholder="Type Activity Name..."
									value={activity.name}
									onChange={e => handleActivityChange(idx, 'name', e.target.value)}
									className="activity-name-input"
								/>
								<h4>Moods</h4>
								<div className="activity-moods">
									{activity.moods.map((mood, mIdx) => (
										<div key={mIdx} className="mood-tag-input">
											<input
												type="text"
												placeholder="mood"
												value={mood}
												onChange={e => handleMoodChange(idx, mIdx, e.target.value)}
												className="mood-input"
											/>
											{activity.moods.length > 1 && (
												<button 
													type="button" 
													onClick={() => handleRemoveMood(idx, mIdx)}
													className="remove-mood-button"
												>
													<X size={12} />
												</button>
											)}
										</div>
									))}
									<button 
										type="button" 
										onClick={() => handleAddMood(idx)}
										className="add-mood-button"
									>
										+ Mood
									</button>
								</div>
							</div>
						))}
						
						<button 
							type="button" 
							onClick={handleAddActivity} 
							className="add-activity-button"
						>
							Add Activity
						</button>
					</div>
				</div>
			</div>
			
			<div className="add-category-actions">
				<button onClick={handleSubmit} className="add-button">add</button>
			</div>
		</div>
	);
};

export default AddCategory;