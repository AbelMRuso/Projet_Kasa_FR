import arrowDown from "../img/arrow_down.svg";
import styles from "../styles/dropDown.module.scss";

function DropDown() {
    return (
        <section>
            <div className={styles.menuClose}>
                <h3>Title section</h3>
                <button>
                    <img src={arrowDown} alt="Ouvrir menu" />
                </button>
            </div>
            <ul>
                <li>Tag 1</li>
                <li>Tag 2</li>
                <li>tag 3</li>
                <li>Tag 4</li>
            </ul>
        </section>
    );
}

export default DropDown;
