import { useContext, useState } from "react";
import CartSVG from "../../../SVGComponents/CartSVG";
import CartDropdown from "./CartDropdown";
import { useSelector } from "react-redux";
import { getCart } from "../../../../cartSlice";
import CartContext from "../../../../contexts/cartContext";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { isEmpty, setIsEmpty } = useContext(CartContext);

  const cart = useSelector(getCart);
  const cartLength = cart.cart.length;

  return (
    <div className="relative">
      <div className="cursor-pointer">
        <div onClick={() => setIsOpen(!isOpen)} className="relative">
          <CartSVG
            width="22"
            height="20"
            className="cursor-pointer 1000:scale-110"
          />
          {!isOpen && !isEmpty && (
            <span className="absolute   px-[6px] font-bold top-[-5px] right-[-5px] text-[8px] rounded-2xl bg-orangeColor text-lightGrayBlue ">
              {cartLength}
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <CartDropdown isEmpty={isEmpty} setIsEmpty={setIsEmpty} cart={cart} />
      )}
    </div>
  );
}

export default Cart;
