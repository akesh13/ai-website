import Link from "next/link";
import { Button } from "../shadcn/button"
import { MoveRight } from "lucide-react";

interface ButtonProps {
    renderText:string;
    href?:string;
    arrow?:boolean;
}

const CustomButton = ({renderText,href,arrow}:ButtonProps) => {
    return(
        <Button className="border border-white/50 py-4 px-8 bg-gradient-to-bl hover:from-purple-400 hover:to-purple-950 transition-all duration-1000 from-purple-950 to-purple-400  backdrop-blur-3xl rounded-full">
            <Link className="font-body font-semibold text-center text-white capitalize text-lg" href={href?href:"#"}>{renderText}</Link>
            {arrow && <MoveRight size={16} color="white" />}
        </Button>
    )
}

export default CustomButton;