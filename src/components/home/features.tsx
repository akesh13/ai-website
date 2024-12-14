import { WandSparklesIcon } from "lucide-react";
import AccentBox from "../ui/accent";
import SubHeading from "../ui/sub-heading";
import FeaturesCard from "../features-card";

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-6 mt-48 py-8 px-12">
      <AccentBox renderText="features" icon={<WandSparklesIcon size={18} />} />
      <SubHeading
        heading="Powerful Features to Simplify Your Scheduling"
        para="Discover how our AI-driven tools can transform your productivity and streamline your day"
      />
      <div className="w-[80%] space-y-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <FeaturesCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
