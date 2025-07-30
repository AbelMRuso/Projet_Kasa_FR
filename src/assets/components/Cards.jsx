import data from "../data/logements.json";
import styles from "../styles/cards.module.scss";
import { Link } from "react-router-dom";

function Cards() {
    return (
        <section className={styles.gallery}>
            {data.map((logement) => {
                return (
                    <Link key={logement.id} to={`/logements/${logement.id}`}>
                        <article className={styles.card}>
                            <img src={logement.cover} alt={logement.title} />
                            <h2>{logement.title}</h2>
                        </article>
                    </Link>
                );
            })}
        </section>
    );
}

export default Cards;
