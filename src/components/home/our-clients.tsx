"use client";

import { QuoteIcon } from "lucide-react";
import { Marquee } from "../magicui/marquee";
import TestimonialsCard from "../testimonials-card";
import AccentBox from "../ui/accent";
import SubHeading from "../ui/sub-heading";

const ClientsSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 py-8 mt-24 md:mt-48 overflow-hidden">
      <AccentBox icon={<QuoteIcon size={18} />} renderText="Testimonials" />
      <SubHeading
        heading="What Our Users are Saying"
        para="Hear from satisfied users of the AI Scheduling Assistant"
      />
      <Marquee pauseOnHover className="pt-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <TestimonialsCard key={i} />
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSection;
