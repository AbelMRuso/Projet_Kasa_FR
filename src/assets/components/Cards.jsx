import data from "../data/logements.json";
import styles from "../styles/cards.module.scss";
import { NavLink } from "react-router-dom";

function Cards() {
    return (
        <section className={styles.gallery}>
            {data.map((logement) => {
                return (
                    <NavLink to={`/logements/${logement.id}`}>
                        <article className={styles.card} key={logement.id}>
                            <img src={logement.cover} alt={logement.title} />
                            <h2>{logement.title}</h2>
                        </article>
                    </NavLink>
                );
            })}
        </section>
    );
}

export default Cards;
