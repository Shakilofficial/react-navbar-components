import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-gradient-to-r from-cyan-200 to-blue-200">
      <div className="md:flex items-center justify-between bg-gradient-to-r from-cyan-200 to-blue-200 py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-cyan-800">
          <img
            className="h-12 w-12"
            src="https://i.ibb.co/4WxCzN6/SOLESTYLE.png"
            alt="Logo"
          />
          <span>SOLESTYLE</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6 text-cyan-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-cyan-800" />
          )}
        </div>
        {/* link items */}
        <ul
          className={`md:flex text-center md:items-center pt-8 md:pt-0 md:pb-0 pb-12 absolute md:static bg-cyan-100 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open ? "top-12" : "-top-96"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-4 font-semibold">
              <a
                href={link.link}
                className="text-cyan-800 hover:text-[#4D869C] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn bg-[#7AB2B2] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-[#4D869C]">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
