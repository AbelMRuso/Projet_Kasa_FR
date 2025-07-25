import arrowBack from "../img/arrow_back.svg";
import arrowForward from "../img/arrow_forward.svg";
import styles from "../styles/slideShow.module.scss";
import data from "../data/logements.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SlideShow() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    const [showImage, setshowImage] = useState(0);

    return (
        <div className={styles.carrousel}>
            <img className={styles.carrouselImg} key={showImage} src={logement.pictures[showImage]} alt="" />
            {logement.pictures.length > 1 && (
                <>
                    <p>
                        {showImage + 1}/{logement.pictures.length}
                    </p>

                    <button
                        onClick={() => setshowImage((showImage - 1 + logement.pictures.length) % logement.pictures.length)}
                        className={styles.buttonLeft}
                    >
                        <img src={arrowBack} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            if (showImage >= logement.pictures.length - 1) {
                                setshowImage(0);
                            } else {
                                setshowImage(showImage + 1);
                            }
                        }}
                        className={styles.buttonRight}
                    >
                        <img src={arrowForward} alt="" />
                    </button>
                </>
            )}
        </div>
    );
}

export default SlideShow;
