import { Link } from "react-router-dom";
import type { PagesLinks, SocialLinks } from "../../types/links";
import './FooterComponent.css'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
type FooterProps = {
    logo: string;
    description: string;
    location: string;
    links: PagesLinks[];
    social: SocialLinks[];
}
export default function FooterComponent({logo, description, location, links, social} : FooterProps) {
    const footerLinks = links.filter((link) => link.subLinks);
    const lastTwoPages = links.slice(-2);
  return (
    <footer className="footer-container mt-94 px-70" data-aos="fade-up">
      <div className="site-info">
        <img src={logo} alt="logo" />
        <p>{description}</p>
      </div>
      {
        footerLinks.map((link, index)=> (
            <div className="site-page" key={index}>
                <Link className="page-name font-20" to={link.path}>
                    {link.label}
                </Link>
                <ul className="page-sections">
                    {
                        link.subLinks?.map((subLink, index)=>(
                            <li key={index}><Link to={`${link.path}${subLink.id}`}>{subLink.sectionName}</Link></li>
                        ))
                    }
                </ul>
            </div>
        ))
      }
      <div className="location-info">
        <div className="font-20">Our Location</div>
        <span>{location}</span>
        <ul className="social-media-links">
            {
                social.map((social, index)=> (
                    <li>
                        <ButtonComponent href={social.url} icon={social.icon} alt="social-media-icon" key={index}/>
                    </li>
                ))
            }
        </ul>
      </div>
      <div className="copyright-info">
        <p>Copyright 2024 flora. All Rights Reserved</p>
        <div className="sub-links">
            {
                lastTwoPages.map((page, index) => (
                    <Link key={index} className="font-14" to={page.path}>{page.label}</Link>
                ))
            }
        </div>
      </div>
    </footer>
  )
}
