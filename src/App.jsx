import { useState } from "react";
import "./App.css";
import "./assets/components/Header";
import logements from "./assets/data/logements.json";
import Header from "./assets/components/Header";
import Cards from "./assets/components/Cards";

function App() {
    return (
        <>
            <Header></Header>
            <Cards></Cards>
        </>
    );
}

export default App;
