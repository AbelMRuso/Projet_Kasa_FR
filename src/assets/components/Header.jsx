import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <img src="/p" alt="" />

            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </nav>
    );
}

export default Header;
