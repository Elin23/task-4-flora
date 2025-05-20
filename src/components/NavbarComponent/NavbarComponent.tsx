import { Link, NavLink } from "react-router-dom";
import type { PagesLinks } from "../../types/links";
import './NavbarComponent.css'
import { useEffect, useState } from "react";

type NavbarProps = {
    links: PagesLinks[];
    logo: string;
    sideButton: string;
};
export default function NavbarComponent({ links, logo, sideButton }: NavbarProps) {
    const [openMenu, setOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const sideButtonLink = links.find(links => links.label == sideButton);
    const pagesLinks = links.slice(0, 5);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={`px-70 ${isScrolled ? "scrolled" : ""}`}>
            <Link to={'/'}><img src={logo} alt="Logo" /></Link>
            <ul className="nav-links desktop">
                {pagesLinks.map((link, index) => (
                    <li key={index}><NavLink className="fw-500" to={link.path}>{link.label}</NavLink></li>
                ))}
            </ul>
            {
                sideButtonLink && (
                    <button className="side-btn desktop"><Link className="font-14" to={sideButtonLink.path}>{sideButtonLink.label}</Link></button>
                )
            }
            {/* Hamburger icon */}
            <button className="mobile" onClick={() => setOpenMenu(true)}>
                <img src="/task-4-flora/assets/icons/burger_icon.svg" alt="burger icon" />
            </button>
            {
                openMenu && (
                    <div className="mobile-menu" data-aos="fade">
                        <div className="menu-header">
                            <img src={logo} alt="Logo" />
                            <button className="mobile" onClick={() => setOpenMenu(false)}>
                                <img src="/task-4-flora/assets/icons/close.svg" alt="close icon" />
                            </button>
                        </div>
                        <ul className="nav-links mobile">
                            {pagesLinks.map(link => (
                                <li key={link.label}>
                                    <NavLink to={link.path} onClick={() => setOpenMenu(false)}>{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                        {sideButtonLink && (
                            <button className="side-btn">
                                <Link to={sideButtonLink.path}>{sideButtonLink.label}</Link>
                            </button>
                        )}
                    </div>
                )
            }
        </nav>
    )
}
