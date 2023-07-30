import { useDispatch } from "react-redux";
import left from "../assets/images/icon-angle-left.svg";
import right from "../assets/images/icon-angle-right.svg";
import { slide } from "../store/slice/hero-slice";

interface SliderProps {
  styles: string;
}

const Slider: React.FC<SliderProps> = ({ styles }) => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles} absolute bottom-0 right-0 md:left-0 z-20`}>
      <button
        className="bg-black w-14 h-14 md:w-20 md:h-20 "
        onClick={() => dispatch(slide(-1))}
      >
        <img className="mx-auto" src={left} alt="left" />
      </button>

      <button
        className="bg-black w-14 h-14 md:w-20 md:h-20 "
        onClick={() => dispatch(slide(+1))}
      >
        <img className="mx-auto" src={right} alt="right" />
      </button>
    </div>
  );
};

export default Slider;
