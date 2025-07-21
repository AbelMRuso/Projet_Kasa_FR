import styles from "../styles/error.module.scss";
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <main className={styles.error}>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </main>
        </>
    );
}

export default Error;
