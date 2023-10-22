import { useDispatch } from "react-redux";
import DeleteSVG from "../../../SVGComponents/DeleteSVG";
import ActionBtn from "../../../ui/ActionBtn";
import { clearCart } from "../../../../cartSlice";

function CartDropdown({ isEmpty, setIsEmpty, cart }) {
  const name = isEmpty ? "" : cart.cart[0].name;
  const priceOfOneItem = isEmpty ? "" : cart.cart[0].price;
  const totalPrice = isEmpty ? "" : cart.cart[0].totalPrice;
  const quantity = isEmpty ? "" : cart.cart[0].quantity;

  const dispatch = useDispatch();

  function handleClearCart() {
    setIsEmpty(true);
    dispatch(clearCart());
  }

  return (
    <div className="absolute z-40 h-[255px] w-[360px] bg-whiteColor rounded-xl top-[54px] right-[-62px]  shadow-[0px_30px_34px_-9px_rgba(0,0,0,.2)] 1200:right-[-170px] overflow-y-auto">
      <div className="p-6 ">
        <span className="font-bold ">Cart</span>
      </div>
      <hr />
      {isEmpty ? (
        <div className="flex items-center justify-center w-full h-[180px] ">
          <span className="font-bold text-grayBlue">Your cart is empty.</span>
        </div>
      ) : (
        <div className="grid pt-4 gap-y-5">
          <div className="flex items-center pl-5 gap-x-5 ">
            <img
              src="../../../../../images/image-product-1-thumbnail.jpg"
              alt=""
              className="h-12 rounded-md"
            />
            <div>
              <span className="text-darkGrayBlue">{name}</span>
              <div className="flex gap-x-2">
                <span className="text-darkGrayBlue">
                  {`$${priceOfOneItem.toFixed(2)} x ${quantity}`}
                </span>
                <span className="font-bold">{`$${totalPrice.toFixed(2)}`}</span>
              </div>
            </div>
            <div
              className="translate-x-1 cursor-pointer "
              onClick={handleClearCart}
            >
              <DeleteSVG />
            </div>
          </div>

          <hr />

          <div className="mx-5 mb-5">
            <ActionBtn onClick={handleClearCart}>Checkout</ActionBtn>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
