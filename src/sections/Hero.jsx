import { useState } from "react";

import Button from "../components/UI/Button";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";



const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

      <div className="flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-blue-sec">Our Summer Collections</p>
        <h1 className="mt-10 mb-5 font-palanquin font-semibold sm:text-8xl text-6xl">The New Arrival <span className="text-blue-sec">Nike</span> Shoes</h1>
        <p className="font-montserrat leading-normal text-lg text-slate-gray mt-6 mb-14">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={<BsFillArrowRightCircleFill />} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 sm:gap-16 gap-10">

          {statistics.map((stat) => {
            return (<div key={stat.label}>
              <p className="sm:text-4xl text-2xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-sm text-slate-gray mt-1">{stat.label}</p>
            </div>)
          })}
        </div>
      </div>

      <div className=" flex-1 center-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero relative">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain " />
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white "></div>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6">
          {shoes.map(shoe => {
            return <div key={shoe}>
              <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}} bigShoeImage={bigShoeImg} />
            </div>
          })}
        </div>


      </div>



    </section>
  );
};

export default Hero;