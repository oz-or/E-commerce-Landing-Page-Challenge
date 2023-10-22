import HeroTexts from "./HeroTexts/HeroTexts";
import HeroPriceBtns from "./HeroPriceBtns/HeroPriceBtns";

function HeroInfos() {
  return (
    <div className="px-6 pt-5 pb-20 500:px-[12.5%] 800:w-[800px] 1000:w-[600px]  1000:px-[5%] 1000:pt-24 1100:pl-[10%]">
      <HeroTexts />
      <HeroPriceBtns />
    </div>
  );
}

export default HeroInfos;
