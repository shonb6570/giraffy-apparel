import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-items.context";

import { signOutUser } from "../../../utilities/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <div className="nav-stripes-left"></div>
                <div className="nav-stripes-right"></div>
                <div className="nav-bar-wrapper">
                    <div className="nav-borders nav-border-left"></div>
                    <Link className="logo-container" to="/">
                        <Logo className="logo" />
                    </Link>
                    <div className="nav-borders nav-border-right">
                        <div className="nav-links-container">
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/shop">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    {currentUser ? (
                                        <Link
                                            className="nav-link"
                                            onClick={signOutUser}>
                                            Sign out
                                        </Link>
                                    ) : (
                                        <Link className="nav-link" to="/auth">
                                            Sign-in
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    <CartIcon className="nav-link" />
                                </li>
                            </ul>
                        </div>
                        {isCartOpen && <CartDropdown />}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
