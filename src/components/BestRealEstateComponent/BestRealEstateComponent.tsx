import { useState } from 'react';
import TitleComponent from '../TitleComponent/TitleComponent'
import './BestRealEstateComponent.css'
import { BuildingsData } from '../../data/buildingsData';

export default function BestRealEstateComponent() {
    const [filter, setFilter] = useState<string>('Residential Property');
    const [Fading, setFading] = useState<string>('fade-in');

    const propertyFilterTypes: string[] = [
        'Residential Property',
        'Commercial Property',
        'Agriculture Property',
        'Industrial Property',
    ];
    const FilteredCards = BuildingsData.filter((card) => {
        return card.typeOfProperty === filter;
    } );

    const handleFilter = (type: string) => {
        if(type === filter) return;
        setFading('fade-out');

        setTimeout(()=> {
            setFilter(type);
            setFading('fade-in');
        }, 500)
    }
  return (
    <div className='px-70'>
      <TitleComponent title='Best Real Estate Deals' description='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
      <div className="tabs" data-aos="fade-up">
        {propertyFilterTypes.map((type, index)=> (
            <button key={index} className={`font-18 ${filter === type ? 'active' : ''} `} onClick={() => handleFilter(type)}>{type}</button>
        ))}
      </div>
      <div className={`property-cards ${Fading}`}>
        {
            FilteredCards.map((card, index) => (
                <div className="card-img-container" key={index} data-aos="flip-left">
                    <img src={card.img} alt="building" />
                </div>
            ))
        }
      </div>
    </div>
  )
}
