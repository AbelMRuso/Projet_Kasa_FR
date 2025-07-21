import Banner from "../assets/components/Banner";
import Cards from "../assets/components/Cards";
import imgBanner from "../assets/img/image_banner.svg";

function Home() {
    return (
        <>
            <Banner image={imgBanner} text="Chez vous, partout et ailleurs"></Banner>
            <Cards></Cards>
        </>
    );
}

export default Home;
