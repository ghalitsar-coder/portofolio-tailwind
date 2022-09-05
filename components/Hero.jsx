import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../assets/removed.png";

const Hero = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container font-poppins ">
        <div className="flex flex-wrap">
          <div className="w-full self-center   grid  lg:w-1/2   gap-y-4 ">
            <h1 className="text-gradient text-base  font-semibold md:text-xl ">
              Hello 👋, I am{" "}
              <span className="block font-bold text-dark text-4xl md:text-6xl    ">
                {" "}
                Ghalitsar{" "}
              </span>
            </h1>
            <h2 className="text-slate-700 md:text-lg ">
              Front end Dev |{" "}
              <span className="text-dark font-semibold "> React Developer</span>{" "}
            </h2>
            <p className="font-light text-slate-600 md:font-normal leading-relaxed ">
              I have interest in{" "}
              <span className=" text-gradient font-semibold ">
                {" "}
                Software Engineering{" "}
              </span>{" "}
              and{" "}
              <span className=" text-gradient font-semibold ">
                {" "}
                Modern Technology{" "}
              </span>{" "}
            </p>
            <Link href="#">
              <span className="bg-gradient  hover:-translate-y-2 transition duration-700 ease-in-out cursor-pointer   w-max rounded-lg py-3 px-7 ">
                Contact me!
              </span>
            </Link>
          </div>
          <div className="w-full self-end   lg:w-1/2   ">
            <div className="mt-10  relative lg:right-0   w-full h-full -translate-y-32 ">
              <Image
                src={profilePic}
                className="object-cover rounded-xl grayscale lg:-translate-y-14 "
                layout="responsive"
                alt="profile"
              />
              <span className="absolute   w-full   bottom-0 left-1/2 -translate-x-1/2  -z-10 md:scale-125   ">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#db2777"
                    d="M45.6,-45.8C61.6,-41,78.7,-28.9,85.2,-12C91.7,4.8,87.7,26.5,75.4,39.6C63.2,52.6,42.8,57,24.1,61.8C5.5,66.7,-11.3,72,-24.6,67.3C-37.9,62.6,-47.7,47.9,-58.6,32.3C-69.5,16.6,-81.6,0.1,-80.5,-15.5C-79.3,-31.1,-64.9,-45.7,-49.3,-50.5C-33.7,-55.4,-16.9,-50.6,-1,-49.4C14.8,-48.2,29.7,-50.6,45.6,-45.8Z"
                    transform="translate(100 100)  "
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
