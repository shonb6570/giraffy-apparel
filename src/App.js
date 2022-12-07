import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import NavigationMobile from "./components/routes/navigation-mobile/navigation-mobile.component";
import Home from "./components/routes/home/home.component";
import Footer from "./components/routes/footer/footer.component";

const App = () => {
    // Display port size state (to be used to check if size is tablet or smaller)
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 991px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(max-width: 991px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);
    return (
        <div>
            <Routes>
                {!matches && (
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                    </Route>
                )}
                {matches && (
                    <Route path="/" element={<NavigationMobile />}>
                        <Route index element={<Home />} />
                    </Route>
                )}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
