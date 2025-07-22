import arrowBack from "../assets/img/arrow_back.svg";
import arrowForward from "../assets/img/arrow_forward.svg";
import logements from "../assets/data/logements.json";
import styles from "../assets/styles/logements.module.scss";

function FicheLogement() {
    const defautlImage = logements[0].pictures[0];
    return (
        <main>
            <div className={styles.carrousel}>
                <img src={defautlImage} alt="" />

                <p>1/4</p>

                <button className={styles.buttonLeft}>
                    <img src={arrowBack} alt="" />
                </button>
                <button className={styles.buttonRight}>
                    <img src={arrowForward} alt="" />
                </button>
            </div>
        </main>
    );
}

export default FicheLogement;
