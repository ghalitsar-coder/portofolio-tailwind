import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const links = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Project",
    },

    {
      name: "Clients",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <nav
      className={`bg-transparent  ${
        offset
          ? "fixed bg-white/25 backdrop-blur-sm   border-b-[.1px] border-b-slate-300 "
          : "absolute "
      } top-0 left-0 w-full font-poppins z-[999] `}
    >
      <div className="container flex justify-between items-center relative py-4">
        <h1>
          <Link href="#home">Elfaris</Link>
        </h1>
        <ul className="md:flex hidden items-center gap-x-9">
          {links.map((item) => (
            <li
              key={item.name}
              className={
                "hover:text-gradient transition duration-300 cursor-pointer "
              }
            >
              <Link href={`#${item.name.toLocaleLowerCase()}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center md:hidden">
          <button
            id="hamburger"
            className={`block absolute ${
              toggle && "active z-[9999]"
            }  right-4  `}
            onClick={handleToggle}
          >
            <span className="hamburger-line transition-menu  origin-top-left "></span>
            <span className="hamburger-line transition-menu "></span>
            <span className="hamburger-line transition-menu origin-bottom-left"></span>
          </button>
        </div>
      </div>
      <div
        className={`absolute  bg-gradient backdrop-blur-sm  transition duration-300   top-0 right-0 ${
          toggle ? "flex" : "hidden"
        } w-[300px] h-screen md:hidden `}
      >
        <ul className="flex flex-col gap-y-5 p-5">
          {links.map((item) => (
            <li
              key={item.name}
              className={
                "hover:text-dark transition duration-300 cursor-pointer "
              }
              onClick={handleToggle}
            >
              <Link href={`#${item.name.toLocaleLowerCase()}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
