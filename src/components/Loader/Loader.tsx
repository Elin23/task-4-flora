import './Loader.css'
export default function Loader({ className = "" }) {
    return (
      <section className={`dots-container ${className}`}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
    )
}
