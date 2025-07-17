import { useState } from "react";
import "./assets/components/Header";
import logements from "./assets/data/logements.json";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import Footer from "./assets/components/Footer";
import Error from "./assets/components/Error";
import TagName from "./assets/components/TagName";
import DropDown from "./assets/components/DropDown";
import Cards from "./assets/components/Cards";

function App() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </>
    );
}

export default App;
