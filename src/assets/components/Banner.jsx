import styles from "../styles/banner.module.scss";

function Banner({ image, text }) {
    return (
        <div className={styles.bannerContenair}>
            <h1>{text}</h1>
            <img src={image} alt="Falaise végétalisée et mer déchaînée" />
        </div>
    );
}

export default Banner;
