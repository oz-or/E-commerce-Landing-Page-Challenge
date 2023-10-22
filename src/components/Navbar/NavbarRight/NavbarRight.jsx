import Cart from "./Cart/Cart";
import User from "./User";

function NavbarRight() {
  return (
    <div className="flex items-center gap-x-[22px] 1000:gap-x-12">
      <Cart />
      <User />
    </div>
  );
}

export default NavbarRight;
