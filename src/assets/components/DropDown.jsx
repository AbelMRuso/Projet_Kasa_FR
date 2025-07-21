import arrowDown from "../img/arrow_down.svg";
import styles from "../styles/dropDown.module.scss";
import { useState } from "react";

function DropDown({ title, description, equipments }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div className={styles.menuClose}>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrowDown} alt="Ouvrir menu" />
                </button>
                <div className={styles.description}>
                    {isOpen && (
                        <div>
                            <p>{description}</p>
                            <ul>
                                <li>{equipments}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default DropDown;

/* AJOUTER UN .MAP() POUR RECUPERER LES EQUIPEMENTS DE L'ARRAY DATA DANS LA BALISE UL */
