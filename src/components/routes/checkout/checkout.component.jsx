import { useContext } from "react";
import { CartContext } from "../../contexts/cart-items.context";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Cart = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <>
            <div className="container checkout-wrapper">
                <div className="checkout-container">
                    <span>Product</span>
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
                    <hr />
                    {cartItems.map((item) => (
                        <CheckoutItem key={item.id} cartItem={item} />
                    ))}
                    <hr />
                    <span className="total">TOTAL: {cartTotal}</span>
                </div>
            </div>
        </>
    );
};

export default Cart;
