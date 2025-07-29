import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.scss";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                Accueil
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to="/about">
                À propos
            </NavLink>
        </nav>
    );
}

export default Navigation;
