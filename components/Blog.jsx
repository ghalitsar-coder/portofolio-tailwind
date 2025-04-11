import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrImage from "../assets";

const Card = (props) => {
  const { img, desc, url } = props;

  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 ">
        <Image
          src={img}
          className=" "
          alt="programming"
          height={200}
          width={360}
          layout="responsive"
        />
        <div className="py-8 px-6">
          <Link href={url} target="_blank">
            <h3 className="truncate hover:text-gradient text-dark cursor-pointer  font-semibold text-xl mb-1 ">
              {desc}
            </h3>
          </Link>
          <p className="font-medium text-base text-secondary mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            nesciunt.{" "}
          </p>
          <button className="bg-gradient text-white py-2 px-4 rounded-md">
            <Link href="#">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="project" className="pb-32 pt-36 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16 ">
            <h4 className="font-semibold md:text-xl text-lg text-gradient mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold md:text-4xl text-dark text-3xl mb-4">
              Newest Project
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, ab officia eos exercitationem accusamus doloribus
              quisquam?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {arrImage.map((item, idx) => (
            <Card {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
