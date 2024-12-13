import { SparkleIcon } from "lucide-react";
import CustomButton from "../ui/button";
import { Meteors } from "../magicui/meteors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useRef } from "react";


const HeroHome:React.FC = () => {
    const wrapperRef = useRef(null)
    useGSAP(() =>{
        gsap.set(wrapperRef.current,{
            y:"200",
            opacity:0,
            scale:0.5
        });
        gsap.to(wrapperRef.current,{
            y:"0",
            opacity:1,
            scale:1,
        })
    })
    return(
<section className="flex flex-col w-full items-center justify-end gap-8 h-[80vh] overflow-hidden">
    <Meteors number={80} />

    <div ref={wrapperRef} className="flex flex-col w-full items-center justify-end gap-8" >
    <div className="border border-white/50 bg-gradient-to-r from-purple-400/70 to-purple-900/50  backdrop-blur-3xl flex justify-center items-center gap-2 px-0 rounded-full w-[240px] py-2 text-white">
  <SparkleIcon size={16} />   Your Ai Assistant</div>
  <h1 className="font-bold font-heading text-7xl text-center text-white/80 ">Simplify Your Scheduling with <br/> <span className="bg-gradient-to-bl from-purple-500 to-purple-950 text-transparent bg-clip-text">AI-Powered </span>Precision</h1>
  <p className="font-normal font-body text-md text-white/80">Effortlessly manage appointments, meetings, and tasks with our intelligent scheduling assistant</p>
  <CustomButton renderText="get started for free" arrow />
  </div>
</section>
    )
}

export default HeroHome;