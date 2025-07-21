import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Error404 from "../../pages/Error404";

function Address() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Address;
