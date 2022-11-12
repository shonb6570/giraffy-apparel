import CategoryItem from "../category-item/category-item.component.jsx";

import "./category-directory.styles.scss";

const CategoryDirectory = ({ categories }) => {
    return (
        <>
            <div className="main-content-wrapper">
                <div className="site-bg">
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
                </div>
            </div>
        </>
    );
};

export default CategoryDirectory;
