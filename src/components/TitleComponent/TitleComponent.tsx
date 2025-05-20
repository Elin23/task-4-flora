import './TitleComponent.css'

type TitleProps = {
  title: string;
  description: string;
};
export default function TitleComponent({ title, description }: TitleProps) {
  return (
    <div className='mt-94 title-container' data-aos="fade-up">
      <h3 className='font-39'>{title}</h3>
      <p className='font-15'>{description}</p>
    </div>
  );
}