import { useState } from "react";
import MenuSVG from "../../../SVGComponents/MenuSVG";
import CloseSVG from "../../../SVGComponents/CloseSVG";
import NavLink from "./NavLink";

function NavLinks() {
  const NavLinksArr = ["Collections", "Men", "Women", "About", "Contact"];
  /* Ineed to set the isHamburger state in comparison to the screen width(1000px) */
  const [isHamburger, setIsHamburger] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return isHamburger ? (
    <>
      <div
        onClick={() => setIsHamburgerOpen(true)}
        className="absolute left-6 top-[26px] cursor-pointer"
      >
        <MenuSVG width="16" height="15" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 flex flex-col pt-6 bg-whiteColor w-60">
        <div
          className="scale-110 pl-9"
          onClick={() => setIsHamburgerOpen(false)}
        >
          <CloseSVG />
        </div>
        <div className="mt-11">
          {NavLinksArr.map((NavLinkText, i) => (
            <NavLink
              text={NavLinkText}
              key={i}
              className={"py-[10px] pl-7 text-lg font-bold"}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="items-stretch hidden gap-x-9 1000:flex 1440:text-xl 1440:gap-x-11">
      {NavLinksArr.map((NavLinkText, i) => (
        <NavLink
          text={NavLinkText}
          key={i}
          className={
            "text-grayBlue  1000:py-12 hover:pb-11 hover:text-darkGrayBlue hover-underline-animation"
          }
        />
      ))}
    </div>
  );
}

export default NavLinks;
