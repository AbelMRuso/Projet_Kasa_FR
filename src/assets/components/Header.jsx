import logo from "../img/logo_desktop.svg";
import Navigation from "./Navigation";
import styles from "../styles/Header.module.scss";
function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Kasa" />

            <Navigation className={styles.navigation}></Navigation>
        </header>
    );
}

export default Header;
