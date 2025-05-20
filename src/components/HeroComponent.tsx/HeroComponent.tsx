import { useEffect, useState } from 'react';
import type { building } from '../../types/building';
import './HeroComponent.css';
import InfoBoxComponent from '../InfoBoxComponent/InfoBoxComponent';


type HeroProps = {
    description: string;
    title: string;
    buildings: building[];
};
export default function HeroComponent({ description, title, buildings }: HeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = buildings[currentIndex];
    const [fade, setFade] = useState(true);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setFade(false);
            setTimeout(() =>{
                setCurrentIndex((prev)=> (prev + 1) % buildings.length);
                setFade(true);
            }, 500)
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='px-70 hero-container' data-aos="fade">
            <div className="hero-text">
                <h2 className='font-60'>{title}</h2>
                <p>{description}</p>
            </div>
            <InfoBoxComponent box={current} className= {fade ? "fade-in" : "fade-out"}/>
            <img className={fade ? "fade-in" : "fade-out"} src={current.img} alt="building" />
        </div>
    )
}
