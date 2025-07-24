import styles from "../assets/styles/logements.module.scss";
import TagName from "../assets/components/TagName";
import star from "../assets/img/star_active.png";
import DropDown from "../assets/components/DropDown";
import SlideShow from "../assets/components/SlideShow";
import data from "../assets/data/logements.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    return (
        <main>
            <div>
                <SlideShow></SlideShow>
            </div>

            <div>
                <div className={styles.contenairInfo}>
                    <div>
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>

                    <div className={styles.contenairHost}>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" />
                    </div>
                </div>
                <div className={styles.contenairTagRate}>
                    <div className={styles.tag}>
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
