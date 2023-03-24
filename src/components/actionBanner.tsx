import "../sass/components/actionBanner.scss"

interface ActionBannerProps {
    heading: string;
    subHeading?: string;

}
const ActionBanner: React.FC<ActionBannerProps> = ({heading, subHeading }) => {
    return(
        <aside className="action-banner">
            <div className="inner-container">
                <h4>{heading}</h4>
                <h5>{subHeading}</h5>
                <button>Get Started</button>
                <img src="/MartialArtsContact.webp" alt="A man doing Muay Thai" />
            </div>
        </aside>
    )
}

export default ActionBanner;