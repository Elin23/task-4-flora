import { useEffect, useState } from "react";
import BannerComponent from "../components/BannerComponent/BannerComponent";
import BestRealEstateComponent from "../components/BestRealEstateComponent/BestRealEstateComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import HeroComponent from "../components/HeroComponent.tsx/HeroComponent";
import HowItWorksComponent from "../components/HowItWorksComponent/HowItWorksComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import TrendingSectionComponent from "../components/TrendingSectionComponent/TrendingSectionComponent";
import { BuildingsData, heroBuildingsData } from "../data/buildingsData";
import { pagesLinks } from "../data/linksData";
import { socialLinks } from "../data/socialLinksData";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 600);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {
        showLoader ? (
          <Loader className={loading ? "" : "fade-out"} />
        ) : (
          <div>
            <header>
              <NavbarComponent links={pagesLinks} logo="/task-4-flora/assets/imgs/logo.png" sideButton="Login" />
              <HeroComponent title="Discover a place you will love to live"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
                buildings={heroBuildingsData}
              />
            </header>
            <main>
              <HowItWorksComponent />
              <BannerComponent title="Find Dream Home" description="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
              <TrendingSectionComponent buildings={BuildingsData} />
              <BestRealEstateComponent />
            </main>
            <FooterComponent logo="/task-4-flora/assets/imgs/logo.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
              location="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
              links={pagesLinks}
              social={socialLinks}
            />
          </div>
        )
      }

    </div>
  )
}
