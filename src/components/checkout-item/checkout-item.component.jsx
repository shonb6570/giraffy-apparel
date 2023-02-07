import "./checkout-item.styles.scss";
import { CartContext } from "../contexts/cart-items.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } =
        useContext(CartContext);
    const quantityIncrementHandler = () => addItemToCart(cartItem);
    const quantityDecrementHandler = () => removeItemFromCart(cartItem);
    const removeItemHandler = () => clearItemFromCart(cartItem);

    return (
        <>
            <img src={imageUrl} alt={name} />
            <span className="name">{name}</span>
            <div>
                <button
                    className="cartButton"
                    onClick={quantityDecrementHandler}>
                    &#xFE64;
                </button>
                <span className="quantity">{quantity}</span>
                <button
                    className="cartButton"
                    onClick={quantityIncrementHandler}>
                    &#xFE65;
                </button>
            </div>
            <span className="price">{price}</span>
            <button className="cartButton" onClick={removeItemHandler}>
                &#10005;
            </button>
        </>
    );
};

export default CheckoutItem;
