import banner from "../img/image_banner.svg";
import styles from "../styles/banner.module.scss";

function Banner() {
    return (
        <div className={styles.bannerContenair}>
            <p>Chez vous, partout et ailleurs</p>
            <img src={banner} alt="Falaise végétalisée et mer déchaînée" />
        </div>
    );
}

export default Banner;
