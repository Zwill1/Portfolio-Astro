import { useState } from "react";

// Component imports
import Hamburger from "./Hamburger.jsx";
import HamburgerClose from "./HamburgerClose.jsx";

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <>
      <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
        <div className="flex justify-between h-14 w-10/12 mx-auto items-center">
          <div>
            <h1 className="flex">
              <a
                href="/"
                className="font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase"
                aria-label="Homepage"
                alt="Visuals Plus"
              >
                Visuals Plus
              </a>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex pr-4 navigation">
                <li className="p-4">
                    <a href="/" className="hover:text-[#17A2B8] font-semibold uppercase navigation-padding">Home</a>
                </li>
                <li className="p-4">
                    <a href="/portfolio" className="hover:text-[#17A2B8] font-semibold uppercase navigation-padding">Portfolio</a>
                </li>
                <li className="p-4">
                    <a href="/education" className="hover:text-[#17A2B8] font-semibold uppercase navigation-padding">Education</a>
                </li>
                <li className="p-4">
                    <a href="#contact" className="hover:text-[#17A2B8] font-semibold uppercase navigation-padding">Contact</a>
                </li>
            </ul>
          </div>
          <div className="lg:hidden" onClick={handleClick}>
            {!nav ? <Hamburger /> : <HamburgerClose />}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden navigation" : "absolute bg-white w-full lg:hidden z-50 navigation"
          }
        >
            <li className="w-full mx-auto text-center bg-[#f4f4f4]">
                <a href="/" className="block pt-4 pb-4" onClick={handleClose}>
                Home
                </a>
            </li>
            <li className="w-full mx-auto text-center">
                <a
                href="/portfolio"
                className="block pt-4 pb-4"
                onClick={handleClose}
                >
                Portfolio
                </a>
            </li>
            <li className="w-full mx-auto text-center bg-[#f4f4f4]">
                <a
                href="/education"
                className="block pt-4 pb-4"
                onClick={handleClose}
                >
                Education
                </a>
            </li>
            <li className="w-full mx-auto text-center">
                <a href="#contact" className="block pt-4 pb-4" onClick={handleClose}>
                Contact
                </a>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;