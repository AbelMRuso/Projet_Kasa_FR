import logo from "../img/logo_desktop_footer.svg";
import styles from "../styles/footer.module.scss";
function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="" />
            <p>
                © 2020 Kasa. All<span className={styles.lineBreak}>rights reserved</span>
            </p>
        </footer>
    );
}

export default Footer;
