import { useState } from "react";
import "./assets/components/Header";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
