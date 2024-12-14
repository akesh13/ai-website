import { QuoteIcon } from "lucide-react";

const TestimonialsCard: React.FC = () => {
  return (
    <div className="border border-white/20 flex flex-col items-start justify-start space-y-6 rounded-lg w-[80vw] md:w-[30vw] px-4 py-8 [--duration:20s] bg-gradient-to-tl from-purple-950 to bg-purple-600 backdrop-blur-3xl bg-opacity-5 text-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-start gap-2">
          <img
            src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661875525/insta-dp-3_ryrcnt.jpg"
            alt="img"
            className="h-[38px] w-[38px] rounded-full object-contain"
          />
          <h6 className="text-lg text-white font-heading font-bold">
            Jhon Doe
          </h6>
        </div>
        <QuoteIcon size={28} />
      </div>

      <em className="font-body font-normal text-white/90">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        quasi eveniet adipisci repudiandae nulla mollitia ducimus cum deleniti
        praesentium voluptatibus distinctio, molestias optio repellat magnam ut
        nemo ea non molestiae!
      </em>
    </div>
  );
};

export default TestimonialsCard;
