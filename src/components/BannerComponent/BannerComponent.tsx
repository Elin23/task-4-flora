import './BannerComponent.css'
type BannerProps = {
    title: string;
    description: string;
}
export default function BannerComponent({title, description} : BannerProps) {
  return (
    <div className='banner-container mt-94' data-aos="fade">
      <h3 className='font-70' data-aos="fade-up">{title}</h3>
      <p className='font-30' data-aos="fade-up">{description}</p>
    </div>
  )
}
