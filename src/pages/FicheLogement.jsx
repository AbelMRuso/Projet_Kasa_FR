import styles from "../assets/styles/logements.module.scss";
import TagName from "../assets/components/TagName";
import star from "../assets/img/star_active.png";
import DropDown from "../assets/components/DropDown";
import SlideShow from "../assets/components/SlideShow";
import data from "../assets/data/logements.json";

function FicheLogement() {
    let hostProfile = data[2].host.picture;
    return (
        <main>
            <div>
                <SlideShow></SlideShow>
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
