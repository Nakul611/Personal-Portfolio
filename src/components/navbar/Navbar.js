import React from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-14 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div>
        <img src={logo} alt="logo" className="w-full h-10" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
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
      </div>
    </div>
  );
};

export default Navbar;
