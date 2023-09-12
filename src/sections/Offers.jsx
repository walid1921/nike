import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { offer } from "../assets/images";
import Button from "../components/UI/Button";

const Offers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>



      <div className='flex flex-1 flex-col items-start'>

        <h2 className="font-palanquin font-bold sm:text-5xl text-3xl capitalize"><span className="text-blue-sec">Special</span> Offer</h2>
        <p className="mt-8 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-8 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconUrl={<BsFillArrowRightCircleFill />} />
        <Button label="Learn More" backgroundColor="bg-white" borderColor= "border-slate-gray" textColor="text-slate-gray"  />
        </div>
      </div>
    </section>
  );
};

export default Offers;