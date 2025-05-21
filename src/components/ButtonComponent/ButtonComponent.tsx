import './ButtonComponent.css'
type BtnProps = {
    key: number,
    href: string,
    icon: string,
    alt: string
}
export default function ButtonComponent({key, href, icon, alt}:BtnProps) {
  return (
      <a key={key} href={href} className='customized-btn'>
        <img src={icon} alt={alt} />
      </a>
  )
}
