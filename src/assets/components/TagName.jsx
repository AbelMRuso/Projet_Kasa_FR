import styles from "../styles/tag.module.scss";

function TagName({ tags }) {
    return (
        <>
            {tags.map((tag, index) => (
                <p key={index} className={styles.tag}>
                    {tag}
                </p>
            ))}
        </>
    );
}

export default TagName;
