import { useContext } from "react";
import { CartContext } from "../contexts/cart-items.context";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <Button>
                <Link to="/checkout" className="checkout-link">
                    GO TO CHECKOUT
                </Link>
            </Button>
        </div>
    );
};

export default CartDropdown;
