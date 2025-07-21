import Banner from "../assets/components/Banner";
import DropDown from "../assets/components/DropDown";
import imgBannerAbout from "../assets/img/img_banner_about.svg";

function About() {
    return (
        <>
            <Banner image={imgBannerAbout}></Banner>
            <DropDown
                title={"Fiabilité"}
                description={
                    "Les annonces postées sur Kasa farantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguilièrement vérifiées par nos équipes"
                }
            ></DropDown>
            <DropDown title={"Respect"}></DropDown>
            <DropDown title={"Service"}></DropDown>
            <DropDown title={"Sécurité"}></DropDown>
        </>
    );
}

export default About;
