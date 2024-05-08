import profile from "../../../assets/testimonial-profile.jpg";
import quote from "../../../assets/icons/quotes.svg";

const Testimonials = () => {
  return (
    <div>
      <div className="text-lg font-bold border-b py-3 mb-4">Testimonials</div>
      <div className="flex flex-col gap-4 items-center border rounded-md my-4 p-4">
        <img className="w-20 rounded-full" src={profile} alt="" />
        <span className="text-xl text-gray-500 font-bold">ALAN DOE</span>
        <span>CEO & Founder Invision</span>
        <img className="w-8" src={quote} alt="" />
        <p className="w-3/5 text-center text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
