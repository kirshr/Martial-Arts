import "../sass/components/footer.scss"
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai"
import { SiFacebook } from "react-icons/si"
import { Link } from "react-router-dom"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./Map"
import React, {ReactElement} from 'react'

const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
  };
interface FooterProps {

}
const Footer: React.FC<FooterProps> = ({ }) => {
    const center = { lat: 53.57444499857409, lng: -113.46055941705234 };
    const zoom = 12;
    const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API
    return (
        <footer>
            
            <a href="/#"><img src="/DragonLogo.svg" alt="" /><h2>Martial Arts Institute</h2></a>
            <Wrapper apiKey={apiKey} render={render}>
                <MyMapComponent center={center} zoom={zoom} />
            </Wrapper>
            <div className="social-media">
                <Link to="/"><AiFillTwitterCircle /></Link>
                <Link to="/"><SiFacebook /></Link>
                <Link to="/"><AiFillInstagram/></Link>
            </div>
        </footer>
    )
}

export default Footer;
