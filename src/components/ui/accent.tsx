import { Button } from "../shadcn/button";
import { ReactNode } from "react";

type BoxProps = {
  renderText: string;
  icon: ReactNode;
};

const AccentBox = ({ renderText, icon }: BoxProps) => {
  return (
    <Button className="border border-white/50 capitalize bg-gradient-to-r from-purple-400/70 to-purple-900/50  backdrop-blur-3xl flex justify-center items-center gap-2 rounded-full px-4 py-2 text-white">
      {icon} {renderText}
    </Button>
  );
};

export default AccentBox;
