import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const NavigationBar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navLinks = [
    {
      label: "Collections",
      link: "#",
    },
    {
      label: "Men",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-4 bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
        <div className="flex items-center gap-8 lg:w-full">
          <div className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <img
                className="h-12 w-12"
                src="https://i.ibb.co/4WxCzN6/SOLESTYLE.png"
                alt="Logo"
              />
              <span>SOLESTYLE</span>
            </div>
          </div>
          {/* For lg and above, evenly distribute children */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:px-8">
            <div className="flex gap-5">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  className="text-gray-200 hover:text-white text-lg font-semibold transition-colors duration-300"
                  href={item.link}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-500`}
        >
          <section className="bg-gradient-to-b from-purple-400 to-indigo-500 text-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            {navLinks.map((item, index) => (
              <a key={index} className="font-bold" href={item.link}>
                {item.label}
              </a>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />
          {/* avatar image */}
          <img
            width={40}
            height={40}
            className="h-8 w-8 rounded-full"
            src="https://i.ibb.co/ZWy9J38/avatar-1.jpg"
            alt="avatar-img"
          />
        </section>
      </nav>
      <hr className="border-b border-gray-200" />
    </main>
  );
};

export default NavigationBar;
