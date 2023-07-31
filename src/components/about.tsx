import AboutImg from "../assets/images/image-about-light.jpg";
import AboutImg2 from "../assets/images/image-about-dark.jpg";

const About = () => {
  return (
    <div className="mt-12 mx-auto md:mt-0 md:flex md:justify-between">
      <img
        className="object-fill w-full  md:w-[33%]"
        src={AboutImg2}
        alt="Furniture"
      />
      <div className=" px-6 md:px-0 my-11 md:my-auto md:w-[33%]">
        <h2 className="text-xl tracking-widest uppercase font-bold">
          About our Furniture
        </h2>
        <p className="text-dark-gray text-base mt-4 md:mt-6">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        className="w-full object-fill md:w-[33%]"
        src={AboutImg}
        alt="Furniture"
      />
    </div>
  );
};

export default About;
