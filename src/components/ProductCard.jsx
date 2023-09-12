import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] hover:cursor-pointer" />

      <div className="mt-8 flex flex-col justify-start ">
        <div className="flex items-center gap-3">
          <img className="custom-image" src={star} alt='rating' height={28} width={28} />
          <p className="text-slate-gray font-montserrat text-md">({rating})</p>

        </div>
        <h3 className="mt-2 text-2xl font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-blue-sec text-xl">{price}</p>


      </div>

    </div>
  );
};

export default ProductCard;