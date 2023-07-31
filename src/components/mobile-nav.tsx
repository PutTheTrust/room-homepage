import { useDispatch, useSelector } from "react-redux";
import close from "../assets/images/icon-close.svg";
import { toggleOpen } from "../store/slice/navbar-slice";

const MobileNav = () => {
  const open = useSelector((state: any) => state.navbarStore.open);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        open
          ? "bg-white flex items-center justify-between px-[26px] absolute h-[110px] w-full left-0 top-0 z-40"
          : "hidden"
      }`}
    >
      <button onClick={() => dispatch(toggleOpen(false))}>
        <img src={close} alt="close" />
      </button>

      <nav>
        <ul>
          <ul className="flex justify-end gap-[34px] text-base font-bold">
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
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
