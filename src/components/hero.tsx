import Navbar from "./navbar";

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
    <div className="relative z-10">
      <Navbar />
      {/* h-[360px] md:h-[534px] */}
      <div className="flex flex-col md:flex-row  w-full ">
        <div className="w-full md:w-[58%] h-full bg-green-500 relative">
          <img
            className="object-cover h-[360px] md:h-[534px] w-full"
            src={data[current].urlM}
            srcSet={`${data[current].urlD} 768w`}
            alt="furniture"
          />

          <Slider styles=" md:hidden" />
        </div>

        <div className="relative md:px-[2%] flex-1 ">
          <div className="px-6 md:px-0 mt-[62px] md:py-auto w-full ">
            <h1 className="text-4xl xl:text-5xl font-bold">
              {data[current].title}
            </h1>
            <p className="text-dark-gray text-base mt-7">
              {data[current].text}
            </p>

            <button className="text-xl tracking-[10px] flex items-center mt-[50px] md:mt-6 font-bold hover:text-dark-gray transition-colors">
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
