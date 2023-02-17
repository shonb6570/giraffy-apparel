import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../../utilities/firebase.utils";
import "./navigation-mobile.styles.scss";

const NavigationMobile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        signOutUser();
        setCurrentUser(null);
    };
    // hamburger icon states (open / !open)
    const [isOpen, setOpen] = useState(false);

    // Display port size state (to be used to check if size is tablet or smaller)
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    );

    // toggles value of whether the hamburger icon state is open to true or false
    const mobileOnClickHandler = () => setOpen(!isOpen);

    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        <>
            <div className="navigation-mobile">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                {matches && (
                    <Hamburger
                        className="hamburger-icon"
                        rounded
                        easing="ease-out"
                        onToggle={mobileOnClickHandler}
                        size={60}
                        toggled={isOpen}
                        toggle={setOpen}
                    />
                )}
                {/* if Hamburger icon state is open, render the mobile navlinks */}
                {isOpen && (
                    <div className="nav-links-container-mobile">
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
                                        onClick={signOutHandler}>
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
                )}
            </div>
            <Outlet />
        </>
    );
};

export default NavigationMobile;
