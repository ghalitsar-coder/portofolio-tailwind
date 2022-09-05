import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
const SocialMedia = ({ classes }) => {
  const socialMedia = [
    {
      location: "http://github.com/ghalitsar-coder",
      icon: <FaGithub />,
    },
    {
      location: "http://instagram.com/elfaris.__",

      icon: <FaInstagram />,
    },

    {
      location: "https://www.linkedin.com/in/ghalitsar-elfaris",

      icon: <FaLinkedin />,
    },
  ];
  return (
    <div
      className={` ${classes && "justify-center"} flex items-center gap-x-4  `}
    >
      {socialMedia.map((item) => (
        <Link href={item.location} key={item.location}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9  rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-gradient hover:bg-gradient hover:text-white transition duration-700  "
          >
            <span className="text-2xl rounded-full"> {item.icon}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
