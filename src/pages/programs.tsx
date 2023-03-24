import Card from "../components/Card";
import "../sass/pages/programs.scss"
interface ProgramsProps {

}
const Programs: React.FC<ProgramsProps> = ({ }) => {
    return (
        <section className="programs" id="programs">
            <div className="inner-container">
                <h2>Programs</h2>
                <Card cardNumber={1} programName="Jr. Ninjas" ages="9-11" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eaque?" />
                <Card cardNumber={2} programName="Jr. Dragons" ages="12-16" description="Lorem ipsum dolor sit"/>
                <Card cardNumber={3} programName="Sr. Dragons" ages="16-22" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eaque"/>
                <Card cardNumber={4} programName="Bushido Warriors" ages="22+" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eaque"/>
          </div>
        </section>
    )
}

export default Programs;
