import defaultImage from "../img/image_banner.svg";
import styles from "../styles/banner.module.scss";

function Banner({ image = defaultImage, text }) {
    return (
        <div className={styles.bannerContenair}>
            {text && <p>{text}</p>}
            <img src={image} alt="Falaise végétalisée et mer déchaînée" />
        </div>
    );
}

export default Banner;
