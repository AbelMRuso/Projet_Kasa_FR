import { useState } from "react";
import "./assets/components/Header";
import logements from "./assets/data/logements.json";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import Footer from "./assets/components/Footer";
import Error from "./assets/components/Error";

function App() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
            <Error></Error>
        </>
    );
}

export default App;
