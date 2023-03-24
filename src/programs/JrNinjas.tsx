import "../sass/pages/program-details.scss"
import Footer from "../components/footer"
interface JrNinjasProps {

}
const JrNinjas: React.FC<JrNinjasProps> = ({ }) => {
    return (
        <div>
            <section className="program-details program-details-1">
                <h2>Jr. Ninjas</h2>
                <h3>Kids Programs</h3>
            </section>
            <section className="program-details-container">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Wrestling Fundamentals</h2>
                    <p>Looking for a fun and exciting activity for your kids in Edmonton? Look no further than our wrestling class! Our experienced coaches will teach your kids the fundamentals of wrestling in a safe and supportive environment. From takedowns to pinning techniques, our classes will help your kids build strength, agility, and confidence. Sign up now and give your kids the opportunity to learn a new skill while having a blast!</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <section className="program-details-container program-details-container-2">
                <div className="col-2">
                    <h2>Boxing Fundamentals</h2>
                    <p>Looking for a fun and engaging physical activity for your kids? Consider enrolling them in our boxing program for kids! Our experienced coaches will teach your kids the fundamentals of boxing in a safe and supportive environment. From proper stance and footwork to punching techniques and defensive maneuvers, our program will help your kids build strength, agility, and coordination while also boosting their confidence and discipline. Suitable for all skill levels, our program is designed to challenge and motivate kids of all ages. Enroll your kids now and watch them become strong, focused, and confident boxers!</p>
                    <button>Sign Up</button>
                </div>
                <div className="col-1"></div>
            </section>
            <section className="program-details-container program-details-container-3">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Wrestling Fundamentals</h2>
                    <p>Looking for a fun and exciting activity for your kids in Edmonton? Look no further than our wrestling class! Our experienced coaches will teach your kids the fundamentals of wrestling in a safe and supportive environment. From takedowns to pinning techniques, our classes will help your kids build strength, agility, and confidence. Sign up now and give your kids the opportunity to learn a new skill while having a blast!</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default JrNinjas;