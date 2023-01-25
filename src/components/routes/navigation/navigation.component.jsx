import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../../utilities/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                                    <Link className="nav-link" to="/contact">
                                        Contact
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
                                    <Link className="nav-link" to="/cart">
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
