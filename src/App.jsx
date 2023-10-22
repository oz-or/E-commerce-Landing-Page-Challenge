import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LightBox from "./components/Hero/HeroImages/LightBox";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import CartContext from "./contexts/cartContext";

function App() {
  const screenSize = useWindowSize();

  const [showLightBox, setShowLightBox] = useState(false);

  const [itemQuantity, setItemQuantity] = useState(0);
  const originalPrice = 250;
  const newPrice = 125;

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      {/* this is temporary logic */}
      {screenSize.width >= 1000 && showLightBox && (
        <LightBox setShowLightBox={setShowLightBox} />
      )}
      <CartContext.Provider
        value={{
          itemQuantity,
          setItemQuantity,
          originalPrice,
          newPrice,
          isEmpty,
          setIsEmpty,
        }}
      >
        <Navbar />
        <Hero setShowLightBox={setShowLightBox} screenSize={screenSize.width} />
      </CartContext.Provider>
    </div>
  );
}

export default App;

/* TECH STACK */

//Tailwind for styling
//Redux for global state(e.g. cart)
//SPA=>don't need routing
