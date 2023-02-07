import { useContext } from "react";
import { CartContext } from "../contexts/cart-items.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    // const { cartCount } = useContext(CartContext);
    // const quantityDecrementHandler = () => (cartCount -= 1);

    // const quantityIncrementHandler = () => this.setState((this.quanity += 1));

    return (
        <>
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <div>
                {/* <button onClick={quantityDecrementHandler}>&#xFE64;</button> */}
                <span className="quantity">{quantity}</span>
                {/* <button onClick={quantityIncrementHandler}>&#xFE65;</button> */}
            </div>
            <span className="price">{price}</span>
            <button>X</button>
        </>
    );
};

export default CheckoutItem;
