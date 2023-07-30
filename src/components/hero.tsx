import Navbar from "./navbar";

import chair from "../assets/images/desktop-image-hero-3.jpg";
import chairM from "../assets/images/mobile-image-hero-3.jpg";
import arrow from "../assets/images/icon-arrow.svg";
import Slider from "./slider";

import { data } from "../assets/data";
import { useSelector } from "react-redux";

// interface data {
//     id: number,
//     title: string,
//     text: string
// }

const Hero = () => {
  const current = useSelector((state: any) => state.heroStore.current);
  console.log(current);
  return (
    <div className="px-6 md:px-[64px] relative z-10">
      <Navbar />
      {/* h-[360px] md:h-[534px] */}
      <div className="flex flex-col md:flex-row  w-full absolute top-0 left-0 z-[-1]">
        <div className="w-full md:w-[58%] h-full bg-green-500 relative">
          <img
            className="object-cover h-[360px] md:h-[534px] w-full"
            src={data[current].urlM}
            srcSet={`${data[current].urlD} 768w`}
            alt="furniture"
          />

          <Slider styles=" md:hidden" />
        </div>

        <div className="md:flex-1 relative">
          <div className="mx-8 mt-[62px] md:py-auto md:mx-[40px]">
            <h1 className="text-4xl md:text-6xl font-bold">
              {data[current].title}
            </h1>
            <p className="text-dark-gray text-base mt-7">
              {data[current].text}
            </p>

            <button className="text-xl tracking-[10px] flex items-center mt-[50px] md:mt-6 font-bold">
              SHOP NOW <img src={arrow} alt="arrow" />
            </button>
          </div>
          <Slider styles="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
