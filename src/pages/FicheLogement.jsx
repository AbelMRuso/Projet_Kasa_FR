import styles from "../assets/styles/logements.module.scss";
import TagName from "../assets/components/TagName";
import star from "../assets/img/star_active.png";
import emptyStar from "../assets/img/star_inactive.png";
import DropDown from "../assets/components/DropDown";
import SlideShow from "../assets/components/SlideShow";
import data from "../assets/data/logements.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    const rating = parseInt(logement.rating);

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
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={index < rating ? star : emptyStar}></img>
                        ))}
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <DropDown title={"Description"} description={logement.description}></DropDown>
                    <DropDown title={"Équipements"} equipments={logement.equipments}></DropDown>
                </div>
            </div>
        </main>
    );
}

export default FicheLogement;
