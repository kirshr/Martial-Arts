
import Banner from '../components/Banner'
import About from '../pages/about'
import Programs from '../pages/programs'
import ActionBanner from '../components/actionBanner'
import Contact from '../components/contact'
import Footer from '../components/footer'

import "../sass/base/reset.scss"
import "../sass/typography/typography.scss"
import "../sass/base/variables.scss"



interface HomeProps {

}
const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <div id='home'>
            <Banner subtitle='Martial Arts Institute' />
            <About />
            <Programs />
            <ActionBanner heading='Join our Class' />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;