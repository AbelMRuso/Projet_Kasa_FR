import arrowDown from "../img/arrow_down.svg";
import styles from "../styles/dropDown.module.scss";
import { useState } from "react";

function DropDown({ title, description, equipments }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div className={styles.headline}>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrowDown} alt="Ouvrir menu" className={isOpen ? styles.arrowUp : ""} />
                </button>
            </div>

            {isOpen && (
                <div className={styles.description}>
                    <p>{description}</p>
                    <ul>
                        <li>{equipments}</li>
                    </ul>
                </div>
            )}
        </section>
    );
}

export default DropDown;

/* AJOUTER UN .MAP() POUR RECUPERER LES EQUIPEMENTS DE L'ARRAY DATA DANS LA BALISE UL */
