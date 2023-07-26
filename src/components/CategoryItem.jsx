import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className="category-item">
        <div className="category-item-image" style={{ backgroundImage: `url(${category.image})` }}>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="category-item-copy">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
