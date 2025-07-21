import styles from "../styles/banner.module.scss";

function Banner({ image, text }) {
    return (
        <div className={styles.bannerContenair}>
            <p>{text}</p>
            <img src={image} alt="Falaise végétalisée et mer déchaînée" />
        </div>
    );
}

export default Banner;
