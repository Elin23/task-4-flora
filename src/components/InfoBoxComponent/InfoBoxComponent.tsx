import { getInfoBoxData } from "../../data/infoBoxData";
import type { building } from "../../types/building";
import './InfoBoxComponent.css'

type InfoBoxProps = {
  box: building;
  className: string
};
export default function InfoBoxComponent({ box, className }: InfoBoxProps) {
  const infoData = getInfoBoxData(box);

  return (
    <div className="box-container">
      {infoData.map((item, index) => (
        <div className="info" key={index}>
          <div className="icon-container">
            <img src={item.icon} alt={item.alt} />
          </div>
          <div className="info-text">
            <div className="info-label">{item.label}</div>
            <div className={`info-value ${className}`}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
