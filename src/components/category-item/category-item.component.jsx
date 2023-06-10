import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, copyOne, copyTwo, copyThree, copyFour } = category;
  return (
    <div className="category-wrapper">
      <div className="category-bg-element">
        <div
          className="category-img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className={`${title}`}>
          <h2>{copyOne}</h2>
          <h2>{copyTwo}</h2>
          <h2>{copyThree}</h2>
          <div className="category-paragraph-wrapper">
            <span>{copyFour}</span>
          </div>
          <div className="cta">
            <a
              className="boxy"
              href={`http://giraffyapparel.shaunbolak.com/shop/${title}`}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
