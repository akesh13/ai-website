import CustomButton from "../ui/button";
import { Meteors } from "../magicui/meteors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AccentBox from "../ui/accent";
import { SparkleIcon } from "lucide-react";

const HeroHome: React.FC = () => {
  const wrapperRef = useRef(null);
  useGSAP(() => {
    gsap.set(wrapperRef.current, {
      y: "40",
      //   scale: 0.5,
    });
    gsap.to(wrapperRef.current, {
      y: "0",
      opacity: 1,
      //   scale: 1,
      duration: 1,
    });
  });
  return (
    <section className="relative flex flex-col w-full items-center justify-end gap-8 h-[80vh] overflow-hidden">
      <Meteors number={80} />

      <div
        ref={wrapperRef}
        className="flex flex-col w-full items-center opacity-0 justify-end gap-8 px-4"
      >
        <AccentBox
          icon={<SparkleIcon size={16} />}
          renderText="Your Ai Assistant"
        />
        <h1 className="font-bold font-heading text-3xl lg:text-7xl text-center text-white/80 ">
          Simplify Your Scheduling with <br />{" "}
          <span className="bg-gradient-to-bl from-purple-500 to-purple-950 text-transparent bg-clip-text">
            AI-Powered{" "}
          </span>
          Precision
        </h1>
        <p className="font-normal font-body text-center text-sm  md:text-md text-white/80">
          Effortlessly manage appointments, meetings, and tasks with our
          intelligent scheduling assistant
        </p>
        <CustomButton renderText="get started for free" arrow />
      </div>
    </section>
  );
};

export default HeroHome;
