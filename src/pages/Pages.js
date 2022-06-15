
import { Route, Routes, useLocation } from "react-router-dom";
import Cusine from "./Cusine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchPage from "./SearchPage";
import { AnimatePresence } from 'framer-motion';


const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cusine/:type" element={<Cusine />} />
                <Route path="/searched/:search" element={<SearchPage />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;