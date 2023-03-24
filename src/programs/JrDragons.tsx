import "../sass/pages/program-details-2.scss"
import Footer from "../components/footer"
interface JrDragonsProps {

}
const JrDragons: React.FC<JrDragonsProps> = ({ }) => {
    return (
        <div id="1">
            <section className="program-details program-details-2">
                <h2>Jr. Dragons</h2>
                <h3>Youth Programs</h3>
            </section>
            <section className="program-details-container">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Combat Circuit Training Fundamentals</h2>
                    <p>A blended program utilizing the core pillars of mixed martial arts Wrestling, Boxing, Kickboxing and strength movements in a full body work out over the 60 minute class. Functional stations set up on the bag, ring, cage and turf area with multiple coaches to guide you towards success. This program is a benefit for ages 12+ no matter your skill set the coaches will customize workouts accordingly to maximize your growth.</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <section className="program-details-container program-details-container-2">
                <div className="col-2">
                    <h2>No-Gi Grappling Fundamentals</h2>
                    <p>Submission Arts Wrestling (SAW) employs the traditional Japanese grading system of Kyū and Dan invented in the 17th century by Honinbo Dosaku, and first introduced to martial arts by Judo founder Jigorō Kanō. The rank of SAW practitioners is indicated by a colored belt (obi), awarded according to their practical proficiency and technical knowledge of the art.</p>
                    <button>Sign Up</button>
                </div>
                <div className="col-1"></div>
            </section>
            <section className="program-details-container program-details-container-3">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Bonomo Boxing Fundamentals </h2>
                    <p>Boxing training refers to the routine followed by boxers in order to get fit for their sport. Boxing trainers and doctors claim that it is one of the most ascetic forms of training, which makes it a popular choice of exercise for both fitness instructors and personal trainers. Boxing training has multiple scientifically proven benefits including cardiovascular fitness, muscular endurance and weight loss.</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default JrDragons;