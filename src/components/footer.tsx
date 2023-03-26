import "../sass/components/footer.scss"
import Map from "./GoogleMaps"
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai"
import { SiFacebook } from "react-icons/si"
import { Link } from "react-router-dom"

interface FooterProps {

}
const Footer: React.FC<FooterProps> = ({ }) => {
    return (
        <footer>
            <a href="/#"><img src="/DragonLogo.svg" alt="" /><h2>Martial Arts Institute</h2></a>
            <div className="map-container">
                <Map apiKey="AIzaSyA0yBsbtaAo74fw6Hp0jADzP6VVEKuEMfI" lat={53.57444499857409} lng={-113.46055941705234} />
            </div>
            <div className="social-media">
                <Link to="/"><AiFillTwitterCircle /></Link>
                <Link to="/"><SiFacebook /></Link>
                <Link to="/"><AiFillInstagram/></Link>
            </div>
        </footer>
    )
}

export default Footer;
