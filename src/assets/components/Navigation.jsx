import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.scss";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </nav>
    );
}

export default Navigation;
