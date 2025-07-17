import data from "../data/logements.json";
import styles from "../styles/cards.module.scss";

function Cards() {
    const imagen = data[0].cover;
    const titulo = data[0].title;

    return (
        <article className={styles.card}>
            <img src={imagen} alt={titulo} />
            <h4>{titulo}</h4>
        </article>
    );
}

export default Cards;
