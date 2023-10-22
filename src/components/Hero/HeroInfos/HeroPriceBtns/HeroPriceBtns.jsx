import MinusSVG from "../../../SVGComponents/MinusSVG";
import PlusSVG from "../../../SVGComponents/PlusSVG";
import ActionBtn from "../../../ui/ActionBtn";
import CartSVG from "../../../SVGComponents/CartSVG";
import { useContext } from "react";
import CartContext from "../../../../contexts/CartContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../cartSlice";

function HeroPriceBtns() {
  const { newPrice, originalPrice, itemQuantity, setItemQuantity, setIsEmpty } =
    useContext(CartContext);

  const bargainPrice = (newPrice / originalPrice) * 100;

  const product = {
    name: "Fall Limited Edition Sneakers",
    price: newPrice,
    quantity: 0,
    totalPrice: 0,
  };

  const dispatch = useDispatch();

  function handleItemQuantityDecrease() {
    if (itemQuantity === 0) return;
    setItemQuantity((itemQuantity) => itemQuantity - 1);
  }
  function handleItemQuantityIncrease() {
    if (itemQuantity === 10) return;
    setItemQuantity((itemQuantity) => itemQuantity + 1);
  }

  function handleOrder() {
    if (itemQuantity === 0) return;

    const productCopy = {
      ...product,
      quantity: itemQuantity,
      totalPrice: newPrice * itemQuantity,
    };

    dispatch(addToCart(productCopy));

    setIsEmpty(false);

    setItemQuantity(0);
  }

  return (
    <div>
      <div className="flex items-center justify-between my-5 500:my-6 600:grid 600:gap-y-1 1000:mb-9 1200:mb-12 1200:mt-9">
        <div className="flex items-center 1000:pb-1">
          <span className=" text-[27px] leading-9 font-bold mr-5 1000:text-4xl">
            {`$${product.price.toFixed(2)}`}
          </span>
          <span className="px-2 py-[3px] text-sm font-bold rounded-md 1000:text-base text-orangeColor bg-paleOrange">
            {`${bargainPrice}%`}
          </span>
        </div>
        <span className="line-through text-grayBlue 1000:text-xl">
          {`$${originalPrice.toFixed(2)}`}
        </span>
      </div>

      <div className="600:flex 600:gap-x-4">
        <div className="flex items-center justify-between px-6 py-4 rounded-lg 600:px-[14px] bg-lightGrayBlue 600:w-60">
          <button className="h-5" onClick={handleItemQuantityDecrease}>
            <MinusSVG fill="#FF7E1B" />
          </button>
          <span className="font-bold">{itemQuantity}</span>
          <button className="h-5" onClick={handleItemQuantityIncrease}>
            <PlusSVG fill="#FF7E1B" />
          </button>
        </div>

        <ActionBtn
          className="shadow-[0px_30px_34px_-9px_rgba(255,125,26,.3)] 600:mt-0 mt-4"
          onClick={handleOrder}
        >
          <CartSVG fill="#fff" className="scale-[80%] translate-y-[-1px]" />
          <span>Add to cart</span>
        </ActionBtn>
      </div>
    </div>
  );
}

export default HeroPriceBtns;
