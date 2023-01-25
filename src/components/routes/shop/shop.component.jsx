import SHOP_DATA from "../../../shop-data.json";
// import "../../../base.scss";
import "./shop.styles.scss";

const Shop = () => {
    return (
        <div className="container">
            {SHOP_DATA.map(({ id, name }) => (
                <div key={id} className="product-wrapper">
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    );
};

export default Shop;
