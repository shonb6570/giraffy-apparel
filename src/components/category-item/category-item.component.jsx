import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
    const { imageUrl, title, copyOne, copyTwo, copyThree } = category;
    return (
        <div className="category-container">
            <div className="category-bg-element">
                <div
                    className="category-img"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
                <div className={`${title}`}>
                    <span>{copyOne}</span>
                    <span>{copyTwo}</span>
                    <span>{copyThree}</span>
                    <div className="cta">
                        <a className="boxy" href={imageUrl}>
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className={`category-body-container ${title}`}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div> */}
        </div>
    );
};

export default CategoryItem;
