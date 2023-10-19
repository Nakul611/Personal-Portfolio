import React, { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-14 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div>
        <img src={logo} alt="logo" className="w-full h-10" />
      </div>
      <div className="flex items-center gap-10">
        <ul className={`absolute top-12 left-0 bg-bodyColor bg-opacity-95 w-full p-4 gap-8 ${isMenuOpen ? 'block' : 'hidden'} md:static md:flex md:items-center md:bg-transparent md:w-auto md:p-5 md:gap-15`}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'text-white' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
