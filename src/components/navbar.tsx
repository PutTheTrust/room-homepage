import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import MobileNav from "./mobile-nav";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../store/slice/navbar-slice";

const Navbar = () => {
  const dispatch = useDispatch();
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
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
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
