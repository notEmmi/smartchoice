import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/CategoryPage.css"
import PlaceHolder from "../assets/placeholder.png";
import AddImage from "../assets/add.png";
import { Minus } from 'lucide-react';

const CategoriesSection = ({ categories }) => {
	const [expandedCategories, setExpandedCategories] = useState(new Set());
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

	const isCategoryExpanded = (categoryName) => {
		return expandedCategories.has(categoryName);
	};
	
	return (
		<div className="categories">
			{categories && categories.map((category, idx) => (
				<div key={idx} className="category-container">
					{!isCategoryExpanded(category.name) ? (
						<div
							className="category"
							onClick={(e) => toggleCategory(category.name, e)}
						>
							<img src={PlaceHolder} className="category-image" alt={`Category ${category.name}`} />
							<p><strong>{category.name}</strong></p>
						</div>
					) : (
						<div className="category-expanded">
							<div className="category-expanded-header">
								<h3>{category.name}</h3>
								<Minus 
									className="category-minimize-icon" 
									onClick={(e) => toggleCategory(category.name, e)}
									title="Minimize category"
								/>
							</div>
							<div className="category-expanded-content">
								{/* Content will be handled by parent component */}
								<p>Category content goes here...</p>
								{/* You can add more content here or pass it as props */}
							</div>
						</div>
					)}
				</div>
			))}
			<div
				className="add-category"
				onClick={() => navigate("/addcategory")}
			>
				<img src={AddImage} className="add-image" alt="add image" />
				<p><strong>Add Category</strong></p>
			</div>
		</div>
	);
};

export default CategoriesSection;