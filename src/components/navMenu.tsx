"use client";
import { useGSAP } from "@gsap/react";
import { RainbowButton } from "./magicui/rainbowbtn";
import { SparklesText } from "./magicui/sparkleText";
import BorderMenu from "./ui/menus";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Menu } from "lucide-react";

const NavMenu: React.FC = () => {
  const wrapperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:530px)");

  type Menu = {
    menu: string;
    url?: string;
  };

  const menus: Menu[] = [
    {
      menu: "Home",
      url: "",
    },
    {
      menu: "about us",
      url: "",
    },
    {
      menu: "contact us",
      url: "",
    },
  ];

  useGSAP(() => {
    gsap.set(wrapperRef.current, {
      y: "-40",
    });

    gsap.to(wrapperRef.current, {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.8,
    });
  });

  return (
    <nav
      ref={wrapperRef}
      className="bg-gray-600/20 px-4 sticky top-0 z-50 opacity-0 md:px-20 py-4 backdrop-blur-3xl border-b border-white/20 flex justify-between items-center"
    >
      <SparklesText
        text="3d Ai Website"
        sparklesCount={10}
        className="text-lg text-nowrap md:text-3xl font-heading text-white font-semibold"
      />
      <ul className="flex justify-center items-center text-white font-body space-x-8">
        {!isMobile &&
          menus?.map((menu, i) => (
            <BorderMenu key={i} renderText={menu.menu} />
          ))}
        {isMobile && <Menu size={28} color="white" />}
      </ul>
      <RainbowButton className="font-body hidden lg:block">
        Get Started
      </RainbowButton>
    </nav>
  );
};

export default NavMenu;
