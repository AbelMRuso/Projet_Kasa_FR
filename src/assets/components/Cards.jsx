import data from "../data/logements.json";
import styles from "../styles/cards.module.scss";

function Cards() {
    return (
        <section className={styles.gallery}>
            {data.map((logement) => {
                return (
                    <article className={styles.card}>
                        <img src={logement.cover} alt={logement.title} />
                        <h4>{logement.title}</h4>
                    </article>
                );
            })}
        </section>
    );
}

export default Cards;
