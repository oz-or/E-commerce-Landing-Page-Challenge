import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarRight from "./NavbarRight/NavbarRight";

function Navbar() {
  return (
    <nav className="justify-center 1000:grid">
      <div className="flex items-center justify-between px-6 1000:pl-0 1100:px-0 pt-5 pb-6 1000:pb-0 1000:pt-0 1000:w-[1000px] 1440:w-[1100px] 1700:w-[1300px]">
        <NavbarLeft />
        <NavbarRight />
      </div>
      <hr className="text-lightGrayBlue 1000:w-[1000px] 1440:w-[1100px] 1700:w-[1300px]" />
    </nav>
  );
}

export default Navbar;
