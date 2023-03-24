import "../sass/pages/program-details-3.scss"
import Footer from "../components/footer"
interface SrDragonsProps {

}
const SrDragons: React.FC<SrDragonsProps> = ({ }) => {
    return (
        <div>
            <section className="program-details program-details-3">
                <h2>Sr. Dragons</h2>
                <h3>Young Adult Programs</h3>
            </section>
            <section className="program-details-container">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Gasper Bonomo Kickboxing (GBK) Fundamentals</h2>
                    <p>When you chose to study a new martial art such as kickboxing, you should not take chances learning how to strike with just anyone. You should be very selective about who you learn from because knowing all the little details of your martial art craft is a critical part of learning. Taking the time to invest in yourself will make you into a better fighter by improving your power, your accuracy, and a number of techniques that will help you manage your energy better.</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <section className="program-details-container program-details-container-2">
                <div className="col-2">
                    <h2>Submission Arts Wrestling</h2>
                    <p>(SAW) [サブミッションアーツレスリング] is a modern Catch Wrestling based Japanese Martial Art and Combat Sport that incorporates elements from Sambo and Judo. Founded in the 1980′s by Hidetaka Aso, a student of Karl Gotch, SAW constitutes a NO-GI grappling system that focuses in forcing ones opponent to submit by employing “chains” of chokes and joint locks. One of the trademarks of SAW are its many variations of devastating leglocks. Like its predecessor, SAW supports the belief that a submission can be obtained by establishing either a position or a hold. The practice of Submission Arts Wrestling relies on solid technical principles, live sparring sessions and specific conditioning.</p>
                    <button>Sign Up</button>
                </div>
                <div className="col-1"></div>
            </section>
            <section className="program-details-container program-details-container-3">
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Japanese Jujitsu/Judo Program</h2>
                    <p>If you want to learn jujitsu, it is a good idea that you become familiar with the origin of the martial art first. Many people think that jujitsu came from Brazil but the truth is it is an ancient form of martial arts that can be traced to Japan's feudal period. In fact, the word jujitsu came from the Japanese word jujutsu which means the art of suppleness or flexibility, qualities that are necessary to master the techniques. But the basic principle remains and that is to maximize the use of the human body in unarmed combat.</p>
                    <button>Sing Up</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SrDragons;