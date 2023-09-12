import { shoe8 } from "../assets/images";
import Button from "../components/UI/Button";


const Quality = () => {
  return (
    <section id='about-us' className='max-container flex justify-between items-center max-lg:flex-col gap-10 w-full'>
      <div className='flex flex-1 flex-col items-start'>

        <h2 className="font-palanquin font-bold sm:text-5xl text-3xl capitalize lg:max-w-lg">We Provide You <span className="text-blue-sec">Super Quality</span> Shoes</h2>
        <p className="mt-8 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="center-center flex-1">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default Quality;