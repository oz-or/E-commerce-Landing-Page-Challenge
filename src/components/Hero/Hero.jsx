import HeroImages from "./HeroImages/HeroImages";

import HeroInfos from "./HeroInfos/HeroInfos";

function Hero({ setShowLightBox, screenSize }) {
  return (
    <section id="hero" className=" 1100:justify-center 1100:flex">
      <div className="1000:flex 1100:justify-center 1100:pt-[70px] ">
        <HeroImages setShowLightBox={setShowLightBox} screenSize={screenSize} />
        <HeroInfos />
      </div>
    </section>
  );
}

export default Hero;
