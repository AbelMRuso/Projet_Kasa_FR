import arrowDown from "../img/arrow_down.svg";
import styles from "../styles/dropDown.module.scss";
import { useState } from "react";

function DropDown({ title, description = "", equipments = [] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article>
            <div className={styles.headline}>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrowDown} alt="Ouvrir menu" className={isOpen ? styles.arrowUp : ""} />
                </button>
            </div>

            <div className={`${styles.description} ${isOpen ? styles.descriptionOpen : styles.descriptionClosed}`}>
                {description && <p>{description}</p>}
                {equipments.length > 0 && (
                    <ul>
                        {equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default DropDown;
