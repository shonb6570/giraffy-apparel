import CategoryItem from "../category-item/category-item.component.jsx";

import "./category-directory.styles.scss";

const CategoryDirectory = ({ categories }) => {
    return (
        <div className="directory-container">
            {/* "category" in the map below is each JSON object item  */}
            {categories.map((categoryItem) => {
                return (
                    <CategoryItem
                        key={categoryItem.id}
                        category={categoryItem}
                    />
                );
            })}
        </div>
    );
};

export default CategoryDirectory;
