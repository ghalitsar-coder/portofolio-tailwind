import Link from "next/link";
import React from "react";

import SocialMedia from "./SocialMedia";
const About = () => {

  return (
    <section id="about" className="divider-padding">
      <div className="container font-poppins ">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 lg:w-1/2 ">
            <h4 className="font-bold text-gradient uppercase text-lg mb-2 ">
              About me
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-2 max-w-md lg:text-4xl">
              React and Javascript Enthusiast
            </h2>
            <p className="font-medium text-sm text-secondary max-w-xl lg:text-md">
              Hello, my name is ghalitsar and I`m 20y.o, I have an interest in
              software engineering, I also studied software engineering for 2
              years since I was in high school, the language that I used is
              javascript also their library and framework (React.js & Node.js)
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2   ">
            <h2>{"  "}</h2>
            <h3 className="font-semibold text-dark mb-2 text-2xl lg:text-3xl ">
              Lets make connections{" "}
            </h3>
            <p className="font-medium text-base text-secondary mb-6">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              aliquam delectus hic natus excepturi? Velit rerum commodi
              cupiditate!{" "}
            </p>
           <SocialMedia  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
