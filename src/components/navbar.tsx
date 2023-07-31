import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import MobileNav from "./mobile-nav";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../store/slice/navbar-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const hover =
    "relative hover:after:absolute hover:after:bg-white hover:after:w-1/2 hover:after:h-1 hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:mx-auto cursor:pointer";
  return (
    <>
      <div className="flex items-center h-[110px] md:gap-14 absolute z-20 w-full px-6">
        <button
          className="md:hidden"
          onClick={() => dispatch(toggleOpen(true))}
        >
          <img src={menu} alt="menu" />
        </button>

        <img className="mx-auto md:mx-0" src={logo} alt="Logo" />

        <nav className="text-white hidden md:block">
          <ul className="flex justify-end gap-[34px] text-base">
            <li className={hover}>
              <a href="#">home</a>
            </li>
            <li className={hover}>
              <a href="#">shop</a>
            </li>
            <li className={hover}>
              <a href="#">about</a>
            </li>
            <li className={hover}>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
