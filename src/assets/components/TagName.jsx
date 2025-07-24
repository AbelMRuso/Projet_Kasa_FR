import styles from "../styles/tag.module.scss";
import data from "../data/logements.json";

import { useParams } from "react-router-dom";

function TagName() {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);
    return (
        <>
            {logement.tags.map((tag, index) => (
                <p className={styles.tag}>{tag}</p>
            ))}
        </>
    );
}

export default TagName;
