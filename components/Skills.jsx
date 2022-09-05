import Image from "next/image";
import React from "react";
import bank from "../assets/bank-app.png";

const Card = () => (
  <div className="mb-14 p-4 md:w-1/2">
    <div className="rounded-md shadow-md overflow-hidden">
      <Image
        unoptimized
        src={bank}
        className="object-cover w-full h-full"
        alt="project"
      />
    </div>
    <h3 className="font-semibold text-xl text-dark mt-5">
      Landing Page Bank App
    </h3>
    <p className="font-medium text-sm text-secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias nam
      adipisci et nulla doloribus?
    </p>
  </div>
);

const Skills = () => {
  return (
    <section id="project" className="pt-36 pb-32">
      <div className="container font-poppins ">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16 ">
            <h4 className="font-semibold md:text-xl text-lg text-gradient mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold md:text-4xl text-dark text-3xl mb-4">
              News Project
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, ab officia eos exercitationem accusamus doloribus
              quisquam?
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Skills;
