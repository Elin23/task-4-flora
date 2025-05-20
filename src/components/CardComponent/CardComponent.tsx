import './CardComponent.css'
type CardProps = {
    img: string;
    price: number | string;
    title: string;
    location: string;
}
export default function CardComponent({img, price, title, location} : CardProps) {
  return (
    <div className='card-container' data-aos="zoom-in">
      <img src={img} alt="building-img" />
      <span className='font-18 card-price'>${price}</span>
      <span className='font-18 card-title'>{title}</span>
      <div className='card-sub-container'>
        <img src="/task-4-flora/assets/icons/location_solid.svg" alt="icon" />
        <span className='font-14'>{location}</span>
      </div>
    </div>
  )
}
