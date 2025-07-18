import Banner from "../assets/components/Banner";
import DropDown from "../assets/components/DropDown";
import imgBannerAbout from "../assets/img/img_banner_about.svg";

function About() {
    return (
        <>
            <Banner image={imgBannerAbout}></Banner>
            <DropDown></DropDown>
            <DropDown></DropDown>
            <DropDown></DropDown>
            <DropDown></DropDown>
        </>
    );
}

export default About;
