import React from 'react';
import "../css/CategoryPage.css"

const CategoriesSection = ({ categories }) => {
	const [isMinimized, setIsMinimized] = useState(false);
	
	return (
		<div className="categories">
			{categories && categories.map((category, idx) => (
				<div
					className="category"
					key={idx}
					onClick={() => }
				>
					<img src={PlaceHolder} className="category-image" alt={`Category ${category.name}`} />
					<p><strong>{category.name}</strong></p>
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

export default Category;