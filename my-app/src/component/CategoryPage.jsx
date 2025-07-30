import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/CategoryPage.css"
import PlaceHolder from "../assets/placeholder.png";
import AddImage from "../assets/add.png";
import { Minus } from 'lucide-react';

const CategoriesSection = ({ categories }) => {
	const [expandedCategories, setExpandedCategories] = useState(new Set());
	const [editingCategories, setEditingCategories] = useState(new Set());
	const navigate = useNavigate();

	const toggleCategory = (categoryName, event) => {
		// Prevent any potential event bubbling that might cause navigation
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		
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
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		
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

	const isCategoryExpanded = (categoryName) => {
		return expandedCategories.has(categoryName);
	};

	const isCategoryEditing = (categoryName) => {
		return editingCategories.has(categoryName);
	};
	
	return (
		<div className="categories-section">
			{/* Expanded categories displayed above the grid */}
			{categories && categories.map((category, idx) => (
				isCategoryExpanded(category.name) && (
					<div key={`expanded-${idx}`} className="category-expanded">
						<div className="category-expanded-header">
							<h3>{category.name}</h3>
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
										<button className="change-image-button">change image</button>
									)}
								</div>
								
								{/* Right side - Activities list */}
								<div className="activities-section">
									{category.options && category.options.map((option, idx) => (
										<div key={idx} className='activity-item'>
											<div className="activity-content">
												<span className="activity-name">{option.label}</span>
												<div className="activity-moods">
													{option.moods && option.moods.map((mood, moodIdx) => (
														<span key={moodIdx} className="mood-tag">{mood}</span>
													))}
												</div>
											</div>
											<div className="activity-actions">
												{isCategoryEditing(category.name) && (
													<>
														<button className="edit-activity-button">✏️</button>
														<button className="delete-activity-button">🗑️</button>
													</>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
							
							{/* Bottom buttons */}
							<div className="category-bottom-actions">
								<button className="pick-from-category-button">
									Pick from This Category
								</button>
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
												className="go-back-button"
												onClick={(e) => toggleEditMode(category.name, e)}
											>
												Go Back
											</button>
											<button 
												className="save-category-button"
												onClick={(e) => toggleEditMode(category.name, e)}
											>
												SAVE
											</button>
											<button className="delete-category-button">DELETE</button>
										</>
									)}
								</div>
							</div>
						</div>

					</div>
				)
			))}
			
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
				<div
					className="add-category"
					onClick={() => navigate("/addcategory")}
				>
					<img src={AddImage} className="add-image" alt="add image" />
					<p><strong>Add Category</strong></p>
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;