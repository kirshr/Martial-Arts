import "../sass/pages/home.scss"
import { motion } from "framer-motion"
interface BannerProps {
    subtitle: string;
}

const Banner: React.FC<BannerProps> = ({subtitle}) => { 

    return (
        <section className="home">
            <motion.div className="inner-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{delay: 1, duration: 1 }}
            >
                <img src="../../public/KpFLogoMain.svg" alt="Main Logo" />
                <h2>{subtitle}</h2>
            </motion.div>
        </section>
    )
}

export default Banner;