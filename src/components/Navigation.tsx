import { useState } from 'react'
import "../sass/components/nav.scss"
import { CgMenuRound } from 'react-icons/cg'
import {Outlet} from 'react-router-dom'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { motion } from "framer-motion"
interface NavigationProps {
    isMobile?: boolean;

}
  
const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <motion.div className="inner-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                >
                    <a href="/"><img src="../../public/KpFLogoMain.svg" width="200" alt="" /></a>
                    <ul className={`menu-list ${isOpen ? "open" : ""}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/#programs">Programs</a></li>
                        <li><a href="/#contact">Contact Us</a></li>
                    </ul>
                    {
                    !isOpen ?
                        <button className='menu-icon' onClick={toggleNav}>
                        <CgMenuRound fill='#f7f7f7' />
                        </button> :
                        <button className='menu-icon close' onClick={toggleNav}>
                        <AiOutlineCloseCircle  fill='#f7f7f7'/>
                        </button>
                    }
                </motion.div>
            </nav>
            <Outlet/>
        </header>
      
    )

}

export default Navigation