import Banner from "../assets/components/Banner";
import DropDown from "../assets/components/DropDown";
import imgBannerAbout from "../assets/img/img_banner_about.svg";
import styles from "../assets/styles/about.module.scss";

function About() {
    return (
        <>
            <main>
                <Banner image={imgBannerAbout}></Banner>
                <section className={styles.querry}>
                    <DropDown
                        title={"Fiabilité"}
                        description={
                            "Les annonces postées sur Kasa farantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguilièrement vérifiées par nos équipes"
                        }
                    ></DropDown>
                    <DropDown
                        title={"Respect"}
                        description={
                            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        }
                    ></DropDown>
                    <DropDown
                        title={"Service"}
                        description={
                            "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce qeu chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                        }
                    ></DropDown>
                    <DropDown
                        title={"Sécurité"}
                        description={
                            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'ôte qu'au locataire, cela permet à nos équipes de vérifier qeu les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
                        }
                    ></DropDown>
                </section>
            </main>
        </>
    );
}

export default About;
