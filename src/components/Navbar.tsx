import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Logo from "./Logo";
import cn from "classnames";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: { destination: string; name: string }[] = [
    { destination: "/specials", name: "Cafe" },
    { destination: "/store", name: "Store" },
    { destination: "/orders", name: "Orders" },
    { destination: "/about", name: "About" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", colorNavbar);

    return () => {
      window.removeEventListener("scroll", colorNavbar);
    };
  });

  const colorNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight >= 100 && !scrolled) {
        console.log("scrolled");
        setScrolled(true);
      } else if (windowHeight < 100 && scrolled) {
        console.log("not scrolled");
        setScrolled(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "px-2 sm:px-4 py-2.5 mb-6 fixed w-full bg-gradient-to-b from-black to-transparent",
        { scrolled: "bg-[rgba(0,0,0,0.8)]" }
      )}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="mr-4">
          <Link href="/">
            <a className="block fill-white w-[50px] md:w-[90px] ml-4 md:ml-0 hover:fill-red-600 transition-colors duration-300">
              <Logo />
            </a>
          </Link>
        </div>

        {/* cart */}
        <IoCartOutline className="md:order-2 md:mr-2 text-3xl stroke-2 stroke-white hover:stroke-red-600 hover:text-4xl hover:rotate-3 cursor-pointer transition-all" />

        {/* open/close button for mobile nav */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:order-3 inline-flex items-center p-2 mx-3 text-white rounded-lg md:hidden hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* vav links */}
        <div
          className={
            (showMenu ? "" : "hidden") +
            " w-full md:flex-grow md:block md:w-auto"
          }
        >
          <ul className="md:order-1 flex flex-col text-center p-4 pb-2 md:flex-row md:border-0 lg:text-xl md:space-x-8 md:mt-0">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.destination}>
                  <a className="font-custom uppercase text-xl block w-full py-2 pr-4 pl-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-red-100 md:p-0 hover:bg-zinc-800">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
