import data from "../data/logements.json";
import styles from "../styles/cards.module.scss";

function Cards() {
    return (
        <section className={styles.gallery}>
            {data.map((logement) => {
                return (
                    <article className={styles.card}>
                        <img src={logement.cover} alt={logement.title} />
                        <h2>{logement.title}</h2>
                    </article>
                );
            })}
        </section>
    );
}

export default Cards;

/*  - AJOUTER KEY (ID) À CHAQUE ARTICLE
    - IMPORTER NAVLINK 
    - AJOUTER UNE NAVLINK TO À CHACHE CARTE AVEC SON ID */
