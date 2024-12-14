"use client";
import Lenis from "../shared/lenis";
import FeaturesSection from "./features";
import HeroHome from "./hero";
import ClientsSection from "./our-clients";

const HomeComponent: React.FC = () => {
  return (
    <Lenis>
      <HeroHome />
      <ClientsSection />
      {/* <FeaturesSection /> */}
    </Lenis>
  );
};

export default HomeComponent;
