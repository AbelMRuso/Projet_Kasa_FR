import arrowBack from "../assets/img/arrow_back.svg";
import arrowForward from "../assets/img/arrow_forward.svg";
import logements from "../assets/data/logements.json";
import styles from "../assets/styles/logements.module.scss";
import TagName from "../assets/components/TagName";
import star from "../assets/img/star_active.png";
import DropDown from "../assets/components/DropDown";

function FicheLogement() {
    const defautlImage = logements[0].pictures[0];
    const hostProfile = logements[0].host.picture;
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
            <div>
                <div className={styles.contenairInfo}>
                    <div>
                        <h1>Cozy loft on the Canaal Saint-Martin</h1>
                        <h2>Paris, Île-de-France</h2>
                    </div>

                    <div className={styles.contenairHost}>
                        <p>Nathalie Jean</p>
                        <img src={hostProfile} alt="" />
                    </div>
                </div>
                <div className={styles.contenairTagRate}>
                    <div className={styles.tag}>
                        <TagName></TagName>
                        <TagName></TagName>
                        <TagName></TagName>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <DropDown></DropDown>
                    <DropDown></DropDown>
                </div>
            </div>
        </main>
    );
}

export default FicheLogement;
