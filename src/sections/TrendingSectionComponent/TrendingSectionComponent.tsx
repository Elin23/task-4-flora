import CardComponent from '../../components/CardComponent/CardComponent';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import type { building } from '../../types/building'

import './TrendingSectionComponent.css'

type TrendingSectionProps = {
    buildings: building[];
  };
export default function TrendingSectionComponent({buildings} : TrendingSectionProps) {
  return (
    <div className='px-70'>
      <TitleComponent title='Most Trending' description='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
      <div className="trending-cards">
        {
            buildings.slice(0, -3).map((building, index) => (
                <CardComponent img={building.img} title={building.name} location={building.location} price={building.price}/>
            ))
        }
      </div>
    </div>
  )
}
