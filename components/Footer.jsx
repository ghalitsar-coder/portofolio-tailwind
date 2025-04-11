import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const links = [
    { name: "Programming" },
    { name: "Technology" },
    { name: "Life Style" },
  ];
  const navLink = [
    { name: "home" },
    { name: "about" },
    { name: "project" },
    { name: "clients" },
    { name: "blog" },
    { name: "contact" },
  ];
  return (
    <footer className="bg-dark pt-24 pb-12 ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3 ">
            <h2 className="font-bold text-4xl text-white mb-5">Elfaris</h2>
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <p>ghalitsardev@gmail.com</p>
            <p>Jl. xyz No. 21</p>
            <p>Bandung</p>
          </div>
          <div className="w-full mb-12 px-4 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">
              Blog Category
            </h3>
            <ul className="text-slate-300 grid gap-y-4">
              {links.map((item) => (
                <li key={item.name} className="text-base hover:text-gradient">
                  <Link href="#">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-12 px-4 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
            <ul className="text-slate-300 grid gap-y-4">
              {navLink.map((item) => (
                <li key={item.name} className="text-base hover:text-gradient">
                  <Link href={`#${item.name}`}>
                    <span className="capitalize cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700 ">
          <SocialMedia classes="footer" />
          <p className="text-center font-medium text-sm text-slate-500 mt-5 ">
            Made with 💞 by{" "}
            <span className="text-gradient">
              <Link href="https://ghalitsardev.netlify.app">
                <a target="_blank" rel="noopener noreferrer">
                  Ghalitsar
                </a>
              </Link>
            </span>{" "}
            &copy; Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
