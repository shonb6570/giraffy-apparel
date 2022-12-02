import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Footer from "./components/routes/footer/footer.component";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
