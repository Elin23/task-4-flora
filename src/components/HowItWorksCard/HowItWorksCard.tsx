import './HowItWorksCard.css'
type HowItWorksCardProps = {
    icon: string;
    title: string;
    description: string;
    key: number;
}
export default function HowItWorksCard({ icon, title, description, key }: HowItWorksCardProps) {
    return (
        <div className='HIT-card-container' key={key} data-aos="flip-left">
            <img src={icon} alt="icon" />
            <div className="HIT-card-content">
                <h3 className='font-22'>{title}</h3>
                <p className='font-14'>{description}</p>
            </div>
        </div>
    )
}
