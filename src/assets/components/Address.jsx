import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import FicheLogement from "../../pages/FicheLogement";
import Error404 from "../../pages/Error404";
/* import FicheLogement from "../../pages/FicheLogement"; */

function Address() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements" element={<FicheLogement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Address;

/*  <Route path="/annonce/:id" element={FicheLogement} /> ROUTE QUE ENVÍA HACIA CADA PAGINA DE ALOJAMIENT
 */
