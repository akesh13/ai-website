"use client";

import { CalendarCheck } from "lucide-react";
import AccentBox from "./ui/accent";
import { BorderBeam } from "./magicui/border-beam";
import { Meteors } from "./magicui/meteors";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturesCard: React.FC = () => {
  const wrapperRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {
    gsap.set(boxRef1.current, {
      x: -800,
      opacity: 0.2,
      rotate: "-45deg",
    });

    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        // scrub: true,
        start: "top 80%",
        end: "center center",
        toggleActions: "play play reverse reverse",
      },
      x: 0,
      opacity: 1,
      rotate: 0,
      duration: 1,
      stagger: 1,
    });
    gsap.set(boxRef2.current, {
      x: 800,
      opacity: 0.2,
      rotate: "45deg",
    });

    gsap.to(boxRef2.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        // scrub: true,
        start: "top 80%",
        end: "center center",
        toggleActions: "play play reverse reverse",
      },
      x: 0,
      opacity: 1,
      rotate: 0,
      duration: 1,
      stagger: 1,
    });
  });

  return (
    <div ref={wrapperRef} className="grid grid-cols-2 items-center gap-8">
      <div
        ref={boxRef1}
        className="relative md:shadow-xl border border-white/30 flex items-start flex-col overflow-hidden rounded-xl gap-6 p-8  capitalize bg-gradient-to-r from-purple-400/10 to-purple-900/50"
      >
        <Meteors />
        <BorderBeam
          borderWidth={2}
          colorFrom="#e7d6fb"
          colorTo="#501599"
          size={550}
          duration={16}
          delay={9}
        />
        <AccentBox
          icon={<CalendarCheck size={18} />}
          renderText="effortless scheduling"
        />
        <h4 className="capitalize font-heading w-[80%] font-bold text-5xl bg-gradient-to-bl from-purple-100 to-purple-600 text-transparent bg-clip-text">
          Automate Meeting Scheduling
        </h4>
        <p className="font-normal font-body text-start text-sm w-[60%]  md:text-md text-white/80">
          Our solution reduces manual effort, minimizes errors, and ensures
          seamless coordination, allowing you to focus on what truly matters.
        </p>
      </div>
      <div
        ref={boxRef2}
        className="relative md:shadow-xl border border-white/30 flex items-start flex-col overflow-hidden rounded-xl gap-6 p-8  capitalize bg-gradient-to-r from-purple-400/10 to-purple-900/50"
      >
        <Meteors />
        <BorderBeam
          borderWidth={2}
          colorFrom="#e7d6fb"
          colorTo="#501599"
          size={550}
          duration={16}
          delay={9}
        />
        <AccentBox
          icon={<CalendarCheck size={18} />}
          renderText="effortless scheduling"
        />
        <h4 className="capitalize font-heading w-[80%] font-bold text-5xl bg-gradient-to-bl from-purple-100 to-purple-600 text-transparent bg-clip-text">
          Automate Meeting Scheduling
        </h4>
        <p className="font-normal font-body text-start text-sm w-[60%]  md:text-md text-white/80">
          Our solution reduces manual effort, minimizes errors, and ensures
          seamless coordination, allowing you to focus on what truly matters.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
