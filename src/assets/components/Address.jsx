import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import FicheLogement from "../../pages/FicheLogement";
import Error404 from "../../pages/Error404";

function Address() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Address;
