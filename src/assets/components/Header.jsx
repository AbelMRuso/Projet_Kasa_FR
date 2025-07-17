import logo from "../img/logo_desktop.svg";
import Navigation from "./Navigation";
import styles from "../styles/header.module.scss";
function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Kasa" />

            <Navigation></Navigation>
        </header>
    );
}

export default Header;
