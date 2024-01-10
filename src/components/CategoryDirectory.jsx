import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryDirectory = ({ categories }) => {
  return (
    <>
      <div className='category-wrapper'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryDirectory;
