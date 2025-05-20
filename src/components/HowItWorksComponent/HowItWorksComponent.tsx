import { howItWorksData } from "../../data/howItWorksData";
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import './HowItWorksComponent.css'
export default function HowItWorksComponent() {
    return (
        <div className="px-70 HIW-container">
            <TitleComponent title={'How it Works'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing eli'} />
            <div className="HIW-cards">
                {
                    howItWorksData.map((card, index) => (
                        <HowItWorksCard icon={card.icon} title={card.title} description={card.description} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
