import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/CategoryPage.css"
import PlaceHolder from "../assets/placeholder.png";
import AddImage from "../assets/add.png";
import AddCategory from "./AddCategory"
import { Minus, ArrowLeft, Trash2, Plus, X } from 'lucide-react';

const CategoriesSection = ({ categories, moods, updateCategories, updateMoods }) => {
	const [expandedCategories, setExpandedCategories] = useState(new Set());
	const [editingCategories, setEditingCategories] = useState(new Set());
	const [isAddingCategory, setIsAddingCategory] = useState(false);
	const navigate = useNavigate();
    
	const preventEventBubbling = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

	const toggleCategory = (categoryName, event) => {
		preventEventBubbling(event);
		
		setExpandedCategories(prev => {
			const newSet = new Set(prev);
			if (newSet.has(categoryName)) {
				newSet.delete(categoryName);
			} else {
				newSet.add(categoryName);
			}
			return newSet;
		});
	};

	const toggleEditMode = (categoryName, event) => {
		preventEventBubbling(event);
		
		setEditingCategories(prev => {
			const newSet = new Set(prev);
			if (newSet.has(categoryName)) {
				newSet.delete(categoryName);
			} else {
				newSet.add(categoryName);
			}
			return newSet;
		});
	};

	const toggleActivityEdit = ( categoryName, activityIndex, event) => {
		preventEventBubbling(event);

		if (editingActivity && editingActivity.categortName === categoryName && editingActivity.activityIndex === activityIndex) {
			setEditingActivity(null); //stop editing
		} else {
			setEditingActivity({ categoryName, activityIndex}); // start editing this activity
		}
	};

	const isCategoryExpanded = (categoryName) => {
		return expandedCategories.has(categoryName);
	};

	const isCategoryEditing = (categoryName) => {
		return editingCategories.has(categoryName);
	};
	
	const addMoodToActivity = (categoryName, activityIndex, event) => {
		preventEventBubbling(event);
		
		const newMood = prompt("Enter new mood:");
		if (newMood && newMood.trim()) {
			const trimmedMood = newMood.trim();
			
			// Update categories with the new mood
			const updatedCategories = categories.map(category => {
				if (category.name === categoryName) {
					const updatedOptions = category.options.map((option, idx) => {
						if (idx === activityIndex) {
							return {
								...option,
								moods: [...(option.moods || []), trimmedMood]
							};
						}
						return option;
					});
					return { ...category, options: updatedOptions };
				}
				return category;
			});
			updateCategories(updatedCategories);
			
			// Add mood to global moods array if it doesn't exist
			if (moods && !moods.includes(trimmedMood)) {
				const updatedMoods = [...moods, trimmedMood];
				updateMoods(updatedMoods);
			}
		}
	}

	const removeMoodFromActivity = (categoryName, activityIndex, moodIndex, event) => {
		preventEventBubbling(event);
		
		const updatedCategories = categories.map(category => {
			if (category.name === categoryName) {
				const updatedOptions = category.options.map((option, idx) => {
					if (idx === activityIndex) {
						const updatedMoods = option.moods.filter((_, mIdx) => mIdx !== moodIndex);
						return { ...option, moods: updatedMoods };
					}
					return option;
				});
				return { ...category, options: updatedOptions };
			}
			return category;
		});
		updateCategories(updatedCategories);
	}

	const deleteActivity = (categoryName, activityIndex, event) => {
		preventEventBubbling(event);
		
		const updatedCategories = categories.map(category => {
			if (category.name === categoryName) {
				const updatedOptions = category.options.filter((_, idx) => idx !== activityIndex);
				return { ...category, options: updatedOptions };
			}
			return category;
		});
		updateCategories(updatedCategories);
	}

	const deleteCategory = (categoryIndex, event) => {
		preventEventBubbling(event);

		const updatedCategories = categories.filter((_, idx) => idx !== categoryIndex);

		updateCategories(updatedCategories);
	}

	const toggleAddCategory = (event) => {
		preventEventBubbling(event);
		setIsAddingCategory(!isAddingCategory);
	}

	return (
		<div className="categories-section">
			{/* Expanded categories displayed above the grid */}
			{categories && categories.map((category, idx) => (
				isCategoryExpanded(category.name) && (
					<div key={`expanded-${idx}`} className="category-expanded">
						<div className="category-expanded-header">
							{isCategoryEditing(category.name) && (
								<ArrowLeft 
									className="category-back-icon" 
									onClick={(e) => toggleEditMode(category.name, e)}
									title="Go back"
								/>
							)}
							<h2>{category.name}</h2>
							<Minus 
								className="category-minimize-icon" 
								onClick={(e) => toggleCategory(category.name, e)}
								title="Minimize category"
							/>
						</div>
						<div className="category-expanded-content">
							<div className="category-content-layout">
								{/* Left side - Category image */}
								<div className="category-image-section">
									<img src={PlaceHolder || category.image} className="category-image-expanded" alt={`Category ${category.name}`} />
									{isCategoryEditing(category.name) && (
										<button className="change-image-button"><p>change image</p></button>
									)}
								</div>
								
								{/* Right side - Activities list */}
								<div className="activities-section">
									{category.options && category.options.map((option, activityIdx) => (
										<div key={activityIdx} className='activity-item'>
											<div className="activity-content">
												<div className='activity-name'>
													<h3>{option.label}</h3>
												</div>
												<div className="activity-moods">
													{option.moods && option.moods.map((mood, moodIdx) => (
														<div key={moodIdx} className="mood-item">
															<p className="mood-tag">{mood}</p>
															{isCategoryEditing(category.name) && (
																<button 
																	className="remove-mood-button"
																	onClick={(e) => removeMoodFromActivity(category.name, activityIdx, moodIdx, e)}
																	title="Remove mood"
																>
																	<X className="remove-mood-icon" />
																</button>
															)}
														</div>
													))}
													{isCategoryEditing(category.name) && (
														<button 
															className="add-mood-button"
															onClick={(e) => addMoodToActivity(category.name, activityIdx, e)}
															title="Add mood"
														>
															<Plus className="add-mood-icon" />
															<span>Add Mood</span>
														</button>
													)}
												</div>
											</div>
											<div className="activity-actions">
												{isCategoryEditing(category.name) && (
													<button 
														className="delete-activity-button"
														onClick={(e) => deleteActivity(category.name, activityIdx, e)}
														title="Delete activity"
													>
														<Trash2 className='icon trash-2-icon' />
													</button>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
							
							{/* Bottom buttons */}
							<div className="category-bottom-actions">
								{!isCategoryEditing(category.name) && (
									<button className="pick-from-category-button">
										PICK FROM THIS CATEGORY
									</button>
								)}
								<div style={{ flex: 1 }}></div> {/* Spacer */}
								<div className="category-action-buttons">
									{!isCategoryEditing(category.name) ? (
										<button 
											className="edit-category-button"
											onClick={(e) => toggleEditMode(category.name, e)}
										>
											edit
										</button>
									) : (
										<>
											<button 
												className="save-category-button"
												onClick={(e) => toggleEditMode(category.name, e)}
											>
												SAVE
											</button>
											<button 
												className="delete-category-button"
												onClick={ (e) => deleteCategory( idx,e)}
											>
												DELETE
											</button>
										</>
									)}
								</div>
							</div>
						</div>

					</div>
				)
			))}

			{isAddingCategory && (
				<div className='add-category-expanded'>
					<div className='add-category-header'>
						<h2>ADD CATEGORY</h2>
						<Minus 
							className="category-minimize-icon" 
							onClick={(e) => toggleAddCategory(e)}
							title="Close add category"
						/>
					</div>
					<div className='add-category-content'>
						<AddCategory 
							categories={categories} 
							updateCategories={updateCategories}
							onClose={() => setIsAddingCategory(false)}
						/>
					</div>
				</div>
			)}
			
			{/* Categories grid */}
			<div className="categories">
				{categories && categories.map((category, idx) => (
					!isCategoryExpanded(category.name) && (
						<div key={idx} className="category-container">
							<div
								className="category"
								onClick={(e) => toggleCategory(category.name, e)}
							>
								<img src={PlaceHolder} className="category-image" alt={`Category ${category.name}`} />
								<p><strong>{category.name}</strong></p>
							</div>
						</div>
					)
				))}
				{!isAddingCategory && (
					<div
						className="add-category"
						onClick={(e) => toggleAddCategory(e)}
					>
						<img src={AddImage} className="add-image" alt="add image" />
						<p><strong>Add Category</strong></p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoriesSection;