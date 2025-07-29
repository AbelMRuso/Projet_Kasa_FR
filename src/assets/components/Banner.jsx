import styles from "../styles/banner.module.scss";
import { useLocation } from "react-router-dom";

function Banner({ image, text }) {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";
    return (
        <div className={isAboutPage ? styles.bannerAbout : styles.bannerContenair}>
            <h1>{text}</h1>
            <img src={image} alt="Falaise végétalisée et mer déchaînée" />
        </div>
    );
}

export default Banner;
