import PreviousSVG from "../../SVGComponents/PreviousSVG";
import NextSVG from "../../SVGComponents/NextSVG";
import { useState } from "react";
import big1 from "/images/image-product-1.jpg";
import small1 from "/images/image-product-1-thumbnail.jpg";
import big2 from "/images/image-product-2.jpg";
import small2 from "/images/image-product-2-thumbnail.jpg";
import big3 from "/images/image-product-3.jpg";
import small3 from "/images/image-product-3-thumbnail.jpg";
import big4 from "/images/image-product-4.jpg";
import small4 from "/images/image-product-4-thumbnail.jpg";

function HeroImages({ setShowLightBox, screenSize }) {
  const [value, setValue] = useState(0);

  const productImgArr = [
    {
      big: big1,
      small: small1,
      id: 1,
    },

    {
      big: big2,
      small: small2,
      id: 2,
    },

    {
      big: big3,
      small: small3,
      id: 3,
    },

    {
      big: big4,
      small: small4,
      id: 4,
    },
  ];

  function handleSliderIncrease() {
    setValue((value) => (value === 3 ? 0 : value + 1));
  }
  function handleSliderDecrease() {
    setValue((value) => (value === 0 ? 3 : value - 1));
  }

  return (
    <div className="500:pt-8 600:flex 1000:flex-col">
      <div className=" overflow-hidden h-[300px] 376:h-auto">
        <div className="relative 500:flex 500:justify-center 1000:h-[400px] 1000:w-[450px] 1000:ml-[5%] 1200:h-[500px] 1200:w-auto">
          <div
            className="absolute px-4 py-[14px] rounded-full bg-whiteColor top-[46%] left-2 z-20  cursor-pointer 500:hidden"
            onClick={handleSliderDecrease}
          >
            <PreviousSVG />
          </div>
          {productImgArr.map(
            (el) =>
              el.id === value + 1 && (
                <img
                  src={el.big}
                  alt="Sneaker Picture"
                  className="mt-[-37.5px] 1000:m-0  500:rounded-2xl 500:m-[-30px] 500:scale-75 600:scale-[65%] 1000:scale-100 "
                  onClick={() => {
                    if (screenSize >= 1000) return setShowLightBox(true);
                  }}
                  key={el.id}
                />
              )
          )}

          <div
            className="absolute px-4 py-[14px] rounded-full bg-whiteColor top-[45%] right-2 z-20 cursor-pointer 500:hidden"
            onClick={handleSliderIncrease}
          >
            <NextSVG />
          </div>
        </div>
      </div>

      <div className="justify-center hidden grid-cols-4 500:grid mx-[12.5%] gap-[23px] mb-5  600:pt-[3.75%] 600:h-[319px] 1000:h-auto 600:ml-[5%] 600:grid-cols-1 1000:grid-cols-4 1000:w-[400px] 1000:ml-[10.75%] 1000:pt-6 1200:gap-x-8 1200:ml-[5%] 1200:m-0 1200:w-[475px] ">
        {/*  */}
        {productImgArr.map((imgObj, i) => {
          return (
            <img
              src={`/images/image-product-${imgObj.id}-thumbnail.jpg`}
              alt={`Fall Limited Edition Sneakers ${imgObj.id}`}
              className={`rounded-lg cursor-pointer hover:opacity-70 active:opacity-40 focus:ring-2 focus:opacity-40 focus:ring-orangeColor active:ring-2 active:ring-orangeColor ${
                i === value && "ring-2 ring-orangeColor opacity-40"
              }`}
              key={i}
              onClick={() => setValue(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeroImages;
