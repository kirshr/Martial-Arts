import "../sass/components/card.scss"
import { Link } from "react-router-dom"
import { motion} from "framer-motion"
interface CardProps {
    cardNumber: number;
    programName: string;
    ages: string;
    description: string;
}
const handleClick = () => {
    window.scrollTo(0, 0);
  };
const Card: React.FC<CardProps> = ({cardNumber,programName,ages,description}) => {
    return (
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2, delay: cardNumber * 0.1}}
        >
            <Link to={`/programs/${cardNumber}`} onClick={handleClick} className="card">
                <span>{cardNumber}</span>
                <h3>{programName}</h3>
                <p className="age">Ages {ages}</p>
                <p className="desc">{description}</p>
            </Link>
        </motion.div>
    )
}

export default Card;