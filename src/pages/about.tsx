import "../sass/pages/about.scss"
import { motion} from "framer-motion"

interface AboutProps {

}

const About: React.FC<AboutProps> = ({ }) => {
    return (
        <section className="about" id="about">
            <div className="inner-container">
                <motion.div
                    initial={{opacity: 0, scale: 0.95}} 
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                >
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                </motion.div>
                <motion.img src="../../public/KPFAboutImg.svg" alt=""
                  initial={{opacity: 0, scale: 0.95}} 
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 2}}
                />
            </div>
        </section>
    )
}

export default About;