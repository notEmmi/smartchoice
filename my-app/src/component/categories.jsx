import { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // window.electronAPI.getCategories() is synchronous
    setCategories(window.electronAPI.getCategories() || []);
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <strong>{category.name}</strong>
            <ul>
              {category.options.map((opt, i) => (
                <li key={i}>
                  {opt.label} (Weight: {opt.weight}, Moods: {opt.moods.join(', ')})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
