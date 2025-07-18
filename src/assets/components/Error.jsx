import styles from "../styles/error.module.scss";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Error() {
    return (
        <>
            <main className={styles.error}>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </main>
        </>
    );
}

export default Error;
