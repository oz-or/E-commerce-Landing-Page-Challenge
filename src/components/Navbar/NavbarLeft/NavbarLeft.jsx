import Logo from "./Logo";
import NavLinks from "./NavLinks/NavLinks";

function NavbarLeft() {
  return (
    <div className="flex items-center gap-x-16 ">
      <Logo />
      <NavLinks />
    </div>
  );
}

export default NavbarLeft;
