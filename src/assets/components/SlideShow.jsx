import arrowBack from "../img/arrow_back.svg";
import arrowForward from "../img/arrow_forward.svg";
import styles from "../styles/slideShow.module.scss";
import { useState } from "react";

function SlideShow({ pictures }) {
    const [showImage, setshowImage] = useState(0);

    return (
        <div className={styles.carrousel}>
            <img className={styles.carrouselImg} key={showImage} src={pictures[showImage]} alt="" />
            {pictures.length > 1 && (
                <>
                    <p>
                        {showImage + 1}/{pictures.length}
                    </p>

                    <button onClick={() => setshowImage((showImage - 1 + pictures.length) % pictures.length)} className={styles.buttonLeft}>
                        <img src={arrowBack} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            if (showImage >= pictures.length - 1) {
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
